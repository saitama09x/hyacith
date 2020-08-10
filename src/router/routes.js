
const routes = [
  {
    path: '/',
    component: () => import('layouts/IndexLayout.vue'),
    name : 'Home',
    children: [
        {
          path: '',
          component: () => import('pages/webpage/index.vue')
        },
        {
          path: 'page-2',
          component: () => import('pages/webpage/PageTwo.vue')
        },
        {
          path: 'page-3',
          component: () => import('pages/webpage/PageThree.vue')
        },
    ]
  },
  {
    path : '/products',
    name : 'Products',
    component: () => import('layouts/ProductLayout.vue'),
    children: [
        {
          path: '',
          name : 'Products',
          component: () => import('pages/products/ProductHome.vue')
        },
        {
          path: 'details',
          name : 'ProductDetail',
          component: () => import('pages/products/ProductDetail.vue')
        }
     ]
  },
  {
    path : '/error-404',
    name : 'error',
    component: () => import('layouts/UnderDev.vue')
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
