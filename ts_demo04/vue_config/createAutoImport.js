const Components = require('unplugin-vue-components/webpack')
const AutoImport = require('unplugin-auto-import/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const ElementPlus = require('unplugin-element-plus/webpack')

module.exports = function createAutoImport () {
  const elementPlusResolver = ElementPlusResolver()
  const plugins = []
  plugins.push(ElementPlus())// 解决 elmessage 无样式
  plugins.push(
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          lodash: [['default', '_']]
        }
        // {
        //   vuex: ['useStore']
        // }
      ],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [elementPlusResolver]
      // dts: false
    })
  )
  plugins.push(
    Components({
      resolvers: [elementPlusResolver]
    })
  )
  return plugins
}
