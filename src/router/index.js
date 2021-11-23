import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Layout from "../layout/Layout.vue"
import ToDoList from "../layout/ToDoList.vue"

const routes = [

    {
        path: '/',
        redirect: '/main'
    },
    // {
    //     path: '/login',
    //     name: '登录',
    //     meta: { title: "登录", requireAuth: false },
    //     component: () =>
    //         import ('@/views/Login.vue')
    // },
    {
        path: '/main',
        component: Layout,
        icon: "el-icon-s-home",
        meta: { title: "工作台", requireAuth: true },
        // redirect: '/home',
        // children: [{
        //     path: "/home",
        //     name: "工作台",
        //     icon: "el-icon-s-home",
        //     meta: { title: "工作台", requireAuth: true },
        //     component: () =>
        //         import ('@/views/Home.vue')
        // }]
    },
    {
        path: '/todolist',
        name: 'todolist',
        meta: { title: "待办", requireAuth: false },
        component: () =>
            import ('../layout/ToDoList.vue')
    },
    {
        path: '/404',
        name: '404',
        meta: { title: "404", requireAuth: false },
        component: () =>
            import ('../views/404.vue')
    },
    {
        path: '/500',
        name: '500',
        meta: { title: "500", requireAuth: false },
        component: () =>
            import ('../views/500.vue')
    },
]

// createRouter 创建路由实例
const router = createRouter({
    /**
     * hash模式：createWebHashHistory，
     * history模式：createWebHistory
     */
    history: createWebHashHistory(),
    routes
})

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 600, showSpinner: false })

// 设置title
router.beforeEach((to, from, next) => {
    // 启动进度条
    NProgress.start()

    // 设置头部
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = "默存"
    }
    next()
})

router.afterEach(() => {
    // 关闭进度条
    NProgress.done()
})

// 抛出路由实例, 在 main.js 中引用
export default router