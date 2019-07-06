import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import testPage from '@/components/testPage'
import useEdit from '@/components/useEdit'
import theEdit from '@/components/theEdit'
import test from '@/components/selectTest'
import playMsg from '@/components/playMsg'
import playMsgTwe from '@/components/playMsgTwe'
import testPlay from '@/components/testPlay'
import testJade from '@/components/testJade'
import radio from '@/components/radio'
import ue from '@/components/ue'
import pull from '@/components/pull_page'
import remove from '@/components/leftRemove'
import mianPage from '@/components/mainMove'
import mainEnter from '@/components/useMove'
import Login from '@/components/login'
import LoginDemo1 from '@/components/login-demo1'
import LoginDemo2 from '@/components/login-demo2'
import LoginDemo3 from '@/components/login-demo3'
import LoginDemo4 from '@/components/login-demo4'
import LoginDemo5 from '@/components/login-demo5'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            component: Login,
        },
        {
            path: '/login-demo1',
            name: 'LoginDemo1',
            component: LoginDemo1,
        },
        {
            path: '/login-demo2',
            name: 'LoginDemo2',
            component: LoginDemo2,
        },
        {
            path: '/login-demo3',
            name: 'LoginDemo3',
            component: LoginDemo3,
        },
        {
            path: '/login-demo4',
            name: 'LoginDemo4',
            component: LoginDemo4,
        },
        {
            path: '/login-demo5',
            name: 'LoginDemo5',
            component: LoginDemo5,
        }
    ]
})