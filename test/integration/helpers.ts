import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { faker } from '@faker-js/faker';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ErrorCode,
  McpError,
} from "@modelcontextprotocol/sdk/types.js";

/**
 * A test client for the MCP server
 */
export class TestClient {
  /**
   * List available tools
   */
  async listTools() {
    return {
    };
  }
  
  /**
   * Call a tool
   */
  async callTool(name: string, args: Record<string, unknown>) {
  }
  
  /**
   * Stop the client (no-op for this implementation)
   */
  async stop() {
    // No-op
  }
}

/**
 * Create a test client for the MCP server
 */
export async function createTestClient(): Promise<TestClient> {
  return new TestClient();
}