import { faker } from "@faker-js/faker"
import type { ServerBuilder } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function music(): Parameters<ServerBuilder["register"]>[0] {
  return new ModuleBuilder()
    .method("album", "Returns a random album name.", z.object({}), () => {
      return faker.music.album()
    })
    .method("artist", "Returns a random artist name.", z.object({}), () => {
      return faker.music.artist()
    })
    .method("genre", "Returns a random music genre.", z.object({}), () => {
      return faker.music.genre()
    })
    .method("songName", "Returns a random song name.", z.object({}), () => {
      return faker.music.songName()
    })
    .build({
      name: "generate_music",
      description: "Generate music related entries",
    })
}
