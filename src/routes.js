import Sandbox                 from 'components/sandbox/sandbox.vue'
import TagsComponent           from 'components/tags/tags.vue'
import EntriesListComponent    from 'components/entries-list/entries-list.vue'
import UserProfile             from 'components/user-profile/user-profile.vue'

var routes = {
    '/sandbox': {
        component: Sandbox
    },

    '/tags': {
        component: TagsComponent
    },

    '/entries': {
        component: EntriesListComponent
    },

    '/user/:nickname': {
        name     : 'user',
        component: UserProfile
    }
}

export default routes