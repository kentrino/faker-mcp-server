import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { faker } from '@faker-js/faker';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ErrorCode,
  McpError,
} from "@modelcontextprotocol/sdk/types.js";
import { spawn, type ChildProcess } from 'node:child_process';
import { join } from 'node:path';
import { setTimeout } from 'node:timers/promises';

/**
 * A class to interact with the MCP server process for testing
 */
export class McpServerTestClient {
  private process: ChildProcess | null = null;
  private requestId = 0;
  private responsePromises: Map<string, {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolve: (value: any) => void;
    reject: (reason: Error) => void;
  }> = new Map();

  /**
   * Start the MCP server process
   */
  async start(): Promise<void> {
    // Build the server first
    await new Promise<void>((resolve, reject) => {
      const buildProcess = spawn('npm', ['run', 'build'], {
        stdio: 'pipe',
        shell: true
      });
      
      buildProcess.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Build process exited with code ${code}`));
        }
      });
    });

    // Start the server process
    this.process = spawn('node', ['build/index.js'], {
      stdio: ['pipe', 'pipe', 'pipe'],
      shell: true
    });

    // Set up event handlers
    this.process.stdout?.on('data', (data) => {
      try {
        const lines = data.toString().trim().split('\n');
        for (const line of lines) {
          if (line.trim()) {
            const response = JSON.parse(line);
            const promise = this.responsePromises.get(response.id);
            if (promise) {
              promise.resolve(response);
              this.responsePromises.delete(response.id);
            }
          }
        }
      } catch (error) {
        console.error('Error parsing server response:', error);
      }
    });

    this.process.stderr?.on('data', (data) => {
      console.error(`Server error: ${data}`);
    });

    // Wait for the server to start
    await setTimeout(500);
  }

  /**
   * Stop the MCP server process
   */
  async stop(): Promise<void> {
    if (this.process) {
      this.process.kill();
      this.process = null;
    }
  }

  /**
   * Send a request to the MCP server
   */
  async sendRequest<T>(method: string, params: Record<string, unknown>): Promise<T> {
    if (!this.process) {
      throw new Error('Server not started');
    }

    const id = String(this.requestId++);
    const request = {
      jsonrpc: '2.0',
      id,
      method,
      params
    };

    return new Promise<T>((resolve, reject) => {
      this.responsePromises.set(id, { resolve, reject });
      this.process?.stdin?.write(`${JSON.stringify(request)}\n`);
    });
  }

  /**
   * List available tools
   */
  async listTools() {
    return this.sendRequest<{ tools: Record<string, unknown>[] }>('list_tools', {});
  }

  /**
   * Call a tool
   */
  async callTool(name: string, args: Record<string, unknown>) {
    return this.sendRequest<{ result: Record<string, unknown> }>('call_tool', {
      name,
      arguments: args
    });
  }
}

/**
 * Create a test client for the MCP server
 */
export async function createTestClient(): Promise<McpServerTestClient> {
  const client = new McpServerTestClient();
  await client.start();
  return client;
}