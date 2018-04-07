export const state = () => ({
  show: false,
  message: "",
  color: "success",
  timeout: 6000
});

export const mutations = {
  setMessage(store, payload) {
    store.message = payload
  },
  show(store, payload) {
    store.show = payload
  },
  color(store, payload) {
    store.color = payload
  },
};

export const actions = {
  show({commit}, {color, message}) {
    commit("setMessage", message);
    commit("show", true);
    commit("color", color);

    setTimeout(() => {
      commit("setMessage", "");
      commit("show", false);
      commit("color", "success");
    }, 6000)
  },
  hide({commit}){
    commit("setMessage", "");
    commit("show", false);
    commit("color", "success");
  }

};
