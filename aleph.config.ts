import type { Config } from 'https://deno.land/x/aleph/types.d.ts';

export default <Config>{
  build: {
    target: 'es2015',
    browsers: { chrome: 90, safari: 12 },
    outputDir: '/dist',
  },
};
