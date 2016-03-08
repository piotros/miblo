import Vue from 'vue'

const fetchEntries = cb => {
    Vue.http.get('/api/entries').then(cb.success, cb.error)
}

export default {
    fetchEntries
}