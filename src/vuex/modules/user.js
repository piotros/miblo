const state = {
    nickname       : 'jannowak',
    entriesCount   : 3,
    followers      : 2,
    following      : 1,
    name           : 'Jan',
    surname        : 'Nowak',
    isAuthenticated: false
}

const mutations = {
    AUTHORIZE_USER (state) {
        state.isAuthenticated = true
    },

    DEAUTHORIZE_USER (state) {
        state.isAuthenticated = false
    }

}

export default {
    state,
    mutations
}
