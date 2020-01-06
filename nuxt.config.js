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
    //"@nuxtjs/auth"
  ],
  /* Auth module options */
  auth: {
    // strategies: {
    //   local: {
    //     endpoints: {
    //       login: {
    //         url: "endpoint",
    //         method: "post",
    //         propertyName: "token",
    //       },
    //       logout: { url: "/api/auth/logout", method: "post" },
    //       user: { url: "/api/auth/user", method: "get", propertyName: "user" }
    //     }
    //   },
    //   redirect: {
    //     login: '/auth/sign-in'
    //   }
    // }
  },
  /* Router options */
  router: {
    middleware: 'auth'
  },
  /* Axios module configuration */
  axios: {
    baseURL: "http://localhost:5000",
    
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
