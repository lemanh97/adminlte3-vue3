const users = [
    {
        path: '/user',
        component: () => import('../layouts/DashboardMaster.vue'),
        children:[
            {
                path : 'profile',
                name:'profile',
                component : ()=> import('../views/users/profile.vue'),
                meta: {
                    title: 'Trang Cá nhân'
                },
            }
        ]
    }
]

export default users