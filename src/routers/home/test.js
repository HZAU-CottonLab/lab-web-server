/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-05-13 09:43:19
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-13 09:47:00
 * @@param:
 */
const testRoute = [
  {
    path: "/demo",
    name: "demo",
    component: import("@/components/demo.vue"),
    meta: {
      title: "demo",
    },
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/components/test"),
  },
  {
    path: "/editor",
    name: "editor",
    component: () => import("@/components/wangEditor"),
  },
];

export { testRoute };
