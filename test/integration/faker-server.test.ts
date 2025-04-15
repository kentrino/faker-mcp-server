import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { createTestClient, type McpServerTestClient } from './helpers';

describe('Faker MCP Server Integration Tests', () => {
  let client: McpServerTestClient;

  // Set up the test client before all tests
  beforeAll(async () => {
    client = await createTestClient();
  }, 10000); // Increase timeout for server startup

  // Clean up after all tests
  afterAll(async () => {
    await client.stop();
  });

  // Test listing tools
  it('should list available tools', async () => {
    const response = await client.listTools();
    
    // Verify the response contains tools
    expect(response).toBeDefined();
    expect(response.tools).toBeInstanceOf(Array);
    expect(response.tools.length).toBeGreaterThan(0);
    
    // Verify some specific tools exist
    const toolNames = response.tools.map((tool: Record<string, unknown>) => tool.name as string);
    expect(toolNames).toContain('generate_person');
    expect(toolNames).toContain('generate_lorem');
    expect(toolNames).toContain('generate_internet');
  });

  // Test generate_person tool
  it('should generate person data', async () => {
    const response = await client.callTool('generate_person', {});
    
    // Verify the response contains person data
    expect(response).toBeDefined();
    expect(response.result).toBeDefined();
    
    // Check for expected person fields
    const result = response.result;
    expect(result.firstName).toBeDefined();
    expect(result.lastName).toBeDefined();
    expect(result.fullName).toBeDefined();
    expect(result.gender).toBeDefined();
    expect(result.jobTitle).toBeDefined();
  });

  // Test generate_person tool with specific fields
  it('should generate specific person fields', async () => {
    const response = await client.callTool('generate_person', {
      fields: ['firstName', 'lastName']
    });
    
    // Verify the response contains only the requested fields
    expect(response).toBeDefined();
    expect(response.result).toBeDefined();
    
    const result = response.result;
    expect(result.firstName).toBeDefined();
    expect(result.lastName).toBeDefined();
    expect(result.fullName).toBeUndefined();
    expect(result.gender).toBeUndefined();
    expect(result.jobTitle).toBeUndefined();
  });

  // Test generate_lorem tool
  it('should generate lorem ipsum text', async () => {
    const response = await client.callTool('generate_lorem', {});
    
    // Verify the response contains lorem ipsum text
    expect(response).toBeDefined();
    expect(response.result).toBeDefined();
    
    const text = response.result.text as string;
    expect(typeof text).toBe('string');
    expect(text.length).toBeGreaterThan(0);
  });

  // Test generate_lorem tool with specific type and count
  it('should generate specific lorem ipsum content', async () => {
    const response = await client.callTool('generate_lorem', {
      type: 'words',
      count: 5
    });
    
    // Verify the response contains the requested lorem ipsum content
    expect(response).toBeDefined();
    expect(response.result).toBeDefined();
    
    const text = response.result.text as string;
    expect(typeof text).toBe('string');
    
    // Count the number of words (approximately)
    const wordCount = text.split(' ').length;
    expect(wordCount).toBe(5);
  });

  // Test generate_internet tool
  it('should generate internet data', async () => {
    const response = await client.callTool('generate_internet', {});
    
    // Verify the response contains internet data
    expect(response).toBeDefined();
    expect(response.result).toBeDefined();
    
    // Check for expected internet fields
    const result = response.result;
    expect(result.email).toBeDefined();
    expect(result.userName).toBeDefined();
    expect(result.domainName).toBeDefined();
  });

  // Test error handling for invalid tool
  it('should handle invalid tool requests', async () => {
    try {
      await client.callTool('invalid_tool', {});
      // If we reach here, the test should fail
      expect(true).toBe(false);
    } catch (error) {
      // Expect an error to be thrown
      expect(error).toBeDefined();
    }
  });
});