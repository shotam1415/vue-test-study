import { createLocalVue, shallowMount } from "@vue/test-utils";
import TestView from "@/views/TestView.vue";
import Vuex from "vuex";
const localVue = createLocalVue();
localVue.use(Vuex);

let store: any;
import { getters } from "@/store/getters";
import { mutations } from "@/store/mutations";
beforeEach(() => {
  store = new Vuex.Store({
    state: {
      currentCount: 0,
    },
    getters: getters,
    mutations: mutations,
  });
});

describe("TestView.vue", () => {
  it("renders props.msg when passed", async () => {
    const wrapper = shallowMount(TestView, {
      localVue,
      store,
    });
    const vm: any = wrapper.vm;
    await vm.increment();
    expect(getters.currentCount(store.state)).toBe(1);
  });
});
