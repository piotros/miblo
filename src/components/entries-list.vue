<template>
    <div class="entries-list">
        <entry v-for="entry in entries" :entry="entry"></entry>
    </div>
</template>

<script type="text/babel">
    import Entry from 'components/entry.vue'

    export default {
        props: ['entries'],

        components: {
            Entry
        }

    }
</script>
