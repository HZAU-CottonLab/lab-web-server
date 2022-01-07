/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-01-02 15:01:51
 * @LastEditors: zpliu
 * @LastEditTime: 2022-01-02 15:08:20
 * @@param: 
 */
import request from '@/utils/axios' 
// 请求新闻列表
export function getNewsList(param){
    return  request(
        {
            url:"/test2",
            method:'get',
            param
        }
    )
}