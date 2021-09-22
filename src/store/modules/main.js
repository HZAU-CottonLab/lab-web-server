/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-09-19 20:24:58
 * @LastEditors: zpliu
 * @LastEditTime: 2021-09-21 21:59:26
 * @@param: 
 */

// import Vuex from 'vuex'

export default {
  namespaced: true,
  state: {
    count: 0,
    size:10,
    carousels_list:[
      {title:'test1',url:'https://btiscience.org/wp-content/uploads/BTI_DStern052021_3-scaled.jpg'},
      {title:'test2',url:'https://btiscience.org/wp-content/uploads/222222222222.jpg'},
      {title:'test3',url:'https://btiscience.org/wp-content/uploads/carousel_benth.jpeg'},
    ]
  },
  getters:{
    test(state) {
      return  state.count + 1
    } 
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
}