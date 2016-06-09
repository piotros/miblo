const state = {
    isAuthenticated: false,
    profile        : {
        // isProfileCompleted: false,
        // nickname          : 'jannowak',
        // entriesCount      : 3,
        // followers         : 2,
        // following         : 1,
        // first_name        : 'Jan',
        // last_name         : 'Nowak',
        // avatar            : 'link'
    }
}

const mutations = {
    SET_USER_DATA (state, data) {
        state.profile = data
    },

    AUTHENTICATE_USER (state) {
        state.isAuthenticated = true
    },

    DEAUTHENTICATE_USER (state) {
        state.isAuthenticated = false
    }

}

export default {
    state,
    mutations
}
