import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // add this
import path from "path"; // needed for alias
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(), // add React plugin
    tailwindcss(), // your existing Tailwind plugin
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // this sets '@' to point to 'src/' folder
    },
  },
});
