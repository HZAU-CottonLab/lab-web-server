/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-01-02 13:51:42
 * @LastEditors: zpliu
 * @LastEditTime: 2022-01-03 19:40:46
 * @@param: 
 */
const Mock = require('mockjs')

const data = Mock.mock({
  'items|20': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft1', 'deleted'],
    author: 'name',
    display_time: '@image("200x100")', 
    pageviews: '@integer(300, 5000)'
  }]
})

module.exports = [
  {
    url: '/test2',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]