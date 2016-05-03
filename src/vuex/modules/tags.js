const state = {
    popular: null,
    newest: null,
    currentTag: {
        name: null,
        entries: null
    }
}

const mutations = {
    RECEIVE_TAGS_LIST (state, tagsList) {
        state.popular = tagsList.popular
        state.newest = tagsList.newest
    },

    SET_CURRENT_TAG (state, tagName) {
        state.currentTag.name = tagName
    },

    RECEIVE_CURRENT_TAG_ENTRIES (state, entries) {
        state.currentTag.entries = entries
    }
}

export default {
    state,
    mutations
}
