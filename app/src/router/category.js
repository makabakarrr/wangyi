export default [
    {
        path:'/category',
        component: ()=>import('../pages/category/Default'),
        
    },
    {
        path:"/category/detail",
        component:()=>import('../pages/category/Detail')
    }
]