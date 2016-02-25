import {set} from 'vue'

export const entriesInitialState = [{
    content       : 'lorem',
    authorNickname: 'testnickname',
    authorName    : 'Big Ben',
    likes         : 3,
    comments      : 5,
    shares        : 4

}]

export const entriesActions = {
    likeEntry: 'LIKE_ENTRY',

    addEntry({dispatch}, entry) {
        setTimeout(function () {
            entry.authorNickname = 'aaa'
            dispatch('ADD_ENTRY', entry)
        }, 1000)
    }
}

export const entriesMutations = {
    ADD_ENTRY({entries}, entry) {
        entries.unshift(entry)
    },

    LIKE_ENTRY(store, entry) {
        // Entry is reference. Should be fixed probably.
        if (entry.likes) {
            entry.likes++
        } else {
            set(entry, 'likes', 1)
        }
    }
}