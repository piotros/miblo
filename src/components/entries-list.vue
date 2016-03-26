<template>
    <div class="entries-list">
        <entry v-for="entry in entries" :entry="entry"></entry>
    </div>
</template>

<script type="text/babel">
    import Entry from 'components/entry.vue'

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