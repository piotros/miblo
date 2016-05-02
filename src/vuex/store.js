import Vue          from 'vue'
import Vuex         from 'vuex'
import createLogger from 'vuex/logger'
import entries      from './modules/entries'
import user         from './modules/user'
import ui           from './modules/ui'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        entries,
        user,
        ui
    },

    strict: process.env.NODE_ENV !== 'production',

    middlewares: process.env.NODE_ENV !== 'production' ? [createLogger()] : []

})
