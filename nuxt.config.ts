// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  alias: {
    assets: "/<rootDir>/assets"
  },
  css: ["@/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
