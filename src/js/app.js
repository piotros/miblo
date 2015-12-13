var Vue = require('vue');
var VueRouter = require('vue-router');
var TagsComponent = require('./components/tags.vue');

Vue.use(VueRouter);

var App = Vue.extend({});

var router = new VueRouter({
    hashbang: false
});

router.map({
    '/tags': {
        component: TagsComponent
    }
});

router.start(App, '#app');