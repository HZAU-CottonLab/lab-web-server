/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-04-02 22:42:56
 * @LastEditors: zpliu
 * @LastEditTime: 2022-06-25 20:10:57
 * @@param:
 */
const publicationList = [
  {
    year: 2022,
    "content|1-40": [
      {
        "id|1-200": 1,
        title:
          " Asymmetric subgenome selection and cis-regulatory divergence during cotton domestication",
        author: `Maojun Wang,Lili Tu, Min Lin,Zhongxu Lin,Pengcheng Wang,Qingyong
           Yang,Zhengxiu Ye ,Chao Shen, Jianying Li,Lin Zhang,Xiaolin Zhou,Xinhui Nie,Zhonghua Li,Kai Guo,Yizan Ma,Cong Huang,Shuangxia Jin,Longfu Zhu,Xiyan
           Yang Ling Min,Daojun Yuan,Qinghua Zhang Keith Lindsey, Xianlong Zhang.`,
        periodical: "Nature Genetics",
        date: "2017-05-07",
        doi: "https://doi.org/10.1038/ng.3807",
      },
    ],
  },
  {
    year: 2021,
    "content|1-30": [
      {
        "id|1-200": 1,
        title: "@ctitle(15)",
        author: "@csentence(15)",
        periodical: "Nature Genetics",
        date: "2017-05-07",
        doi: "https://doi.org/10.1038/ng.3807",
      },
    ],
  },
  {
    year: 2019,
    "content|1-50": [
      {
        "id|1-200": 1,
        title: "@csentence(12)",
        author: "@csentence(12)",
        periodical: "Nature Genetics",
        date: "2017-05-07",
        doi: "https://doi.org/10.1038/ng.3807",
      },
    ],
  },
  {
    year: 2018,
    "content|1-40": [
      {
        "id|1-200": 1,
        title: "@csentence(12)",
        author: "@csentence(12)",
        periodical: "Nature Genetics",
        date: "2017-05-07",
        doi: "https://doi.org/10.1038/ng.3807",
      },
    ],
  },
  {
    year: 2017,
    "content|1-30": [
      {
        "id|1-200": 1,
        title: "@csentence(12)",
        author: "@csentence(12)",
        periodical: "Nature Genetics",
        date: "2017-05-07",
        doi: "https://doi.org/10.1038/ng.3807",
      },
    ],
  },
  {
    year: "before 2017",
    "content|1-20": [
      {
        "id|1-200": 1,
        title: "@csentence(12)",
        author: "@csentence(12)",
        periodical: "Nature Genetics",
        date: "2017-05-07",
        doi: "https://doi.org/10.1038/ng.3807",
      },
    ],
  },
];

searchResult = [
  {
    year: 2022,
    content: [
      {
        "id|1-200": 1,
        title: " 搜索出的文章结果",
        author: `Maojun Wang,Lili Tu, Min Lin,Zhongxu Lin,Pengcheng Wang,Qingyong
           Yang,Zhengxiu Ye ,Chao Shen, Jianying Li,Lin Zhang,Xiaolin Zhou,Xinhui Nie,Zhonghua Li,Kai Guo,Yizan Ma,Cong Huang,Shuangxia Jin,Longfu Zhu,Xiyan
           Yang Ling Min,Daojun Yuan,Qinghua Zhang Keith Lindsey, Xianlong Zhang.`,
        periodical: "Nature Genetics",
        date: "2017-05-07",
        doi: "https://doi.org/10.1038/ng.3807",
      },
    ],
  },
];

module.exports = [
  {
    url: "/publication/all",
    type: "get",
    response: (config) => {
      return {
        code: 0,
        status: 200,
        info: publicationList,
      };
    },
  },
  {
    url: "/publication/delet",
    type: "post",
    response: (config) => {
      const { id } = config.body;
      return {
        code: 0, //成功执行操作
        status: 200,
        info: [],
      };
    },
  },
  {
    url: "/publication/search",
    type: "post",
    response: (config) => {
      const { keyword } = config.body;
      if (keyword == "王") {
        return {
          code: 0, //成功执行操作
          status: 200,
          info: searchResult,
        };
      } else {
        return {
          code: 0, //成功执行操作
          status: 200,
          info: [],
        };
      }
    },
  },
];
