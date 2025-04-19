import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function music(server: McpServer) {
  server.tool("music-album", "Returns a random album name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.music.album() }],
    }
  })

  server.tool("music-artist", "Returns a random artist name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.music.artist() }],
    }
  })

  server.tool("music-genre", "Returns a random music genre.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.music.genre() }],
    }
  })

  server.tool("music-songName", "Returns a random song name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.music.songName() }],
    }
  })

  return server
}
