import Vue            from 'vue'
import VueRouter      from 'vue-router'
import VueResource    from 'vue-resource'
import VueI18n        from 'vue-i18n'
import {sync}         from 'vuex-router-sync'
import App            from 'components/app.vue'
import configRouter   from 'router-config.js'
import store          from 'vuex/store'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueI18n)

const router = new VueRouter({
    hashbang: false
})

configRouter(router)
sync(store, router)

router.start(App, '#app')
