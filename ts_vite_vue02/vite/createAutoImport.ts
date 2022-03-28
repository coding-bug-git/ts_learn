import ElementPlus from 'unplugin-element-plus/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function createAutoImport () {
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
