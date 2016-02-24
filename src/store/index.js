import Vue from 'vue'
import Vuex from 'vuex'
import {entriesInitialState, entriesActions, entriesMutations} from './modules/entries'
import {userInitialState, userActions, userMutations} from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        entries: entriesInitialState,
        user   : userInitialState
    },

    actions: [
        entriesActions,
        userActions
    ],

    mutations: [
        entriesMutations,
        userMutations
    ],

    strict: process.env.NODE_ENV !== 'production',

    middlewares: process.env.NODE_ENV !== 'production' ? [Vuex.createLogger()] : []

})