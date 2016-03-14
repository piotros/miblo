import Vue from 'vue'

const PATH = '/api/users'

const fetchUsers = opts => {
    Vue.http.get(PATH).then(opts.success, opts.error)
}

const addUser = opts => {
    Vue.http.post(PATH, opts.entry).then(opts.success, opts.error)
}

const getUser = opts => {
    Vue.http.get(PATH + '/' + opts.nickname).then(opts.success, opts.error)
}

export default {
    fetchUsers,
    addUser,
    getUser
}