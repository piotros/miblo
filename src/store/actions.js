export const likeEntry = ({ dispatch }, entry) => {
    dispatch('LIKE_ENTRY', entry)
}

export const addEntry = ({ dispatch }, entry) => {
    setTimeout(function () {
        entry.authorNickname = 'aaa'
        dispatch('ADD_ENTRY', entry)
    }, 1000)
}