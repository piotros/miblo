<template>
    <div class="entries-list">
        <entry v-for="entry in entries" :entry="entry"></entry>
    </div>
</template>

<script>
    import Entry            from 'components/entry/entry.vue'
    import { fetchEntries } from 'vuex/actions'

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
            Entry
        },

        created() {
            this.fetchEntries()
        }

    }
</script>