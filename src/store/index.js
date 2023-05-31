import {createStore} from 'vuex'

export default createStore({
  state: {
    screenSize: {
      desktop: true,
      tablet: false,
      mobile: false
    }
  },
  getters: {
    screenSize(state) {
      return state.screenSize
    }
  },
  mutations: {
    screenSizeMutation(state, size) {
      if (size > 1000) {
        state.screenSize.desktop = true;
        state.screenSize.tablet = false;
        state.screenSize.mobile = false;
      } else if (size > 660) {
        state.screenSize.desktop = false;
        state.screenSize.tablet = true;
        state.screenSize.mobile = false;
      } else {
        state.screenSize.desktop = false;
        state.screenSize.tablet = false;
        state.screenSize.mobile = true;
      }
    }
  },
  actions: {},
  modules: {}
})
