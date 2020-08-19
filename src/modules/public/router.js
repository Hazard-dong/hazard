/**
 * Created by Hazard on 2020/4/20.
 */

const Login = () => import(/* webpackChunkName: "m1" */ './view/Login.vue')

export default [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
