import Vue            from 'vue'
import VueRouter      from 'vue-router'
import VueResource    from 'vue-resource'
import { sync }       from 'vuex-router-sync'
import App            from 'components/app.vue'
import configRouter   from 'router-config.js'
import store          from 'vuex/store'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    hashbang: false
})

configRouter(router)
sync(store, router)

router.start(App, '#app')
