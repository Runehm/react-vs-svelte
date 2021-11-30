import adapter from '@sveltejs/adapter-auto';
import autoPreprocess from 'svelte-preprocess';
// import {sveltePreprocess} from "svelte-preprocess/dist/autoProcess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: autoPreprocess(),
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

	}
};

export default config;
