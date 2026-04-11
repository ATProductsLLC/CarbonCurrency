import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
// import compress from "astro-compress";

export default defineConfig({
  integrations: [
    react()/*, 
    compress({
      css: false,
      html: true,
      img: true,
      js: true,
      image: true,
      svg: true,
    })
    */
  ],
  fonts: [{
    provider: fontProviders.local(),
    name: "CustomIcons",
    cssVariable: "--font-customicons", 
    options: {
      variants: [
        {
          weight: 400,
          style: "normal",
          src: ["./src/assets/fonts/customicons.woff"],
          display: "block"
        },
        {
          weight: 400,
          style: "normal",
          src: ["./src/assets/fonts/customicons.woff2"],
          display: "block"
        }
      ]
    }
  }]
});
