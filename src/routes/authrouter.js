const auth = [
    {
        path: '/auth',
        children: [
            {
                path: 'login',
                name:'login',
                component: () => import('../views/users/auth/login.vue'),
                meta: {
                    title: 'Đăng nhập tài khoản'
                }
            },
             {
                path : 'register',
                name:'register',
                component: () => import('../views/users/auth/register.vue'),
                meta : {
                    title: 'Đăng kí tài khoản'
                }
             }

        ]
    }
]
export default auth;