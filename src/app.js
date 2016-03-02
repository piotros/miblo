import Vue            from 'vue'
import VueRouter      from 'vue-router'
import VueResource    from 'vue-resource'
import Layout         from 'components/layout/layout.vue'
import configRouter   from 'router-config.js'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    hashbang: false
})

configRouter(router)

router.start(Layout, '#app')