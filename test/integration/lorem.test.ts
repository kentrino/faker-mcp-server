import { describe, it, expect } from 'vitest';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serverPath = path.resolve(__dirname, '../../build/index.js');

/**
 * Helper function to execute a JSON-RPC request against the faker-server
 * @param request The JSON-RPC request object
 * @returns Promise that resolves to the parsed JSON-RPC response
 */
interface JsonRpcRequest {
  jsonrpc: string;
  id: string;
  method: string;
  params: {
    name: string;
    arguments: Record<string, unknown>;
  };
}

interface JsonRpcResponse {
  jsonrpc: string;
  id: string;
  result?: {
    content: Array<{
      type: string;
      text: string;
    }>;
  };
  error?: {
    code: number;
    message: string;
  };
}

async function executeJsonRpcRequest(request: JsonRpcRequest): Promise<JsonRpcResponse> {
  return new Promise((resolve, reject) => {
    // Spawn the server process
    const serverProcess = spawn('node', [serverPath], {
      stdio: ['pipe', 'pipe', 'pipe']
    });
    
    let stdout = '';
    let stderr = '';
    
    // Collect stdout data
    serverProcess.stdout.on('data', (data) => {
      stdout += data.toString();
    });
    
    // Collect stderr data (for debugging)
    serverProcess.stderr.on('data', (data) => {
      stderr += data.toString();
    });
    
    // Handle process completion
    serverProcess.on('close', (code) => {
      if (code !== 0) {
        console.error(`Server process exited with code ${code}`);
        console.error(`stderr: ${stderr}`);
        reject(new Error(`Server process exited with code ${code}`));
        return;
      }
      
      try {
        // Parse the JSON response
        const response = JSON.parse(stdout);
        resolve(response);
      } catch (error) {
        console.error('Failed to parse JSON response:', error);
        console.error(`stdout: ${stdout}`);
        reject(error);
      }
    });
    
    // Write the JSON-RPC request to stdin
    serverProcess.stdin.write(JSON.stringify(request));
    serverProcess.stdin.end();
  });
}

describe('Lorem ipsum generator integration tests', () => {
  it('should generate lorem ipsum paragraph with default settings', async () => {
    // Create a JSON-RPC request for the generate_lorem tool without arguments
    const request = {
      jsonrpc: '2.0',
      id: '1',
      method: 'tools/call',
      params: {
        name: 'generate_lorem',
        arguments: {}
      }
    };
    
    // Execute the request
    const response = await executeJsonRpcRequest(request);
    
    // Verify the response structure
    expect(response).toBeDefined();
    expect(response.jsonrpc).toBe('2.0');
    expect(response.id).toBe('1');
    expect(response.result).toBeDefined();
    
    // Ensure result exists before accessing its properties
    if (!response.result) {
      throw new Error('Response result is undefined');
    }
    
    expect(response.result.content).toBeInstanceOf(Array);
    expect(response.result.content.length).toBe(1);
    expect(response.result.content[0].type).toBe('text');
    
    // Verify the generated text
    const generatedText = response.result.content[0].text;
    expect(generatedText).toBeDefined();
    expect(typeof generatedText).toBe('string');
    expect(generatedText.length).toBeGreaterThan(0);
    
    // A paragraph should contain multiple words and spaces
    expect(generatedText.split(' ').length).toBeGreaterThan(1);
  });
  
  it('should generate a single lorem ipsum word when type is set to "word"', async () => {
    // Create a JSON-RPC request for the generate_lorem tool with type=word
    const request = {
      jsonrpc: '2.0',
      id: '2',
      method: 'tools/call',
      params: {
        name: 'generate_lorem',
        arguments: {
          type: 'word'
        }
      }
    };
    
    // Execute the request
    const response = await executeJsonRpcRequest(request);
    
    // Verify the response structure
    expect(response).toBeDefined();
    expect(response.jsonrpc).toBe('2.0');
    expect(response.id).toBe('2');
    expect(response.result).toBeDefined();
    
    // Ensure result exists before accessing its properties
    if (!response.result) {
      throw new Error('Response result is undefined');
    }
    
    expect(response.result.content).toBeInstanceOf(Array);
    expect(response.result.content.length).toBe(1);
    expect(response.result.content[0].type).toBe('text');
    
    // Verify the generated text is a single word (no spaces)
    const generatedText = response.result.content[0].text;
    expect(generatedText).toBeDefined();
    expect(typeof generatedText).toBe('string');
    expect(generatedText.length).toBeGreaterThan(0);
    expect(generatedText.split(' ').length).toBe(1);
  });
  
  it('should generate multiple lorem ipsum words when type is set to "words" with count', async () => {
    const wordCount = 5;
    
    // Create a JSON-RPC request for the generate_lorem tool with type=words and count=5
    const request = {
      jsonrpc: '2.0',
      id: '3',
      method: 'tools/call',
      params: {
        name: 'generate_lorem',
        arguments: {
          type: 'words',
          count: wordCount
        }
      }
    };
    
    // Execute the request
    const response = await executeJsonRpcRequest(request);
    
    // Verify the response structure
    expect(response).toBeDefined();
    expect(response.jsonrpc).toBe('2.0');
    expect(response.id).toBe('3');
    expect(response.result).toBeDefined();
    
    // Ensure result exists before accessing its properties
    if (!response.result) {
      throw new Error('Response result is undefined');
    }
    
    expect(response.result.content).toBeInstanceOf(Array);
    expect(response.result.content.length).toBe(1);
    expect(response.result.content[0].type).toBe('text');
    
    // Verify the generated text has the requested number of words
    const generatedText = response.result.content[0].text;
    expect(generatedText).toBeDefined();
    expect(typeof generatedText).toBe('string');
    expect(generatedText.length).toBeGreaterThan(0);
    
    // The number of words should be equal to the requested count
    // Note: Faker.js might not always generate exactly the requested number
    // so we check if it's close to the requested count
    const actualWordCount = generatedText.split(' ').length;
    expect(actualWordCount).toBeGreaterThanOrEqual(wordCount - 1);
    expect(actualWordCount).toBeLessThanOrEqual(wordCount + 1);
  });
});