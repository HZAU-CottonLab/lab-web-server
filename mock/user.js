/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-03-29 16:22:49
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-02 10:27:20
 * @@param:
 */

/**
 * 设置用户的简短信息
 */
const Random=require('mockjs').Random
const people_brif_info = [
  {
    id: 0,
    title: "Principle Investigator",
    peopleInfos: [
      {
        email: "xlzhang@mail.hzau.edu.cn",
        position: "profesor",
        name: "Prof. Xianlong Zhang",
        imageURL:
          "http://cotton.hzau.edu.cn/EN/uploads/image/20130909/1378745069.jpg",
        description: `张献龙，华中农业大学教授、博士生导师。国家教学名师，全国优秀教师，
        国家新世纪百千万人才人选,享受国务院政府特贴。兼任作物遗传改良国家重点实验室副主任、中国棉花学会副理事长、
        湖北省棉麻学会理事长、湖北省遗传学会副理事长、作物学报副主编、棉花学报副主编、华中农业大学学报主编等。
        主要研究方向为棉花细胞离体发育及调控机制、棉花杂种优势利用、棉花纤维发育机制及关键基因功能分析、
        棉花抗黄萎病机制及防控。
        曾在加拿大、美国和英国分别从事访问研究。主持 “973”、“863”、“948”、国家自然科学基金、
        国家转基因植物研究专项、农业领域国家公益性行业专项等课题。带领的棉花科研团队是湖北省科技创新团队。
        培育出“华杂棉1号”、“华杂棉2号”、“华惠103”、“华杂棉H318”和“华杂棉4号”等棉花新品种。
        发表SCI论文50多篇，主编参编教材或专著8部。获湖北省科技进步一等奖1项，发明二等奖1项，
        国家教学一等奖1项，湖北省教学成果特等奖1项。指导的博士学位论文获2008全国优秀百篇博士学位论文。
        另有两篇博士论文获全国优秀百篇博士论文提名，4篇博士论文当选湖北省优秀博士论文。`,
      },
    ],
  }, //lead Infor
  {
    id: 1,
    title: "Research Scientist",
    peopleInfos: [
      {
        email: "xlzhang@mail.hzau.edu.cn",
        position: "profesor",
        name: "Longfu zhu",
        imageURL:
          "https://cpst.hzau.edu.cn/__local/9/B3/3F/B87268DF3891C57A4BE3F24DCE5_CB874EA3_1279C.jpg",
        description: ``,
      },
      {
        email: "xlzhang@mail.hzau.edu.cn",
        position: "profesor",
        name: "Xiaoping Guo",
        imageURL:
          "https://cpst.hzau.edu.cn/__local/C/78/F7/9B70666725E506FB1378A2C8D67_0BB9C212_3C6B6.png?e=.png",
        description: ``,
      },
      {
        email: "linzhongxu@mail.hzau.edu.cn",
        position: "profesor",
        name: "Zhongxu Lin",
        imageURL:
          "https://cpst.hzau.edu.cn/__local/3/9B/C2/019E945FB2696495BD025D4F377_2FECE83B_2C045.jpg?e=.jpg",
        description: ``,
      },
      {
        email: "jsx@mail.hzau.edu.cn",
        position: "profesor",
        name: "Shuangxia Jin",
        imageURL:
          "http://cotton.hzau.edu.cn/uploads/image/20170606/1496727069.jpg",
        description: ``,
      },
      {
        email: "xlzhang@mail.hzau.edu.cn",
        position: "profesor",
        name: "Lili Tu",
        imageURL:
          "https://cpst.hzau.edu.cn/__local/0/24/8A/9C7A78F77BB6DE8E0D2BCC9A3A3_EEB908CA_3B1D0.png?e=.png",
        description: ``,
      },
      {
        email: "xlzhang@mail.hzau.edu.cn",
        position: "profesor",
        name: "Xiyan Yang",
        imageURL:
          "https://cpst.hzau.edu.cn/__local/8/BC/95/34D791E397669DAA21AA37ACB6F_C6D53602_13BE6.jpg",
        description: ``,
      },
      {
        email: "mjwang@mail.hzau.edu.cn",
        position: "profesor",
        name: "Maojun Wang",
        imageURL:
          "https://cpst.hzau.edu.cn/__local/5/E1/A7/0D52DBC2DBF8F490A190C67ED00_49AD8F79_62BA.jpg",
        description: ``,
      },
      {
        email: "ydj at mail.hzau.edu.cn",
        position: "associate  profesor",
        name: "Daojun Yuan",
        imageURL:
          "https://cpst.hzau.edu.cn/__local/3/A9/C5/967069CEABFA36283C2DAB0D2FA_1406F651_5DB4.jpg",
        description: ``,
      },
      {
        email: "Lingmin@mail.hzau.edu.cn",
        position: "associate  profesor",
        name: "lin Min",
        imageURL:
          "https://cpst.hzau.edu.cn/__local/C/A5/3B/3E357D51E773897D3CAC9D7F817_74B71DFF_3BA06.png?e=.png",
        description: ``,
      }
    ],
  },
  { id: 2, title: "Postdoctoral Fellow", peopleInfos: [
    {
      email: "Test",
      position: "Postdoctoral Fellow",
      name: "Test",
      imageURL:Random.image('400x400'),
      description: ``,
    },
    {
      email: "Test",
      position: "Postdoctoral Fellow",
      name: "Test",
      imageURL:Random.image('400x400'),
      description: ``,
    },
    {
      email: "Test",
      position: "Postdoctoral Fellow",
      name: "Test",
      imageURL:Random.image('400x400'),
      description: ``,
    }

  ] },
  { id: 3, title: "PhD Student", 'peopleInfos|1-5': [
    {
      email: "Test",
      position: "PhD Student",
      name: "Test",
      imageURL:Random.image('400x400'),
      description: ``,
    }
  ] },
  { id: 4, title: "Graduate Student", 'peopleInfos|1-10': [
    {
      email: "Test",
      position: "Graduate Student",
      name: "Test",
      imageURL:Random.image('400x400'),
      description: ``,
    }
  ] },
  { id: 5, title: "Visiting Scholar", 'peopleInfos|1-2': [
    {
      email: "Test",
      position: "Graduate Student",
      name: "Test",
      imageURL:Random.image('400x400'),
      description: ``,
    }
  ] },
];
module.exports = [
  {
    url: "/login",
    type: "post",
    response: (config) => {
      // 判断传进的post数据是否验证成功
      const { account, password, loginStatus } = config.body;
      if (account === "zpliu" && password === "111") {
        return {
          code: 0,
          status: 200,
          info: {
            username: "zpliu",
            loginStatus: true,
            message: "authenticated",
            // config
          },
        };
      } else {
        return {
          code: 1,
          status: 200,
          info: {
            username: "",
            loginStatus: false,
            message: "authenticated failed",
            // config
          },
        };
      }
    },
  },
  {
    url: "/register",
    type: "post",
    response: (config) => {
      const { account, password, loginStatus } = config.body;
      return {
        code: 0,
        status: 200,
        info: {
          message: "注册成功",
        },
      };
    },
  },
  {
    url: "/people-show",
    type: "get",
    response: (config) => {
      return {
        code: 0,
        status: 200,
        info: people_brif_info
      };
    },
  },
];
