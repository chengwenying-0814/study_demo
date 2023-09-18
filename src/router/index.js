import VueRouter from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

// export default new VueRouter({
//     routes:[
//         {
//             path:'/about',
//             component:About
//         },
//         {
//             path:'/home',
//             component:Home
//         }
//     ]
// })

const router = new VueRouter({
  mode:"history",
  routes: [
    {
      path: "/about",
      name: "guanyu",
      component: About,
      meta: { title: "关于" },
    },
    {
      path: "/home",
      name: "zhuye",
      component: Home,
      children: [
        {
          path: "news",
          name: "xinwen",
          component: News,
          meta: { isAuth: true, title: "新闻" },
          beforeEnter: (to, from, next) => {
                if(to.meta.isAuth){ //判断是否需要鉴权
                    if(localStorage.getItem('school') === 'atguigu'){
                    next()
                    }else{
                    alert('学校名不对，无权限查看!')
                    }
                }else{
                    next()
                }
          },
        },
        {
          path: "message",
          name: "xiaoxi",
          meta: { isAuth: true, title: "消息" },
          component: Message,
          children: [
            {
              name: "xiangqing",
              path: "detail/:id/:title",
              component: Detail,
              // props:true
              // props:{a:1,b:100}

              props($route) {
                return { id: $route.query.id, title: $route.query.title };
              },
            },
          ],
        },
      ],
    },
  ],
});
//全局前置路由守卫 ————初始化、每次切换路由前的时候调用
// router.beforeEach((to,from,next)=>{
//     // if(to.path === '/home/news' || to.path === '/home/message'){
//     //    if(localStorage.getItem('school') === 'atguigu'){
//     //     next()
//     //    }else{
//     //     alert('学校名不对，无权限查看!')
//     //    }
//     // }else{
//     //     next()
//     // }
//     if(to.meta.isAuth){ //判断是否需要鉴权
//         if(localStorage.getItem('school') === 'atguigu'){
//          next()
//         }else{
//          alert('学校名不对，无权限查看!')
//         }
//      }else{
//          next()
//      }
// })
// 全局后置路由守卫 ————初始化、每次切换路由后的时候调用
router.afterEach((to, from) => {
    // to and from are both route objects.
    console.log('后置路由守卫',to,from)
    document.title = to.meta.title || '尚硅谷'
})

//暴露router
export default router;
