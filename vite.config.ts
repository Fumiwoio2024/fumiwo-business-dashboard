// @ts-expect-error: path module is not typed
import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// @ts-expect-error: path module is not typed
const root = (route: string) => (path.resolve(__dirname, 'src') + route);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": root(''),
      '@assets': root('/assets'),
      '@type': root('/types'),
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


// "@/*": [
//   "src/*"
// ],
//   "@assets/*": [
//     "src/assets/*"
//   ],
//     "images/*": [
//       "src/assets/images/*"
//     ],
//       "@router/*": [
//         "src/router/*"
//       ],
//         "@components/*": [
//           "src/components/*"
//         ],
//           "@layouts/*": [
//             "src/components/layouts/*"
//           ],
//             "@auth-screens/*": [
//               "src/screens/auth/*"
//             ],
//               "@app-screens/*": [
//                 "src/screens/app/*"
//               ],