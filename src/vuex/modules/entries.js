import {set} from 'vue'

const state = {
    all: []
}

const mutations = {
    RECEIVE_ENTRIES (state, entries) {
        state.all = entries
    },

    ADD_ENTRY(state, entry) {
        state.all.unshift(entry)
    },

    LIKE_ENTRY(state, entry) {
        // Entry is reference. Should be changed probably.
        if (entry.likes) {
            entry.likes++
        } else {
            set(entry, 'likes', 1)
        }
    }
}

export default {
    state,
    mutations
}