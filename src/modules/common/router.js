/**
 * Created by Hazard on 2020/4/20.
 */

import Home from './view/Home.vue'
import test from './view/test.vue'
import demo from './view/demo.vue'

export default [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/system/test',
    name: 'test',
    component: test
  },
  {
    path: '/system/demo',
    name: 'demo',
    component: demo
  }
]
