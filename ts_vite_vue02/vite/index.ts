import vue from '@vitejs/plugin-vue'
import createAutoImport from './createAutoImport'
import { ImportMetaEnv } from '../src/env'

export function createPlugins (viteEnv: Record<string, string>, isBuild = false) {
  const plugins = [vue()]
  plugins.push(...createAutoImport())
  return plugins
}

export function createProxy (viteEnv: ImportMetaEnv | Record<string, string>, isBuild = false) {
  let proxy = {}
  const ismock = viteEnv.VITE_APP_ISMOCK === 'true'
  if (!ismock) {
    proxy = {
      [viteEnv.VITE_APP_BASE_API]: {
        target: viteEnv.VITE_APP_APIURL,
        changeOrigin: true,
        rewrite: (path) => path.replace(viteEnv.VITE_APP_BASE_API, '')
      }
      // '/dev-api': {
      //   target: 'http://localhost:8080/dev-api',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/dev-api/, '')
      // }
    }
  }
  return proxy
}
