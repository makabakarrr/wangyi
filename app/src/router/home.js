export default [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component: ()=>import('../pages/home/Home'),
        children:[
            {
                path:'search',
                component:()=>import('../pages/home/Search')
            },
            {
                path:'searchResult',
                component:()=>import('../pages/home/SearchResult')
            },
            {
                path:'details',
                component:()=>import('../pages/common/Details')
            },
             //catelist新品首发与其他分类使用两个不同的组件 页面布局和数据处理都不一样
            {
                path:'catelistNew',
                component:()=>import('../pages/home/CateList/newCatelist')
            },
            {
                path:"catelist",
                component:()=>import('../pages/home/CateList')
            }
        ]
    },
    {
        path:'/',
        redirect:'/home'
    }
]