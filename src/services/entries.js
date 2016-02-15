var store = {
    entries: [{title: 111, content: 777}],

    more() {
        setTimeout(function () {
            this.entries = [
                {title: 222, content: 'zzz'},
                {title: 222, content: 'zzz'}
            ]
        }.bind(this), 5000)
    },

    add(entry) {
        this.entries.unshift(entry)
    }

}

export default store
