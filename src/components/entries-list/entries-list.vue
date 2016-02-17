<template>
    <div class="entries-list">
        <entry v-for="entry in entries" :entry="entry"></entry>
    </div>
</template>

<script>
    import Entry from 'components/entry/entry.vue'
    import store from 'store'

    export default {
        components: {
            Entry
        },

        data() {
            return {
                entries: store.state.entries
            }
        }

    }
</script>