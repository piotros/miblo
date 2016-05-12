<template>
    <div class="main-entries-list">
        <entries-list :entries="entries"></entries-list>
    </div>
</template>

<script type="text/babel">
    import EntriesList from 'components/entries-list.vue'
    import {fetchEntries} from 'vuex/actions'

    export default {
        vuex: {
            getters: {
                entries: store => store.entries.all
            },

            actions: {
                fetchEntries
            }
        },

        components: {
            EntriesList
        },

        route: {
            data(transition) {
                this.fetchEntries(transition.next)
            }
        }

    }
</script>
