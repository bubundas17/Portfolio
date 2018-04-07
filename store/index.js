export const state = () => ({
  user: {},
  isLoggedIn: false
});

export const mutations = {
  user(state, payload) {
    state.user = payload
  },
  loggedIn(state, payload) {
    state.isLoggedIn = payload;
  }
};

export const actions = {
  nuxtServerInit({commit}, {req}) {
    if(!req) return;
    if (req.user) {
      let {_id, name, username, __v, isAdmin, email} = req.user;
      commit('user', {_id, name, username, __v, isAdmin, email});
      commit("loggedIn", true)
    }
  },
  async logout({commit}) {
    commit('user', {});
    commit("loggedIn", false)
  }
};

export const getters = {
  user: store => {
    return store.user
  },
  isLoggedIn: store => {
    return store.isLoggedIn
  }
};
