import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/krzysztof-cv/", // 👈 dopasuj do nazwy repo na gh
  plugins: [react()],
});
