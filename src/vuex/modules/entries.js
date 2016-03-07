import {set} from 'vue'

const state = [{
    content       : 'lorem',
    authorNickname: 'testnickname',
    authorName    : 'Big Ben',
    likes         : 3,
    comments      : 5,
    shares        : 4

}]

const mutations = {
    ADD_ENTRY(state, entry) {
        state.unshift(entry)
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