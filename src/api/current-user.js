import Vue from 'vue'

const PATH = '/api/me'

const getCurrentUser = opts => {
    Vue.http.get(PATH).then(opts.success, opts.error)
}

export default {
    getCurrentUser
}
