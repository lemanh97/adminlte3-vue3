const auth = [
    {
        path: '/auth',
        component: () => import('../components/AuthLayouts.vue'),
        children: [
            {
                path: 'login',
                component: () => import('../views/users/auth/login.vue'),
                meta: {
                    title: 'Đăng nhập tài khoản'
                }
            },
             {
                path : 'register',
                component: () => import('../views/users/auth/register.vue'),
                meta : {
                    title: 'Đăng kí tài khoản'
                }
             }

        ]
    }
]
export default auth;