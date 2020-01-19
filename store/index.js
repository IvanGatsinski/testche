export const state = () => ({
  name: ""
});
export const getters = {
  get_language({ language }) {
    if (language === "en") {
      return "";
    }
    return "/" + language;
  }
};
export const mutations = {
  SET_NAME(state, payload) {
    state.name = payload;
  }
};
export const actions = {};
