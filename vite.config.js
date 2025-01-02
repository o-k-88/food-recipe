import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: /\.(mdx|js|jsx|ts|tsx)$/,
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              // displayName: true,
              // fileName: false,
              meaninglessFileNames: ["index", "styles"],
            },
          ],
        ],
      },
    }),
  ],
});