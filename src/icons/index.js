/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-22 20:48:04
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-22 21:24:41
 * @@param: 
 */
// import { createApp } from 'vue'
import SvgIcon from '@/components/svg-icon.vue' // svg component

const requireAll = function(requireContext) {
  return requireContext.keys().map(requireContext)
}
const req = require['context']('./svg', false, /\.svg$/)
requireAll(req)

export default function(app) {
  app.component('SvgIcon', SvgIcon)
}