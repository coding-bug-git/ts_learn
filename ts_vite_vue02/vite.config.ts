import { defineConfig, loadEnv } from 'vite'
import * as path from 'path'
import { createPlugins, createProxy } from './vite'

// https://vitejs.dev/config/
export default ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    plugins: createPlugins(env, command),

    server: {
      host: '127.0.0.1',
      port: 9999,
      // open: true,
      proxy: createProxy(env, command)
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    }
  })
}
