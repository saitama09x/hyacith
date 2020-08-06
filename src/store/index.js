import Vue from 'vue'
import Vuex from 'vuex'
import hyacith_service, { actions } from './modules/hyacith/hyacith_service.js'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      
     },
     state: {
  	    homeContent : "",
        carousel : ""
  	},
  	mutations: hyacith_service.mutation,
    actions : hyacith_service.actions,    
    strict: process.env.DEV
  })

  return Store
}
