/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-05-14 16:55:20
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-09 11:35:15
 * @@param:
 */
const teamRoute = [
  {
    path: "/dashboard/team/",
    redirect: "/dashboard/team/index/",
    component: () => import("@/pages/dashboard/layout/index.vue"),
    name: "dashboard-team",
    meta: {
      title: "Team",
      icon: "team",
      roles: ["admin", "editor"], // 可以在根路由中设置角色
      alwaysShow: true, // 将始终显示根菜单
      isLogin: true,
    },
    children: [
      //子路由依赖于父路由布局
      {
        path: "index",
        component: () => import("@/pages/dashboard/team/teacher/index.vue"),
        name: "dashboard-team-show",
        meta: {
          title: "师资队伍",
          roles: ["admin", "editor"], // 或者在子导航中设置角色
        },
      },
      {
        path: "postdoctor",
        component: () => import("@/pages/dashboard/team/postDoctor/index.vue"),
        name: "dashboard-postDoctor-show",
        meta: {
          title: "博士后队伍",
          roles: ["admin", "editor"], // 或者在子导航中设置角色
        },
      },
      {
        path: "doctor",
        component: () => import("@/pages/dashboard/team/doctor/index.vue"),
        name: "dashboard-doctor-show",
        meta: {
          title: "博士队伍",
          roles: ["admin", "editor"], // 或者在子导航中设置角色
        },
      },
      {
        path: "master",
        component: () => import("@/pages/dashboard/team/master/index.vue"),
        name: "dashboard-master-show",
        meta: {
          title: "硕士队伍",
          roles: ["admin", "editor"], // 或者在子导航中设置角色
        },
      },
      {
        path: "alumni",
        component: () => import("@/pages/dashboard/team/alumni/index.vue"),
        name: "dashboard-alumni-show",
        meta: {
          title: "校友",
          roles: ["admin", "editor"], // 或者在子导航中设置角色
        },
      },
      {
        path: "add",
        component: () => import("@/pages/dashboard/team/personInfo-editor"),
        name: "dashboard-team-add",
        meta: {
          title: "人员添加",
          roles: ["admin", "editor"], // 或者在子导航中设置角色
        },
      },
      {
        path: "editor",
        component: () => import("@/pages/dashboard/team/personInfo-editor"),
        name: "dashboard-team-editor",
        meta: {
          title: "信息编辑",
          roles: ["admin", "editor"], // 或者在子导航中设置角色
          hidden: true,
        },
      },
    ],
  },
];

export { teamRoute };
