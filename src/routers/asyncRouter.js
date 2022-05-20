/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-04-11 22:29:49
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-20 14:13:17
 * @@param:
 */
import { publicationRoute } from "./dashboard/publication.js";
import { newsRoute } from "./dashboard/new.js";
import { researchRoute } from "./dashboard/research.js";
import { teamRoute } from "./dashboard/team.js";

let asyncRouter = [
  /**
   * 不同权限的动态路由
   */
];
asyncRouter = asyncRouter.concat(publicationRoute);
asyncRouter = asyncRouter.concat(newsRoute);
asyncRouter = asyncRouter.concat(researchRoute);
asyncRouter = asyncRouter.concat(teamRoute);
export { asyncRouter };
