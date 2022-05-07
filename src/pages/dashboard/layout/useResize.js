/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-05-05 22:09:46
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-07 15:45:58
 * @@param:
 */
import { DeviceType } from "@/store/modules/app";
import { useState, useActions } from "@/utils/storehook.js";
import {watch } from "vue";
import { useRoute } from "vue-router";

/** 参考 Bootstrap 的响应式设计 width = 992 */
const WIDTH = 992;

/** 根据大小变化重新布局 */
export default function() {
  const { device, sidebar } = useState("app", ["device", "sidebar"]);
  const { closeSidebar, toggleDevice } = useActions("app", [
    "closeSidebar",
    "toggleDevice",
  ]);
  const currentRoute = useRoute();
  const watchRouter = watch(
    () => currentRoute.name,
    () => {
      if (device === DeviceType.Mobile && sidebar.opened) {
        closeSidebar(false); //需要使用store中的actions方法
      }
    }
  );

  const isMobile = () => {
    const rect = document.body.getBoundingClientRect();
    return rect.width - 1 < WIDTH;
  };

  const resizeMounted = () => {
    if (isMobile()) {
      toggleDevice(DeviceType.Mobile);
      closeSidebar(true);
    }
  };

  const resizeHandler = () => {
    if (!document.hidden) {
      toggleDevice(isMobile() ? DeviceType.Mobile : DeviceType.Desktop);
      if (isMobile()) {
        closeSidebar(true);
      }
    }
  };

  const addEventListenerOnResize = () => {
    window.addEventListener("resize", resizeHandler);
  };

  const removeEventListenerResize = () => {
    window.removeEventListener("resize", resizeHandler);
  };

  return {
    device,
    sidebar,
    resizeMounted,
    addEventListenerOnResize,
    removeEventListenerResize,
    watchRouter,
  };
}
