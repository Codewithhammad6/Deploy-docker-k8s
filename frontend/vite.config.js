// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
 
// })







import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor dependencies into chunks
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'ui-vendor': ['lucide-react', 'daisyui'],
          'utils-vendor': ['axios', 'zustand', 'react-hot-toast'],
          // 'socket-vendor': ['socket.io-client'] // Removed - empty chunk error
        }
      }
    },
    // Increase warning limit to 1000KB (optional)
    chunkSizeWarningLimit: 1000,
    // Enable minification (remove or use 'esbuild')
    minify: 'esbuild', // Change from 'terser' to 'esbuild'
    // Remove terserOptions since we're not using terser
    /*
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
    */
  }
})