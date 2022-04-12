/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-12 08:53:21
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-12 09:06:08
 * @@param: 
 */
import store from '../store'
/** 权限指令 */
export const permission= {
    mounted(el, binding) {
      const { value } = binding
      const roles = store.state.user.roles
      if (value && value instanceof Array && value.length > 0) {
        const permissionRoles = value
        const hasPermission = roles.some((role) => {
          return permissionRoles.includes(role)
        })
        if (!hasPermission) {
          el.style.display = 'none'
        }
      } else {
        throw new Error("need roles! Like v-permission=\"['admin','editor']\"")
      }
    }
  }