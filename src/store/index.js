import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    surahList: []
  },
  getters: {
    allSurah: state => state.surahList
  },
  mutations: {
    setSurah: (state, surah) => {
      return (state.surahList = surah);
    }
  },
  actions: {
    async fetchSurahList({ commit }) {
      const response = await Axios.get(
        "https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah.json"
      );
      commit("setSurah", response.data);
    }
  },
  modules: {}
});
