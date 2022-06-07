/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-06-06 20:05:49
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-07 22:55:59
 * @@param:
 */
const Random = require("mockjs").Random;
const newsList = {
  "content|10-40": [
    {
      "id|1-200": 1, //新闻所属的Id
      title: "@ctitle(20)", //新闻的标题
      description: "@ctitle(200)",
      date: "2017-05", //最后一次修改的时间
      imageURL: Random.image("400x300"), //图片
    },
  ],
};

const latestNewsList = {
  content: [
    {
      "id|1-200": 1, //新闻所属的Id
      title: "@ctitle(20)", //新闻的标题
      imageURL:
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      description: "@ctitle(200)",
      date: "2017-05", //最后一次修改的时间
    },
    {
      "id|1-200": 1, //新闻所属的Id
      title: "@ctitle(20)", //新闻的标题
      imageURL:
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      description: "@ctitle(200)",
      date: "2017-05", //最后一次修改的时间
    },
    {
      "id|1-200": 1, //新闻所属的Id
      title: "@ctitle(20)", //新闻的标题
      imageURL:
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
      description: "@ctitle(200)",
      date: "2017-05", //最后一次修改的时间
    },
  ],
};

module.exports = [
  {
    url: "/news/all",
    type: "get",
    response: (config) => {
      return {
        code: 0,
        status: 200,
        info: newsList,
      };
    },
  },
  {
    url: "/news/latest",
    type: "get",
    response: (config) => {
      return {
        code: 1,
        status: 200,
        info: latestNewsList,
      };
    },
  },
  {
    url: "/news/search",
    type: "post",
    response: (config) => {
      const { keyword } = config.body;
      if (keyword == "test") {
        return {
          code: 1,
          status: 200,
          info: latestNewsList,
        };
      } else {
        return {
          code: 1,
          status: 200,
          info: { content: [] },
        };
      }
    },
  },
];
