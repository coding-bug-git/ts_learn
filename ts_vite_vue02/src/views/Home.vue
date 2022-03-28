<template>
  <div class="home">
    home
    <div class="chart" id="chart" style="width: 100%;height: 800px"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
import request from '@/utils/request'

// const areaRouter = {
//   area1: function (value, errorMsg) {
//
//   },
//   area2: function (value, length, errorMsg) {
//     if (value.length < length) {
//       return errorMsg
//     }
//   },
//   area3: function (value, errorMsg) {
//     if (value === '') {
//       return errorMsg
//     }
//   },
//   area4: function (value, errorMsg) {
//     if (value === '') {
//       return errorMsg
//     }
//   }
// }

request({ url: '/test11', method: 'get' }).then(res => {
  console.log(res)
})

const router = useRouter()
onMounted(() => {
  const svg = `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="595.28px" height="841.89px" viewBox="0 0 595.28 841.89" enable-background="new 0 0 595.28 841.89" xml:space="preserve">
<g id="图层_1">
\t<path name="区域4" id="area4" fill="#1B1464" stroke="#00FFFF" stroke-width="2" stroke-miterlimit="10" d="M471.001,313.215l6.167,4.167l22.333-12
\t\tl85.667,34.833l-109.167,87l-59.833-53.833L471.001,313.215z"/>
    <path name="区域12" id="area12" fill="#1B1464" stroke="#00FFFF" stroke-width="2" stroke-miterlimit="10" d="M416.168,373.382l59.833,53.833L317.334,552.88
\t\tl-35.999-30.333L416.168,373.382z"/>
    <path name="区域11" id="area11" fill="#1B1464" stroke="#00FFFF" stroke-width="2" stroke-miterlimit="10" d="M281.335,522.547l-86-77.333l69.833-73.167
\t\tl81.5,77.5L281.335,522.547z"/>
    <path name="区域10" id="area10" fill="#1B1464" stroke="#00FFFF" stroke-width="2" stroke-miterlimit="10" d="M347.667,282.975l-73.25-67.5l-5.125,6.25
\t\tl-17.375-13.714l-29.75,29.464l-45.75-44.75l46.75-46.75l131.5,115l1.918,3.489l5.583,5.583L347.667,282.975z"/>
    <path name="区域9" id="area9" fill="#1B1464" stroke="#00FFFF" stroke-width="2" stroke-miterlimit="10" d="M176.417,192.725l45.75,44.75l-33,37.25h-51.25
\t\tl-2.75-41L176.417,192.725z"/>
    <path name="区域8" id="area8" fill="#1B1464" stroke="#00FFFF" stroke-width="2" stroke-miterlimit="10" d="M146.667,383.225h-3.25l-5.5-108.5l50,0.5
\t\tl5.25-4.75l29,28.75L146.667,383.225z"/>
    <path name="区域1" id="area1" fill="#1B1464" stroke="#00FFFF" stroke-width="2" stroke-miterlimit="10" d="M193.167,270.475l58.25-63.75l17.25,15.25l6.5-6
\t\tl72.5,67l-65.75,70.75L193.167,270.475z"/>
    <path name="区域3" id="area3" fill="#1B1464" stroke="#00FFFF" stroke-width="2" stroke-miterlimit="10" d="M281.917,353.725l-86.582,92l-50.668-46
\t\tl-1.25-16.5l80-83.5L281.917,353.725z"/>
    <path name="区域7" id="area7" fill="#1B1464" stroke="#00FFFF" stroke-width="2" stroke-miterlimit="10" d="M150.5,404.725l-77.333,83.334H55.5v-17.334
\t\tl2-15.666v-42l87.167-13.333L150.5,404.725z"/>
    <path name="区域6" id="area6" fill="#1B1464" stroke="#00FFFF" stroke-width="2" stroke-miterlimit="10" d="M148.833,404.725l168.5,148.155l-92.5,73.176
\t\tL74.5,488.059L148.833,404.725z"/>
    <path  id="area5" fill="#1B1464" stroke="#00FFFF" stroke-width="2" stroke-miterlimit="10" d="M223.167,626.056l-86.333,68.33l-45.333-46
\t\tl-55-78.331l6.333-22.333l4-17l3.333-12.333l3-17.334l2.333-12.996h19L223.167,626.056z"/>
    <path name="区域2" id="area2" fill="#1B1464" stroke="#00FFFF" stroke-width="2" stroke-miterlimit="10" d="M265.331,372.672l97-102l-4.833-6.333
\t\tl27.5-24.333l85.833,73l-124,137.167L265.331,372.672z"/>
    <text transform="matrix(1 0 0 1 333.498 337.0601)" fill="#FFFFFF" font-family="'MicrosoftYaHei'" font-size="12">区域2</text>
    <text transform="matrix(1 0 0 1 248.8311 266.3936)" fill="#FFFFFF" font-family="'MicrosoftYaHei'" font-size="12">区域1</text>
    <text transform="matrix(1 0 0 1 198.1646 362.3936)" fill="#FFFFFF" font-family="'MicrosoftYaHei'" font-size="12">区域3</text>
    <text transform="matrix(1 0 0 1 470.8311 349.0601)" fill="#FFFFFF" font-family="'MicrosoftYaHei'" font-size="12">区域4</text>
</g>

</svg>`

  const chart = echarts.init(document.getElementById('chart') as HTMLDivElement)
  echarts.registerMap('Beef_cuts_France', { svg })

  const option = {
    // tooltip: {},
    series: [
      {
        name: 'French Beef Cuts',
        type: 'map',
        map: 'Beef_cuts_France',
        roam: true,
        emphasis: {
          label: {
            show: true
          }
        },
        selectedMode: false,
        data: [
          {
            name: '区域1',
            value: 'bbb',
            areaId: 'area1'
          },
          {
            name: '区域2',
            value: '222',
            areaId: 'area2'
          }
        ]
      }
    ]
  }
  chart.on('click', (params: any) => {
    console.log(params)
    router.push(`/camera/${params.data.areaId}`)
  })
  chart.setOption(option)
})

</script>
