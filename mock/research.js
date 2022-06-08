/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-06-07 10:00:39
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-08 22:46:58
 * @@param:
 */
const Random = require("mockjs").Random;
const ResearchList = {
  content: [
    {
      "id|1-200": 1, //新闻所属的Id
      title: "@ctitle(20)", //新闻的标题
      description: "@ctitle(200)",
      date: "2017-05", //最后一次修改的时间
      imageURL:
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg", //图片
    },
    {
      "id|1-200": 1, //新闻所属的Id
      title: "@ctitle(20)", //新闻的标题
      description: "@ctitle(200)",
      date: "2017-05", //最后一次修改的时间
      imageURL:
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg", //图片
    },
    {
      "id|1-200": 1, //新闻所属的Id
      title: "@ctitle(20)", //新闻的标题
      description: "@ctitle(200)",
      date: "2017-05", //最后一次修改的时间
      imageURL:
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg", //图片
    },
    {
      "id|1-200": 1, //新闻所属的Id
      title: "@ctitle(20)", //新闻的标题
      description: "@ctitle(200)",
      date: "2017-05", //最后一次修改的时间
      imageURL:
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg", //图片
    },
  ],
};
const carousels_list = [
  {
    title: "@ctitle(40)",
    imageURL:
      "https://btiscience.org/wp-content/uploads/BTI_DStern052021_3-scaled.jpg",
    "id|1-200": 1,
  },
  {
    title: "@ctitle(30)",
    imageURL: "https://btiscience.org/wp-content/uploads/222222222222.jpg",
    "id|1-200": 1,
  },
  {
    title: "@ctitle(25)",
    imageURL: "https://btiscience.org/wp-content/uploads/carousel_benth.jpeg",
    "id|1-200": 1,
  },
];
module.exports = [
  {
    url: "/research/",
    type: "get",
    response: (config) => {
      return {
        code: 0,
        status: 200,
        info: ResearchList,
      };
    },
  },
  {
    url: "/carousel/",
    type: "get",
    response: (config) => {
      return {
        code: 0,
        status: 200,
        info: carousels_list,
      };
    },
  },
];
