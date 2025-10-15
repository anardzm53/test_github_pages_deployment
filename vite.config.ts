import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/test_github_pages_deployment/",
  plugins: [react()]
})