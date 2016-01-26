import Vue       from 'vue'
import VueRouter from 'vue-router'
import Layout    from 'components/layout/layout.vue'
import routes    from 'routes.js'

Vue.use(VueRouter)

var router = new VueRouter({
    hashbang: false
})

router.map(routes)

router.start(Layout, '#app')