/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2022-05-05 21:52:41
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-07 15:40:01
 * @@param:
 * ref  https://juejin.cn/post/6999473771253874701
 */
import { computed } from "vue";
import {
  mapGetters,
  mapState,
  useStore,
  createNamespacedHelpers,
  mapActions,
  mapMutations,
} from "vuex";

/**
 * vue3 setup 中使用mapstate等
 * mapAction...
 */
const useMapper = (mapper, mapFn, isFn = false) => {
  const store = useStore();

  const storeStateFns = mapFn(mapper);
  const storeState = {};
  Object.keys(storeStateFns).forEach((keyFn) => {
    const fn = storeStateFns[keyFn].bind({ $store: store });
    // 获得store中数据
    storeState[keyFn] = isFn ? fn : computed(fn);
  });

  return storeState;
};

export const useState = (moduleName, mapper) => {
  // 考虑Vuex中的模块化
  let mapperFn = mapState;
  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState;
  } else {
    mapper = moduleName;
  }
  return useMapper(mapper, mapperFn);
};

export const useGetters = (moduleName, mapper) => {
  let mapperFn = mapGetters;
  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters;
  } else {
    mapper = moduleName;
  }
  return useMapper(mapper, mapperFn);
};

export const useMutations = (moduleName, mapper) => {
  let mapperFn = mapMutations;
  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapMutations;
  } else {
    mapper = moduleName;
  }
  return useMapper(mapper, mapperFn, true);
};
export const useActions = (moduleName, mapper) => {
  let mapperFn = mapActions;
  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapActions;
  } else {
    mapper = moduleName;
  }
  return useMapper(mapper, mapperFn, true);
};
