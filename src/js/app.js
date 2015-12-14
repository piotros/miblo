var Vue                 = require('vue');
var VueRouter           = require('vue-router');
var TagsComponent       = require('./components/tags/tags.vue');
var NavigationComponent = require('./components/navigation/navigation.vue');
var FooterComponent     = require('./components/footer/footer.vue');

Vue.use(VueRouter);

var App = Vue.extend({
    components: {
        navigation: NavigationComponent,
        footerView: FooterComponent
    }
});

var router = new VueRouter({
    hashbang: false
});

router.map({
    '/tags': {
        component: TagsComponent
    }
});

router.start(App, '#app');