import TagsComponent           from 'components/tags/tags.vue'
import EntryComponent          from 'components/entry/entry.vue'
import EntriesListComponent    from 'components/entries-list/entries-list.vue'

var routes = {
    '/tags': {
        component: TagsComponent
    },

    '/entry': {
        component: EntryComponent
    },

    '/entries': {
        component: EntriesListComponent
    }
}

export default routes