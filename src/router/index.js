import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/web/Login.vue')
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('@/views/web/User.vue')
        },
        {
            path: '/singer/:id',
            name: 'singer',
            component: () => import('@/views/web/SingerDetail.vue')
        },
        {
            path: '/singer/category',
            name: 'singerCategory',
            component: () => import('@/views/web/SingerCategory.vue')
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     const token = JSON.parse(localStorage.getItem('token'))
//     if (!token && to.name !== 'home') {
//         router.push('/')
//     } else {
//         next()
//     }
// })


export default router;