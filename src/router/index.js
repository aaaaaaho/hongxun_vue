import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '鸿迅停车管理系统', icon: 'dashboard' }
    }]
  },

  {
    path: '/parkingInfo',
    component: Layout,
    name: 'parkingInfo',
    redirect: '/parkingInfo/list',
    meta: { title: '车场管理', icon: '停车场' },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/parkingInfo/list/index'),
        meta: { title: '车场列表' }
      },
      {
        path: 'longRent',
        name: 'longRent',
        component: () => import('@/views/parkingInfo/longRent/index'),
        meta: { title: '长租用户' },
        hidden: true
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/parkingInfo/user/index'),
        meta: { title: '用户列表' }
      },
      {
        path: 'specialCar',
        name: 'specialCar',
        component: () => import('@/views/parkingInfo/specialCar/index'),
        meta: { title: '特殊车辆' }
      }
    ]
  },

  {
    path: '/parkRecord',
    component: Layout,
    name: 'parkRecord',
    redirect: '/parkRecord/presence',
    meta: { title: '车场记录', icon: '车场记录' },
    children: [
      {
        path: 'presence',
        name: 'presence',
        component: () => import('@/views/parkRecord/presence/index'),
        meta: { title: '在场车辆' }
      },
      {
        path: 'parkDetail',
        name: 'parkDetail',
        component: () => import('@/views/parkRecord/parkDetail/index'),
        meta: { title: '停车明细' }
      },
      {
        path: 'tempStop',
        name: 'tempStop',
        component: () => import('@/views/parkRecord/tempStop/index'),
        meta: { title: '临停缴费' }
      },
      {
        path: 'abnormalRecord',
        name: 'abnormalRecord',
        component: () => import('@/views/parkRecord/abnormalRecord/index'),
        meta: { title: '异常放行' }
      },
      {
        path: 'recharge',
        name: 'recharge',
        component: () => import('@/views/parkRecord/recharge/index'),
        meta: { title: '充值记录' }
      },
      {
        path: 'shiftRecord',
        name: 'shiftRecord',
        component: () => import('@/views/parkRecord/shiftRecord/index'),
        meta: { title: '交班记录' }
      },
      {
        path: 'carInOut',
        name: 'carInOut',
        component: () => import('@/views/parkRecord/carInOut/index'),
        meta: { title: '出入记录' }
      }

    ]
  },

  {
    path: '/merchant',
    component: Layout,
    redirect: '//merchant/list',
    name: 'Nested',
    hidden: true,
    meta: {
      title: '商户管理',
      icon: '商户管理'
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/merchant/list/index'), // Parent router-view
        name: 'List',
        meta: { title: '商户列表' }
      },
      {
        path: 'users',
        component: () => import('@/views/merchant/users/index'),
        name: 'Users',
        meta: { title: '商户账户' }
      }
    ]
  },

  {
    path: '/report',
    component: Layout,
    redirect: '/report/inCome',
    name: 'Report',
    meta: {
      title: '财务报表',
      icon: '财务管理'
    },
    children: [
      {
        path: 'inCome',
        component: () => import('@/views/report/inCome/index'), // Parent router-view
        name: 'inCome',
        meta: { title: '收入报表' }
      },
      {
        path: 'tempStop',
        component: () => import('@/views/report/tempStop/index'),
        name: 'tempStop',
        meta: { title: '临停报表' }
      },
      {
        path: 'paymentMethod',
        component: () => import('@/views/report/paymentMethod/index'),
        name: 'paymentMethod',
        meta: { title: '支付方式' }
      },
      {
        path: 'details',
        component: () => import('@/views/report/details/index'),
        name: 'details',
        meta: { title: '收入明细' }
      }
    ]
  },

  {
    path: '/business',
    component: Layout,
    redirect: '/business/traffic',
    name: 'Business',
    meta: {
      title: '经营分析',
      icon: '经营分析'
    },
    children: [
      {
        path: 'traffic',
        component: () => import('@/views/business/traffic/index'), // Parent router-view
        name: 'Traffic',
        meta: { title: '车流量分析' }
      },
      {
        path: 'bertha',
        component: () => import('@/views/business/berth/index'),
        name: 'Bertha',
        meta: { title: '泊位分析' }
      },
      {
        path: 'abnormal',
        component: () => import('@/views/business/abnormal/index'),
        name: 'Abnormal',
        meta: { title: '异常放行分析' }
      },
      {
        path: 'tempPayScene',
        component: () => import('@/views/business/tempPayScene/index'),
        name: 'tempPayScene',
        meta: { title: '临停支付场景' }
      },
      {
        path: 'parkingTime',
        component: () => import('@/views/business/parkingTime/index'),
        name: 'parkingTime',
        meta: { title: '停车时长' }
      }
    ]
  },
  {
    path: '/discount',
    component: Layout,
    redirect: '/discount/discountRule',
    name: 'Discount',
    hidden: true,
    meta: {
      title: '优惠管理',
      icon: '优惠管理'
    },
    children: [
      {
        path: 'discountRule',
        component: () => import('@/views/discount/discountRule/index'), // Parent router-view
        name: 'discountRule',
        meta: { title: '优惠规则' }
      },
      {
        path: 'rechargeRecord',
        component: () => import('@/views/discount/rechargeRecord/index'),
        name: 'rechargeRecord',
        meta: { title: '充值记录' }
      },
      {
        path: 'grantRecord',
        component: () => import('@/views/discount/grantRecord/index'),
        name: 'grantRecord',
        meta: { title: '发放记录' }
      }
    ]
  },
  {
    path: '/authority',
    component: Layout,
    redirect: '/authority/role',
    name: 'Authority',
    meta: {
      title: '权限管理',
      icon: '权限管理'
    },
    children: [
      {
        path: 'role',
        component: () => import('@/views/authorityManagement/role/index'), // Parent router-view
        name: 'Role',
        meta: { title: '角色管理' }
      },
      {
        path: 'users',
        component: () => import('@/views/authorityManagement/users/index'),
        name: 'Users',
        meta: { title: '用户管理' }
      },
      {
        path: 'log',
        component: () => import('@/views/authorityManagement/log/index'),
        name: 'Log',
        meta: { title: '操作日志' }
      }
    ]
  },

  {
    path: '/test',
    component: Layout,
    redirect: '/test/com_Test',
    name: 'test',
    meta: {
      title: '测试页面',
      // icon: '权限管理'
    },
    children: [
      {
      path: 'com_Test',
      component: () => import('@/views/com_Test/index'),
      name: 'test',
      meta: { title: '测试页面' }
      },
      {
        path: 'page_Test',
        component: () => import('@/views/com_Test/page_Test'),
        name: 'test',
        meta: { title: '展示页面测试' }
      },
      {
        path: 'sensor',
        component: () => import('@/views/com_Test/sensor_test'),
        name: 'test',
        meta: { title: '传感器展示页面' }
      },

    ]
  },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
