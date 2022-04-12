/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-04-11 21:34:59
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-11 21:46:50
 * @@param:
 */
import Cookies from "js-cookie";

// 设置cookies
const Keys = {
  sidebarStatus: "v3-admin-sidebar-status-key",
  language: "v3-admin-language-key",
  token: "v3-admin-token-key",
  activeThemeName: "v3-admin-active-theme-name",
};

export const getSidebarStatus = () => Cookies.get(Keys.sidebarStatus);
export const setSidebarStatus = (sidebarStatus) =>
  Cookies.set(Keys.sidebarStatus, sidebarStatus);

export const getToken = () => Cookies.get(Keys.token);
export const setToken = (token) => Cookies.set(Keys.token, token);
export const removeToken = () => Cookies.remove(Keys.token);

export const getActiveThemeName = () => Cookies.get(Keys.activeThemeName);
export const setActiveThemeName = (themeName) => {
  Cookies.set(Keys.activeThemeName, themeName);
};
