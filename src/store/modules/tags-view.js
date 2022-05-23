/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-05-08 19:03:22
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-23 09:19:56
 * @@param:
 */
export const tagsView = {
  namespaced: true,
  state: {
    visitedViews: [], //访问过的route
    keepAliveArray: ["dashboard-article-show", "dashboard-news-add"],
  },
  mutations: {
    cleared_keepAlive(state) {
      //清空 缓存路由
      state.keepAliveArray = [];
    },
    del_keepAlive(state, componentName) {
      state.keepAliveArray.forEach(
        (item, index, arr) => {
          if (item == componentName) {
            arr.splice(index, 1);
          }
        }
      );
    },
    set_keepAlive(state, componentNameArray) {
      //设置缓存路由
      state.keepAliveArray = componentNameArray;
    },
  },
  actions: {
    addVisitedView(context, view) {
      //当前路由已经存入历史
      if (context.state.visitedViews.some((v) => v.path === view.path)) return;
      context.state.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta?.title || "no-name",
        })
      );
    },
    delVisitedView(context, view) {
      for (const [i, v] of context.state.visitedViews.entries()) {
        if (v.path === view.path) {
          //删除当前view
          context.state.visitedViews.splice(i, 1);
          break;
        }
      }
    },
    delOtherVisitedViews(context, view) {
      context.state.visitedViews = context.state.visitedViews.filter((v) => {
        return v.meta?.affix || v.path === view.path;
      });
    },
    delAllVisitedViews(context) {
      // keep affix tags
      const affixTags = context.state.visitedViews.filter(
        (tag) => tag.meta?.affix
      );
      context.state.visitedViews = affixTags;
    },
    updateVisitedView(context, view) {
      for (let v of context.state.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view);
          break;
        }
      }
    },
  },
};
