import Vue from 'vue'
import Router from 'vue-router'

// 懒加载导入组件
const Home = r => require.ensure([], () => r(require('@/page/Home/Home')), 'index')
const Login = r => require.ensure([], () => r(require('@/page/Login/Login')), 'login')
const Register = r => require.ensure([], () => r(require('@/page/Register/Register')), 'register')
const UserIndex = r => require.ensure([], () => r(require('@/page/User/UserIndex')), 'UserIndex')
const AddAddress = r => require.ensure([], () => r(require('@/page/User/Address/AddAddress')), 'AddAddress')
const DelAddress = r => require.ensure([], () => r(require('@/page/User/Address/DelAddress')), 'DelAddress')

Vue.use(Router)

//路由选址
export default new Router({
  //mode: 'history',
  linkActiveClass: 'active',
  base: __dirname,
  routes: [
    { path: '', redirect: '/index' },//重定向
    { path: '/index', name: 'Index', component: Home},
    { path: '/login', name: 'Login', component: Login},
    { path: '/register', name: 'Register', component: Register},
    {
        path: '/user/index',
        name: 'UserIndex',
        component: UserIndex,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/user/addAddress',
        name: 'AddAddress',
        component: AddAddress,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/user/delAddress',
        name: 'DelAddress',
        component: DelAddress,
        meta: {
            requiresAuth: true,
        },
    },
  ]
})