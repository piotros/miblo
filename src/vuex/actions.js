import entriesApi from 'api/entries.js'

export const fetchEntries = ({dispatch}) => {
    entriesApi.fetchEntries({
        success: ({data}) => dispatch('RECEIVE_ENTRIES', data),
        error  : () => {
            //fetching unsuccessful
        }
    })
}

export const likeEntry = ({dispatch}, entry) => {
    dispatch('LIKE_ENTRY', entry)
}

export const addEntry = ({dispatch, state}, entry) => {
    entry.authorNickname = state.user.nickname

    entriesApi.addEntry({
        entry,
        success: ({data}) => dispatch('ADD_ENTRY', data),
        error  : () => {
            //adding unsuccessful
        }
    })
}