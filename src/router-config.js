import Sandbox                 from 'components/sandbox.vue'
import Tags                    from 'components/tags.vue'
import MainEntriesList         from 'components/main-entries-list.vue'
import UserProfile             from 'components/user-profile.vue'
import NotFound                from 'components/not-found.vue'

const routes = {
    '/sandbox': {
        component: Sandbox
    },

    '/tags': {
        component: Tags
    },

    '/tags/:tagname': {
        name     : 'tags',
        component: Tags
    },

    '/entries': {
        component: MainEntriesList
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
