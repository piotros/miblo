const state = {
    entryAddModalOpened: false
}

const mutations = {
    OPEN_ENTRY_ADD_MODAL (state) {
        state.entryAddModalOpened = true
    },

    CLOSE_ENTRY_ADD_MODAL (state) {
        state.entryAddModalOpened = false
    }
}

export default {
    state,
    mutations
}
