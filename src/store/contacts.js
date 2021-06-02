import { getContacts } from "../services/contacts";
const state = {
  contacts: [],
  favorites: [],
};
const mutations = {
  set_contacts(state, contacts) {
    state.contacts = contacts;
  },
  set_favorite(state, favorite) {
    const find = state.favorites.find((fav) => fav.id === favorite.id);
    if (!find) state.favorites.push({ ...favorite, favorite: true });
  },
  delete_favorite(state, index) {
    state.favorites.splice(index, 1);
  },
};
const actions = {
  async getAllContacts({ commit }) {
    const result = await getContacts();
    commit("set_contacts", result.data);
  },
};

const getters = {
  contactsList(state) {
    return state.contacts;
  },
  favoritesList(state) {
    return state.favorites;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
