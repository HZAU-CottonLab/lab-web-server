/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-12 17:44:58
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-22 16:35:20
 * @@param: 
 */
/** 免登录白名单 
 * 具体参考 @/routers/whiteRouter.js
*/
const whiteList = [
    '/',
    '/demo',
    '/404',
    '/people',
    '/publication',
    '/test',
    '/login',
]

export { whiteList }