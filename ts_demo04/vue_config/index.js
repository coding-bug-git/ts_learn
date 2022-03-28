const createAutoImport = require('./createAutoImport')

module.exports = {
  createPlugins (env) {
    const plugins = []
    plugins.push(...createAutoImport())
    return plugins
  },
  createProxy (env) {
    let proxy = {}
    const ismock = env.VUE_APP_ISMOCK === 'true'
    if (!ismock) {
      proxy = {
        [env.VUE_APP_BASE_API]: {
          target: env.VUE_APP_APIURL,
          changeOrigin: true,
          rewrite: (path) => path.replace(env.VUE_APP_BASE_API, '')
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

}
