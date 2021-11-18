import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import settings from './modules/settings'
import register from './modules/register'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    settings,
    register,
  },
  getters
})

export default store
