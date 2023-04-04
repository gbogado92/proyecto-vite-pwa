import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Mi aplicacion de Vite y PWA",
        short_name: "Vite y PWA",
        theme_color: "#333333",
        background_color: "#160312",
        description: "Una aplicacion simple hecha con Vite.js y React",
        lang: "es",
      },
    }),
  ],
});
