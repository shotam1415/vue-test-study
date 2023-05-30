import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

type StateType = {
  currentCount: number;
};

export default new Vuex.Store({
  state: {
    currentCount: 0,
  },
  getters: { currentCount: (state: StateType): number => state.currentCount },
  mutations: {
    increment: (state: StateType): void => {
      state.currentCount++;
    },
    decrement: (state: StateType): void => {
      state.currentCount--;
    },
  },
  actions: {},
  modules: {},
});
