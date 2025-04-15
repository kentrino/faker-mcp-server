import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { createTestClient, type McpServerTestClient } from './helpers';

describe('Faker MCP Server Internationalization Tests', () => {
  let client: McpServerTestClient;

  // Set up the test client before all tests
  beforeAll(async () => {
    client = await createTestClient();
  }, 10000); // Increase timeout for server startup

  // Clean up after all tests
  afterAll(async () => {
    await client.stop();
  });

  // Test generate_person with different locales
  it('should generate person data with different locales', async () => {
    // Test English locale
    const enResponse = await client.callTool('generate_person', {
      locale: 'en'
    });
    
    expect(enResponse).toBeDefined();
    expect(enResponse.result).toBeDefined();
    
    // Store English results for comparison
    const enResult = enResponse.result;
    
    // Test Japanese locale
    const jaResponse = await client.callTool('generate_person', {
      locale: 'ja'
    });
    
    expect(jaResponse).toBeDefined();
    expect(jaResponse.result).toBeDefined();
    
    // Store Japanese results for comparison
    const jaResult = jaResponse.result;
    
    // Test French locale
    const frResponse = await client.callTool('generate_person', {
      locale: 'fr'
    });
    
    expect(frResponse).toBeDefined();
    expect(frResponse.result).toBeDefined();
    
    // Store French results for comparison
    const frResult = frResponse.result;
    
    // Verify that the results are different across locales
    // This is a simple check to ensure that different locales produce different results
    // Note: There's a small chance this could fail randomly if the same name is generated
    expect(enResult.firstName).not.toBe(jaResult.firstName);
    expect(enResult.firstName).not.toBe(frResult.firstName);
    expect(jaResult.firstName).not.toBe(frResult.firstName);
  });

  // Test generate_location with different locales
  it('should generate location data with different locales', async () => {
    // Test English locale
    const enResponse = await client.callTool('generate_location', {
      locale: 'en',
      fields: ['city', 'country']
    });
    
    expect(enResponse).toBeDefined();
    expect(enResponse.result).toBeDefined();
    
    const enResult = enResponse.result;
    expect(enResult.city).toBeDefined();
    expect(enResult.country).toBeDefined();
    
    // Test Japanese locale
    const jaResponse = await client.callTool('generate_location', {
      locale: 'ja',
      fields: ['city', 'country']
    });
    
    expect(jaResponse).toBeDefined();
    expect(jaResponse.result).toBeDefined();
    
    const jaResult = jaResponse.result;
    expect(jaResult.city).toBeDefined();
    expect(jaResult.country).toBeDefined();
    
    // Test French locale
    const frResponse = await client.callTool('generate_location', {
      locale: 'fr',
      fields: ['city', 'country']
    });
    
    expect(frResponse).toBeDefined();
    expect(frResponse.result).toBeDefined();
    
    const frResult = frResponse.result;
    expect(frResult.city).toBeDefined();
    expect(frResult.country).toBeDefined();
    
    // Verify that the results are different across locales
    // This is a simple check to ensure that different locales produce different results
    expect(enResult.city).not.toBe(jaResult.city);
    expect(enResult.country).not.toBe(jaResult.country);
  });

  // Test generate_lorem with different locales
  it('should generate lorem text with different locales', async () => {
    // Test English locale
    const enResponse = await client.callTool('generate_lorem', {
      locale: 'en',
      type: 'sentence',
      count: 1
    });
    
    expect(enResponse).toBeDefined();
    expect(enResponse.result).toBeDefined();
    const enText = enResponse.result.text as string;
    
    // Test Japanese locale
    const jaResponse = await client.callTool('generate_lorem', {
      locale: 'ja',
      type: 'sentence',
      count: 1
    });
    
    expect(jaResponse).toBeDefined();
    expect(jaResponse.result).toBeDefined();
    const jaText = jaResponse.result.text as string;
    
    // Verify that the results are different across locales
    expect(enText).not.toBe(jaText);
  });
});