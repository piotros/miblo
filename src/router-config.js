import Tags                    from 'components/tags.vue'
import MainEntriesList         from 'components/main-entries-list.vue'
import UserProfile             from 'components/user-profile.vue'
import NotFound                from 'components/not-found.vue'
import TagEntriesList          from 'components/tag-entries-list.vue'
import HomeScreen              from 'components/home-screen.vue'
import LoginWindow             from 'components/login-window.vue'
import SignupWindow            from 'components/signup-window.vue'
import store                   from 'vuex/store'

const routes = {
    '/': {
        component: HomeScreen,
        auth     : false
    },

    '/login': {
        component: LoginWindow,
        auth     : false
    },

    '/signup': {
        component: SignupWindow,
        auth     : false
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
        component: NotFound,
        auth     : false
    }
}

const redirects = {
    '*': '/'
}

const beforeEach = (transition) => {
    if (store.state.user.isAuthenticated || transition.to.auth === false) {
        transition.next()
    } else {
        transition.redirect('/login')
    }
}

export default function (router) {
    router.map(routes)
    router.redirect(redirects)
    router.beforeEach(beforeEach)
}
