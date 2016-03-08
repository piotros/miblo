import Vue from 'vue'

const PATH = '/api/entries'

const fetchEntries = opts => {
    Vue.http.get(PATH).then(opts.success, opts.error)
}

const addEntry = opts => {
    Vue.http.post(PATH, opts.entry).then(opts.success, opts.error)
}

export default {
    fetchEntries,
    addEntry
}