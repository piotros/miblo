const state = {
    isAppReady: false
}

const mutations = {
    SET_APP_AS_READY (state) {
        state.isAppReady = true
    }
}

export default {
    state,
    mutations
}
