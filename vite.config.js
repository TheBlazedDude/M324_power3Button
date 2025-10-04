import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// reconstruct __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "Power3Button",
      fileName: (format) => `power3button.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
