import Tags                    from 'components/tags.vue'
import MainEntriesList         from 'components/main-entries-list.vue'
import UserProfile             from 'components/user-profile.vue'
import NotFound                from 'components/not-found.vue'
import TagEntriesList          from 'components/tag-entries-list.vue'
import HomeScreen              from 'components/home-screen.vue'
import LoginWindow             from 'components/login-window.vue'
import SignupWindow            from 'components/signup-window.vue'

const routes = {
    '/': {
        component: HomeScreen
    },

    '/login': {
        component: LoginWindow
    },

    'signup': {
        component: SignupWindow
    },

    '/tags': {
        component: Tags
    },

    '/tags/:tagname': {
        name     : 'tags',
        component: TagEntriesList
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
