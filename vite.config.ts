// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// IMPORTANT for GitHub Project Pages (served at /<repo>/)
// See Vite docs: set base to '/<REPO>/' when deploying to https://<user>.github.io/<REPO>/
export default defineConfig(({ mode }) => ({
  base: "/poonamdance/",
  server: { host: "::", port: 8080 },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
}));
