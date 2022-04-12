/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2022-04-11 15:45:23
 * @LastEditors: zpliu
 * @LastEditTime: 2022-04-11 15:46:49
 * @@param: 
 */
module.exports = [
    {
        url: "/upload-image",
        type: "post",
        response: (config) => {
          console.log(config.body)
          return {
            code: 0,
            status: 200,
          };
        }
      },
];