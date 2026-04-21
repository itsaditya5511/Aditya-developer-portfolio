import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Base path - "/" for root domain deployment
  base: '/',

  // Build optimizations
  build: {
    // Output directory (Netlify expects "dist")
    outDir: 'dist',

    // Generate sourcemaps for debugging (disable for smaller builds)
    sourcemap: false,

    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'animation-vendor': ['framer-motion', 'lottie-react'],
        },
      },
    },

    // Asset size warning threshold (in KB)
    chunkSizeWarningLimit: 1000,
  },
})
