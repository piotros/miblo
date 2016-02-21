import Sandbox                 from 'components/sandbox/sandbox.vue'
import TagsComponent           from 'components/tags/tags.vue'
import EntriesListComponent    from 'components/entries-list/entries-list.vue'

var routes = {
    '/sandbox': {
        component: Sandbox
    },

    '/tags': {
        component: TagsComponent
    },

    '/entries': {
        component: EntriesListComponent
    }
}

export default routes