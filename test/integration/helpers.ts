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
      tools: [
        {
          name: "generate_person",
          description: "Generate fake person data (names, job titles, etc.)"
        },
        {
          name: "generate_lorem",
          description: "Generate fake lorem ipsum text"
        },
        {
          name: "generate_internet",
          description: "Generate fake internet data (emails, usernames, URLs, etc.)"
        },
        {
          name: "generate_location",
          description: "Generate fake location data"
        }
      ]
    };
  }
  
  /**
   * Call a tool
   */
  async callTool(name: string, args: Record<string, unknown>) {
    switch (name) {
      case "generate_person": {
        const fields = (args.fields as string[]) || [];
        
        const result: Record<string, string> = {};
        
        if (fields.length === 0) {
          result.firstName = faker.person.firstName();
          result.lastName = faker.person.lastName();
          result.fullName = faker.person.fullName();
          result.gender = faker.person.gender();
          result.jobTitle = faker.person.jobTitle();
        } else {
          for (const field of fields) {
            switch (field) {
              case 'firstName':
                result.firstName = faker.person.firstName();
                break;
              case 'lastName':
                result.lastName = faker.person.lastName();
                break;
              case 'fullName':
                result.fullName = faker.person.fullName();
                break;
              case 'gender':
                result.gender = faker.person.gender();
                break;
              case 'jobTitle':
                result.jobTitle = faker.person.jobTitle();
                break;
            }
          }
        }
        
        return { result };
      }
      
      case "generate_lorem": {
        const type = args.type as string || 'paragraph';
        const count = args.count as number || 1;
        
        let text = '';
        
        switch (type) {
          case 'word':
            text = faker.lorem.word();
            break;
          case 'words':
            text = faker.lorem.words(count);
            break;
          case 'sentence':
            text = faker.lorem.sentence(count);
            break;
          case 'sentences':
            text = faker.lorem.sentences(count);
            break;
          case 'paragraph':
            text = faker.lorem.paragraph();
            break;
          case 'paragraphs':
            text = faker.lorem.paragraphs(count);
            break;
          case 'text':
            text = faker.lorem.text();
            break;
          default:
            text = faker.lorem.paragraph();
        }
        
        return { result: { text } };
      }
      
      case "generate_internet": {
        const fields = (args.fields as string[]) || [];
        
        const result: Record<string, string> = {};
        
        if (fields.length === 0) {
          result.email = faker.internet.email();
          result.userName = faker.internet.username();
          result.domainName = faker.internet.domainName();
          result.url = faker.internet.url();
          result.ip = faker.internet.ip();
        } else {
          for (const field of fields) {
            switch (field) {
              case 'email':
                result.email = faker.internet.email();
                break;
              case 'userName':
                result.userName = faker.internet.username();
                break;
              case 'domainName':
                result.domainName = faker.internet.domainName();
                break;
              case 'url':
                result.url = faker.internet.url();
                break;
              case 'ip':
                result.ip = faker.internet.ip();
                break;
            }
          }
        }
        
        return { result };
      }
      
      case "generate_location": {
        const fields = (args.fields as string[]) || [];
        
        const result: Record<string, string> = {};
        
        if (fields.length === 0) {
          result.street = faker.location.street();
          result.city = faker.location.city();
          result.country = faker.location.country();
          result.zipCode = faker.location.zipCode();
          result.latitude = String(faker.location.latitude());
          result.longitude = String(faker.location.longitude());
        } else {
          for (const field of fields) {
            switch (field) {
              case 'street':
                result.street = faker.location.street();
                break;
              case 'city':
                result.city = faker.location.city();
                break;
              case 'country':
                result.country = faker.location.country();
                break;
              case 'zipCode':
                result.zipCode = faker.location.zipCode();
                break;
              case 'latitude':
                result.latitude = String(faker.location.latitude());
                break;
              case 'longitude':
                result.longitude = String(faker.location.longitude());
                break;
            }
          }
        }
        
        return { result };
      }
      
      default:
        throw new Error(`Unknown tool: ${name}`);
    }
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