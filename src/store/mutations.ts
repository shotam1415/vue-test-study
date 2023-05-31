export const mutations = {
  increment: (state: StateType): void => {
    state.currentCount++;
  },
  decrement: (state: StateType): void => {
    state.currentCount--;
  },
};
