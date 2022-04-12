/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-11 22:29:49
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-12 18:56:21
 * @@param: 
 */
const test= ()=> import("@/components/test")
const asyncRouter= [
    {
      path: '/permission',
      component: test,
      redirect: '/permission/page',
      name: 'Permission',
      meta: {
        title: '权限管理',
        icon: 'lock',
        roles: ['admin', 'editor'], // 可以在根路由中设置角色
        alwaysShow: true // 将始终显示根菜单
      },
    },
    {
      path: '/permission2',
      component: test,
      redirect: '/permission/page',
      name: 'Permission',
      meta: {
        title: '权限管理',
        icon: 'lock',
        roles: ['editor'], // 可以在根路由中设置角色
        alwaysShow: true // 将始终显示根菜单
      },
    },
    {
      path: '/permission3',
      component: test,
      redirect: '/permission/page',
      name: 'Permission',
      meta: {
        title: '权限管理',
        icon: 'lock',
        roles: ['admin'], // 可以在根路由中设置角色
        alwaysShow: true // 将始终显示根菜单
      },
    }
]
export {asyncRouter}