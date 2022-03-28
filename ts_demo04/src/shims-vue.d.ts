/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    export interface ProcessEnv {
      readonly VUE_APP_TITLE: string
      readonly VUE_APP_ISMOCK: string
      readonly VUE_APP_APIURL: string
      readonly VUE_APP_BASE_API: string
      readonly VUE_APP_PORT: string
      readonly VUE_APP_CORPID: string
    }
  }
}


declare type nullDefined = null | undefined

interface AjaxResult {
  code: number
  msg: string
  data: {} | nullDefined
}

