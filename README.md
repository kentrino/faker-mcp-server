# faker-server MCP Server

MCP server to get fake strings

This is a TypeScript-based MCP server that provides tools for generating fake data using Faker.js. It demonstrates core MCP concepts by providing:
- Tools for generating various types of fake data (person, lorem, internet, etc.)
- Support for different locales for internationalization
- Customizable options for each data type


## Features

### Tools
- `generate_person` - Generate fake person data (names, job titles, etc.)
- `generate_lorem` - Generate fake lorem ipsum text
- `generate_internet` - Generate fake internet data (emails, usernames, URLs, etc.)
- `generate_date` - Generate fake dates
- `generate_commerce` - Generate fake commerce data (products, prices, etc.)
- And many more modules from Faker.js

### Features
- Support for multiple locales (en, ja, fr, etc.)
- Customizable field selection for each data type
- Configurable parameters (length, count, min/max values, etc.)

## Development

Install dependencies:
```bash
npm install
```

Build the server:
```bash
npm run build
```

For development with auto-rebuild:
```bash
npm run watch
```

## Testing

Run all tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Run integration tests specifically:
```bash
npm run test:integration
```

Generate test coverage report:
```bash
npm run test:coverage
```

## Installation

To use with Claude Desktop, add the server config:

On MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "faker-server": {
      "command": "/path/to/faker-server/build/index.js"
    }
  }
}
```

### Debugging

Since MCP servers communicate over stdio, debugging can be challenging. We recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector), which is available as a package script:

```bash
npm run inspector
```

The Inspector will provide a URL to access debugging tools in your browser.
