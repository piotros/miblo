import Vue            from 'vue'
import VueRouter      from 'vue-router'
import VueResource    from 'vue-resource'
import App            from 'components/app.vue'
import configRouter   from 'router-config.js'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    hashbang: false
})

configRouter(router)

router.start(App, '#app')