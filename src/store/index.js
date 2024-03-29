import Vue from "vue";
import Vuex from "vuex";
import contacts from "./contacts";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    contacts,
  },
  plugins: [createPersistedState()],
});
export default store;
