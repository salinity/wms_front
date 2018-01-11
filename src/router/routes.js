// routes & menu
import Hello from '@/components/view/Hello'
import Login from '@/components/view/Login'
import Test from '@/components/view/Test'
import Main from '@/components/layouts/Main'
import Study from '@/components/view/study'
import Motion from '@/components/view/motion'
import Entertainment from '@/components/view/entertainment'

let routes = [
  {
    path: '/welcome',
    name: '欢迎页',
    component: Hello,
    hidden: true,
    leaf: true
  },
  {
    path: '/login',
    name: '登录页',
    component: Login,
    hidden: true,
    leaf: false
  },
  {
    path: '/',
    name: '',
    component: Main,
    hidden: true,
    leaf: true,
    children: [
      { path: '/study',
        name: '学习',
        iconCls: 'el-icon-edit',
        component: Study,
        hidden: false,
        leaf: true,
        children: [
          {path: '/study/read', name: '读书', iconCls: 'el-icon-star-off', component: Test, hidden: false, leaf: true},
          {path: '/study/write', name: '写字', iconCls: 'el-icon-star-off', component: Test, hidden: false, leaf: true}
        ]},
      { path: '/motion',
        name: '运动',
        iconCls: 'el-icon-d-arrow-right',
        component: Motion,
        hidden: false,
        leaf: true,
        children: [
          {path: '/motion/run', name: '跑步', iconCls: 'el-icon-star-off', component: Test, hidden: false, leaf: true}
        ]},
      { path: '/entertainment',
        name: '娱乐',
        iconCls: 'el-icon-service',
        component: Entertainment,
        hidden: false,
        leaf: true,
        children: [
          {path: '/entertainment/music', name: '听歌', iconCls: 'el-icon-star-off', component: Test, hidden: false, leaf: true},
          {path: '/entertainment/drama', name: '赏剧', iconCls: 'el-icon-star-off', component: Test, hidden: false, leaf: true}
        ]}
    ]
  }
]
export default routes
