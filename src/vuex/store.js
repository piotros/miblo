import Vue          from 'vue'
import Vuex         from 'vuex'
import createLogger from 'vuex/logger'
import app          from './modules/app'
import entries      from './modules/entries'
import user         from './modules/user'
import ui           from './modules/ui'
import selectedUser from './modules/selected-user'
import tags         from './modules/tags'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        app,
        entries,
        user,
        ui,
        selectedUser,
        tags
    },

    strict: process.env.NODE_ENV !== 'production',

    plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []

})
