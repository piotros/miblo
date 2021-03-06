import entriesApi from 'api/entries.js'
import currentUserApi from 'api/current-user.js'

export const fetchEntries = ({dispatch}, callback) => {
    entriesApi.fetchEntries({
        success: ({data}) => {
            dispatch('RECEIVE_ENTRIES', data)
            callback()
        },
        error  : () => {
            //fetching unsuccessful
        }
    })
}

export const addEntry = ({dispatch, state}, entry) => {
    entriesApi.addEntry({
        entry,
        success: ({data}) => dispatch('ADD_ENTRY', data),
        error  : () => {
            //adding unsuccessful
        }
    })
}

export const likeEntry          = ({dispatch}, entry) => dispatch('LIKE_ENTRY', entry)
export const openEntryAddModal  = ({dispatch}) => dispatch('OPEN_ENTRY_ADD_MODAL')
export const closeEntryAddModal = ({dispatch}) => dispatch('CLOSE_ENTRY_ADD_MODAL')
export const openSignupModal    = ({dispatch}) => dispatch('OPEN_SIGNUP_MODAL')
export const closeSignupModal   = ({dispatch}) => dispatch('CLOSE_SIGNUP_MODAL')
export const openLoginModal     = ({dispatch}) => dispatch('OPEN_LOGIN_MODAL')
export const closeLoginModal    = ({dispatch}) => dispatch('CLOSE_LOGIN_MODAL')
export const authenticateUser   = ({dispatch}) => dispatch('AUTHENTICATE_USER')
export const logout             = ({dispatch}) => dispatch('DEAUTHENTICATE_USER')
export const setCurrentTag      = ({dispatch}, tagName) => dispatch('SET_CURRENT_TAG', tagName)
export const setAppAsReady      = ({dispatch}) => dispatch('SET_APP_AS_READY')

export const getAppInitialData = ({dispatch}) => {
    currentUserApi.getCurrentUser({
        success: ({data}) => {
            dispatch('SET_USER_DATA', data)
            dispatch('SET_APP_AS_READY')
        },

        error: () => {
            dispatch('DEAUTHENTICATE_USER')
            dispatch('SET_APP_AS_READY')
        }
    })
}

export const fetchTagsList = ({dispatch}, callback) => {
    setTimeout(() => {
        dispatch('RECEIVE_TAGS_LIST', {
            popular: ['aaa', 'bbb'],
            newest : ['ccc', 'ddd']
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
