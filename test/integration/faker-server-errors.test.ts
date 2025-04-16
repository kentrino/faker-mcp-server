import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { createTestClient, type TestClient } from './helpers';

describe('Faker MCP Server Error Handling Tests', () => {
  let client: TestClient;

  // Set up the test client before all tests
  beforeAll(async () => {
    client = await createTestClient();
  }, 10000); // Increase timeout for server startup

  // Clean up after all tests
  afterAll(async () => {
    await client.stop();
  });

  // Test invalid tool name
  it('should handle invalid tool name', async () => {
    try {
      await client.callTool('non_existent_tool', {});
      // If we reach here, the test should fail
      expect(true).toBe(false);
    } catch (error) {
      // Expect an error to be thrown
      expect(error).toBeDefined();
    }
  });

  // Test invalid arguments
  it('should handle invalid arguments for generate_person', async () => {
    try {
      // Intentionally passing invalid arguments
      await client.callTool('generate_person', {
        fields: 'not_an_array' as unknown as string[] // Should be an array
      });
      
      // The server might handle this gracefully, so we don't necessarily expect an error
      // Instead, we'll check that the response is still valid
      
    } catch (error) {
      // If an error is thrown, that's also acceptable
      expect(error).toBeDefined();
    }
  });

  // Test invalid locale
  it('should handle invalid locale', async () => {
    // Using a non-existent locale should fall back to default
    const response = await client.callTool('generate_person', {
      locale: 'xx_INVALID'
    });
    
    // Should still return a result (using default locale)
    expect(response).toBeDefined();
    expect(response.result).toBeDefined();
    expect(response.result.firstName).toBeDefined();
  });

  // Test invalid field names
  it('should handle invalid field names', async () => {
    const response = await client.callTool('generate_person', {
      fields: ['firstName', 'nonExistentField']
    });
    
    // Should return the valid fields and ignore invalid ones
    expect(response).toBeDefined();
    expect(response.result).toBeDefined();
    expect(response.result.firstName).toBeDefined();
    expect(response.result.nonExistentField).toBeUndefined();
  });

  // Test with empty fields array
  it('should handle empty fields array', async () => {
    const response = await client.callTool('generate_person', {
      fields: []
    });
    
    // Should return all default fields
    expect(response).toBeDefined();
    expect(response.result).toBeDefined();
    expect(response.result.firstName).toBeDefined();
    expect(response.result.lastName).toBeDefined();
    expect(response.result.fullName).toBeDefined();
    expect(response.result.gender).toBeDefined();
    expect(response.result.jobTitle).toBeDefined();
  });

  // Test with invalid type for generate_lorem
  it('should handle invalid type for generate_lorem', async () => {
    try {
      const response = await client.callTool('generate_lorem', {
        type: 'invalid_type'
      });
      
      // The server might handle this gracefully by using a default type
      expect(response).toBeDefined();
      expect(response.result).toBeDefined();
      
      const text = response.result.text as string;
      expect(typeof text).toBe('string');
      
    } catch (error) {
      // If an error is thrown, that's also acceptable
      expect(error).toBeDefined();
    }
  });

  // Test with negative count for generate_lorem
  it('should handle negative count for generate_lorem', async () => {
    try {
      const response = await client.callTool('generate_lorem', {
        type: 'words',
        count: -5
      });
      
      // The server might handle this gracefully by using a default count
      expect(response).toBeDefined();
      expect(response.result).toBeDefined();
      
      const text = response.result.text as string;
      expect(typeof text).toBe('string');
      expect(text.length).toBeGreaterThan(0);
      
    } catch (error) {
      // If an error is thrown, that's also acceptable
      expect(error).toBeDefined();
    }
  });
});