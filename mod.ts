import { serve } from "./src/server/index.ts";
const { args } = Deno;

if (import.meta.main) {
  serve();
}
