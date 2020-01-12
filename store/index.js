export const state = () => ({
  language: ""
});
export const getters = {
  get_language({ language }) {
    if (language === "en") {
      return "";
    }
    return "/"+language;
  }
};
export const mutations = {
  GET_LANGUAGE(state, payload) {
    state.language = payload;
  }
};
export const actions = {};
