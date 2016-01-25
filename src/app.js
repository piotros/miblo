import Vue                     from 'vue'
import VueRouter               from 'vue-router'
import LayoutComponent         from 'components/layout/layout.vue'
import TagsComponent           from 'components/tags/tags.vue'
import NavigationComponent     from 'components/navigation/navigation.vue'
import FooterComponent         from 'components/footer/footer.vue'
import EntryComponent          from 'components/entry/entry.vue'
import EntriesListComponent    from 'components/entries-list/entries-list.vue'

Vue.use(VueRouter)

var App = Vue.extend({
    components: {
        navigation: NavigationComponent,
        footerView: FooterComponent
    }
})

var router = new VueRouter({
    hashbang: false
})

router.map({
    '/tags': {
        component: TagsComponent
    },

    '/entry': {
        component: EntryComponent
    },

    '/entries': {
        component: EntriesListComponent
    }
})

router.start(App, '#app')