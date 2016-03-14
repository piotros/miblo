<template>
    <div class="entries-list">
        <entry v-for="entry in entries" :entry="entry"></entry>
    </div>
</template>

<script>
    import Entry from 'components/entry/entry.vue'

    export default {
        vuex: {
            getters: {
                entries: store => store.entries.all
            }
        },

        components: {
            Entry
        }

    }
</script>