const state = {
    entryAddModalOpened: false,
    signupModalOpened  : false,
    loginModalOpened   : false
}

const mutations = {
    OPEN_ENTRY_ADD_MODAL (state) {
        state.entryAddModalOpened = true
    },

    CLOSE_ENTRY_ADD_MODAL (state) {
        state.entryAddModalOpened = false
    },

    OPEN_SIGNUP_MODAL (state) {
        state.signupModalOpened = true
    },

    CLOSE_SIGNUP_MODAL (state) {
        state.signupModalOpened = false
    },

    OPEN_LOGIN_MODAL (state) {
        state.loginModalOpened = true
    },

    CLOSE_LOGIN_MODAL (state) {
        state.loginModalOpened = false
    }
}

export default {
    state,
    mutations
}
