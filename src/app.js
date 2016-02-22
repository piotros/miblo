import Vue            from 'vue'
import VueRouter      from 'vue-router'
import Layout         from 'components/layout/layout.vue'
import configRouter   from 'router-config.js'

Vue.use(VueRouter)

const router = new VueRouter({
    hashbang: false
})

configRouter(router)

router.start(Layout, '#app')