import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// A relative base works for both username.github.io and project Pages sites.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
