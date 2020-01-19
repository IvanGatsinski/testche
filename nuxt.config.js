export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  server: {
    port: 5000, // default: 3000
    host: "localhost" // default: localhost
  },
  serverMiddleware: [
    '~serverMiddleware/test'
  ],
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
    strategy: 'no_prefix',
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
    detectBrowserLanguage: {
      // If enabled, a cookie is set once a user has been redirected to his
      // preferred language to prevent subsequent redirections
      // Set to false to redirect every time
      useCookie: true,
      // Cookie name
      cookieKey: 'i18n_redirected',
      // Set to always redirect to value stored in the cookie, not just once
      //alwaysRedirect: false,
      // If no locale for the browsers locale is a match, use this one as a fallback
      //fallbackLocale: null
    },
    // vueI18n: {
    //   fallbackLocale: "en"
    // }
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
