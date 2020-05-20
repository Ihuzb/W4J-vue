import Vue from 'vue'
import VueRouter from 'vue-router'
import SocketIO from 'socket.io-client';

Vue.use(VueRouter)

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    // },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/',
        name: 'musicList',
        meta: { name: '评论列表' },
        component: () => import(/* webpackChunkName: "musicList" */ '../views/musicList/index.vue')
    },
    {
        path: '/serviceManagement',
        name: 'serviceManagement',
        meta: { name: '服务管理' },
        component: () => import(/* webpackChunkName: "serviceManagement" */ '../views/serviceManagement/index.vue')
    },
    {
        path: '/ziyun',
        name: 'ziyun',
        meta: { name: '评论词云' },
        component: () => import(/* webpackChunkName: "ziyun" */ '../views/ziyun/index.vue')
    }
]

const router = new VueRouter({
    routes
});
//路由守卫
router.beforeEach((to, from, next) => {
    if (from.name != to.name) {
        window.document.title=to.meta.name;
        if (from.name == 'serviceManagement') { //离开服务管理页面 关闭连接
            Vue.prototype.$socket.disconnect()
        } else if (to.name == 'serviceManagement') {//去往服务管理页面  创建连接
            Vue.prototype.$socket = SocketIO("ws://39.107.89.238:3001");
            //Vue.prototype.$socket = SocketIO("ws://127.0.0.1:3001");
        }
        next()
    }
})


export default router
