import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
    compilerOptions: {
        // TODO: [customElement]: Enable before going to production
        //customElement: true
    }
}

