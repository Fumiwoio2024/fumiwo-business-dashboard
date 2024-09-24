import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = (route: string) => path.resolve(__dirname, `./src${route}`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": root(''),
      '@assets': root('/assets'),
      '@utils': root('/utils'),
      '@config': root('/config'),
      '@type': root('/types'),
      '@store': root('/store'),
      '@images': root('/assets/images'),
      '@hooks': root('/hooks'),
      '@components': root('/components'),
      // '@layouts': `${path.resolve(__dirname, "./src/components/layouts")}`,
      '@layouts': root('/components/layouts'),
      '@auth-screens': root('/screens/auth'),
      '@app-screens': root('/screens/app'),
      '@router': root('/router'),
    },
  },
})