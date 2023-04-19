const dashboard = [
    {
        path: '/',
        component: () => import('../layouts/DashboardMaster.vue'),
        children:[
            {
                path:'',
                name: 'home',
                component : () => import('../views/users/home.vue'),
                meta: {
                    title: 'Trang Chủ'
                },
            }
        ]
    }
]

export default dashboard