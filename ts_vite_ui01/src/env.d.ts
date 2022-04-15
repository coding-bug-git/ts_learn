/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare type Styles = Readonly<{
  menuColor: string
  menuLightColor: string
  menuColorActive: string
  menuBackground: string
  menuLightBackground: string
  subMenuBackground: string
  subMenuHover: string
  sideBarWidth: string
  logoTitleColor: string
  logoLightTitleColor: string
  primaryColor: string
  successColor: string
  dangerColor: string
  infoColor: string
  warningColor: string
}>
