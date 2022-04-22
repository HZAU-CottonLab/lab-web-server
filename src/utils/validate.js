/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-04-15 00:51:49
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-15 00:53:04
 * @@param:
 */
// 检测当前链接是否是外部连接
export const isExternal = (path) => /^(https?:|mailto:|tel:)/.test(path);

//判断是否是数组
export const isArray = (arg) => {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
  return Array.isArray(arg);
};

//判断URL链接是否有效
export const isValidURL = (url) => {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
};
