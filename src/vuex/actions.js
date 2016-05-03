import entriesApi from 'api/entries.js'

export const fetchEntries = ({dispatch}) => {
    entriesApi.fetchEntries({
        success: ({data}) => dispatch('RECEIVE_ENTRIES', data),
        error  : () => {
            //fetching unsuccessful
        }
    })
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

export const likeEntry = ({dispatch}, entry) => dispatch('LIKE_ENTRY', entry)
export const closeEntryAddModal = ({dispatch}) => dispatch('CLOSE_ENTRY_ADD_MODAL')
export const openEntryAddModal = ({dispatch}) => dispatch('OPEN_ENTRY_ADD_MODAL')
export const setCurrentTag = ({dispatch}, tagName) => dispatch('SET_CURRENT_TAG', tagName)

export const fetchTagsList = ({dispatch}, callback) => {
    setTimeout(() => {
        dispatch('RECEIVE_TAGS_LIST', {
            popular: ['aaa', 'bbb'],
            newest: ['ccc', 'ddd']
        })
        callback()
    }, 3000)
}

export const fetchCurrentTagEntries = ({dispatch, state}, callback) => {
    setTimeout(() => {
        dispatch('RECEIVE_CURRENT_TAG_ENTRIES', [{}, {}, {}])
        callback()
    }, 3000)
}
