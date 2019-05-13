import Vue from 'vue'
import VueMq from 'vue-mq'

export default async function () {
  const moduleOptions = {"defaultBreakpoint":"default","breakpoints":{"sm":450,"md":1250,"lg":null}}
  Vue.use(VueMq, moduleOptions)
}
