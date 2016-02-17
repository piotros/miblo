export const entriesInitialState = [{title: 'xxx', content: 'yyy'}]

export const entriesActions = {
    addEntry: 'ADD'
}

export const entriesMutations = {
    ADD({entries}, entry) {
        entries.unshift(entry)
    }
}