// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt3-aos"],
  app: {
    // head: {
    //   link: [
    //     {
    //       href: "https://unpkg.com/aos@2.3.1/dist/aos.css",
    //       rel: "stylesheet",
    //     },
    //   ],
    // },
  },
});
