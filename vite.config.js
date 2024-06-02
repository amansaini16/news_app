// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api/everything': {
        target: 'https://newsapi.org/v2/everything',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/api/headlines': {
        target: 'https://newsapi.org/v2/top-headlines',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
