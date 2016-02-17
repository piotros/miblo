import Vue from 'vue'
import Vuex from 'vuex'
import {entriesInitialState, entriesActions, entriesMutations} from './modules/entries'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        entries: entriesInitialState
    },

    actions: [entriesActions],

    mutations: [entriesMutations],

    strict: process.env.NODE_ENV !== 'production',

    middlewares: process.env.NODE_ENV !== 'production' ? [Vuex.createLogger()] : []

})