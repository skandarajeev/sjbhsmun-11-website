import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";
import { fileURLToPath } from 'node:url';

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["@qwik-city-plan"],
      },
      //outDir : fileURLToPath('file:///C:/Users/csc/Documents/sjbhs-mun-11/'), 
      
    },
    plugins: [
      staticAdapter({
        origin: "https://yoursite.qwik.dev",
        
      }),
    ],
  };
});
