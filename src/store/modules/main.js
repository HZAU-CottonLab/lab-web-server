/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-09-19 20:24:58
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-01 17:41:39
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
      {title:'test3',url:'https://btiscience.org/wp-content/uploads/carousel_benth.jpeg'},],
    activatePeopleType:[], //滚动时显示处于当前视窗的peopleType组件
  },
  getters:{
    test(state) {
      return  state.count + 1
    } ,
    peopleTypeId(state){
      return state.activatePeopleType
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setActivatePeopleType(state,ItemObject){
      /**
       * ItemObject:{
       * itemId,
       * distance
       * }
       */
      //* 设置每个每个Item距离视窗的高度
      state.activatePeopleType[ItemObject['id']]=ItemObject['distance']
    }
  }
}