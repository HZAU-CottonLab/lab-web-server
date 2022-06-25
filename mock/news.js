/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-06-06 20:05:49
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-24 14:18:21
 * @@param:
 */
const Random = require("mockjs").Random;
const newsList = {
  "content|10-40": [
    {
      "id|1-200": 1, //新闻所属的Id
      title: "@ctitle(20)", //新闻的标题
      description: "@ctitle(200)",
      date: "2017-05-07", //最后一次修改的时间
      imageURL: Random.image("400x300"), //图片
      vhtml: "",
      lastest: false, //是否属于置顶新闻
    },
  ],
};

const latestNewsList = {
  content: [
    {
      "id|1-200": 1, //新闻所属的Id
      title: "@ctitle(30)", //新闻的标题
      imageURL:
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      description: "@ctitle(200)",
      date: "2017-05-07", //最后一次修改的时间
      vhtml: "",
      lastest: true, //是否属于置顶新闻
    },
    {
      "id|1-200": 1, //新闻所属的Id
      title: "@ctitle(20)", //新闻的标题
      imageURL:
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      description: "@ctitle(200)",
      date: "2017-05-07", //最后一次修改的时间
      vhtml: "",
      lastest: true, //是否属于置顶新闻
    },
    {
      "id|1-200": 1, //新闻所属的Id
      title: "@ctitle(20)", //新闻的标题
      imageURL:
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
      description: "@ctitle(200)",
      date: "2017-05-07", //最后一次修改的时间
      vhtml: "",
      lastest: true, //是否属于置顶新闻
    },
  ],
};

module.exports = [
  {
    url: "/news/all/",
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
  {
    url: "/news/add/",
    type: "post",
    response: (config) => {
      return {
        errno: 0,
      };
    },
  },
];
