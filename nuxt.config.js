export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  server: {
    port: 5000, // default: 3000
    host: "localhost" // default: localhost
  },
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "nuxt-i18n"
    //"@nuxtjs/auth"
  ],
  i18n: {
    locales: [
      {
        code: "en",
        file: "en-US.js"
      },
      {
        code: "fr",
        file: "fr-FR.js"
      }
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en"
    }
  },
  /* Auth module options */
  auth: {
  },
  /* Router options */
  router: {
    middleware: ["auth", "i18n"]
  },
  /* Axios module configuration */
  axios: {
    baseURL: "http://localhost:5000"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
