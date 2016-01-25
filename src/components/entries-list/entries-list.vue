<template>
    <div class="entries-list">
        <entry v-for="entry in entries" :entry="entry"></entry>
    </div>
</template>

<script>
    import Entry from 'components/entry/entry.vue'

    export default {
        components: {
            Entry
        },

        data() {
            return {
                entries: [
                    {title: 111, content: 222},
                    {title: 333, content: 444},
                    {title: 555, content: 666}
                ]
            }
        }
    }
</script>