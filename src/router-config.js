import Sandbox                 from 'components/sandbox/sandbox.vue'
import Tags                    from 'components/tags/tags.vue'
import EntriesList             from 'components/entries-list/entries-list.vue'
import UserProfile             from 'components/user-profile/user-profile.vue'
import NotFound                from 'components/not-found/not-found.vue'

const routes = {
    '/sandbox': {
        component: Sandbox
    },

    '/tags': {
        component: Tags
    },

    '/entries': {
        component: EntriesList
    },

    '/user/:nickname': {
        name     : 'user',
        component: UserProfile
    },

    '/404': {
        component: NotFound
    }
}

const redirects = {
    '*': '/entries'
}

export default function (router) {
    router.map(routes)
    router.redirect(redirects)
}