/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-05-05 22:11:43
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-07 17:30:36
 * @@param:
 */
import {
  getSidebarStatus,
  getActiveThemeName,
  setSidebarStatus,
  setActiveThemeName,
} from "@/utils/cookies";

import themeList from "@/config/theme";

export const DeviceType = {
  Desktop: 1,
  Mobile: 0,
};

export const app = {
  namespaced: true,
  state: {
    device: DeviceType.Desktop,
    sidebar: {
      opened: getSidebarStatus() !== "closed",
      withoutAnimation: false,
    },
    themeList: themeList,
    activeThemeName: getActiveThemeName() || "normal",
  },
  actions: {
    toggleSidebar(context, withoutAnimation) {
      //在移动端进行切换
      context.state.sidebar.opened = !context.state.sidebar.opened;
      context.state.sidebar.withoutAnimation = withoutAnimation;
      if (context.state.sidebar.opened) {
        setSidebarStatus("opened");
      } else {
        setSidebarStatus("closed");
      }
    },
    closeSidebar(context, withoutAnimation) {
      context.state.sidebar.opened = false;
      context.state.sidebar.withoutAnimation = withoutAnimation;
      setSidebarStatus("closed");
    },
    //切换设备
    toggleDevice(context, device) {
      context.state.device = device;
    },
    setTheme(context, activeThemeName) {
      // 检查这个主题在主题列表里是否存在
      context.state.activeThemeName = context.state.themeList.find(
        (theme) => theme.name === activeThemeName
      )
        ? activeThemeName
        : context.state.themeList[0].name;
      // 应用到 dom
      document.body.className = `theme-${context.state.activeThemeName}`;
      // 持久化
      setActiveThemeName(context.state.activeThemeName);
    },
    initTheme(context) {
      // 初始化
      document.body.className = `theme-${context.state.activeThemeName}`;
    },
  },
};
