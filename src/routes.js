import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Page11 from './views/nav1/page1.vue'
import Page12 from './views/nav1/page2.vue'
import Page13 from './views/nav1/page3.vue'
import Page14 from './views/nav1/page4.vue'
import Page21 from './views/nav2/page1.vue'
import Page22 from './views/nav2/page2.vue'
import Page23 from './views/nav2/page3.vue'
import Page24 from './views/nav2/page4.vue'

const Menus = [
  {
    nav: '系统模块',
    name: ['菜单管理', '角色管理 ', '用户权限管理', '版本管理']
  },
  {
    nav: 'IT橘子基础数据',
    name: ['职业信息管理', '行业信息管理 ', '公司信息管理', '企业家信息管理']
  },
  {
    nav: '用户信息',
    name: ['个人信息展示', '培养计划详情', '分析报告详情']
  },
  {
    nav: '43e3'
  }

]

let routes = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
  {
    path: '/',
    component: Home,
    name: Menus[0].nav,
    iconCls: 'el-icon-message',
    children: [
      { path: '/main', component: Main, name: '主页', hidden: true },
      { path: '/page11', component: Page11, name: Menus[0].name[0] },
      { path: '/page12', component: Page12, name: Menus[0].name[1] },
      { path: '/page13', component: Page13, name: Menus[0].name[2] },
      { path: '/page14', component: Page14, name: Menus[0].name[3] }
    ]
  },

  {
    path: '/',
    component: Home,
    name: Menus[1].nav,
    iconCls: 'fa fa-id-card-o',
    children: [
      { path: '/page21', component: Page21, name: Menus[1].name[0] },
      { path: '/page22', component: Page22, name: Menus[1].name[1] },
      { path: '/page23', component: Page23, name: Menus[1].name[2] },
      { path: '/page24', component: Page24, name: Menus[1].name[3] }
    ]
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }
]
export default routes
