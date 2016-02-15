<template>
    <div class="entries-list">
        <entry v-for="entry in entries" :entry="entry"></entry>
    </div>
</template>

<script>
    import Entry from 'components/entry/entry.vue'
    import entriesService from 'services/entries.js'

    export default {
        components: {
            Entry
        },

        data() {
            return entriesService
        },

        created() {
//            entriesService.more()
        }
    }
</script>