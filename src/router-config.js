import Sandbox                 from 'components/sandbox.vue'
import Tags                    from 'components/tags.vue'
import EntriesList             from 'components/entries-list.vue'
import UserProfile             from 'components/user-profile.vue'
import NotFound                from 'components/not-found.vue'

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