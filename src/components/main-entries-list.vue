<template>
    <div class="main-entries-list">
        <entries-list :entries="entries"></entries-list>
    </div>
</template>

<script type="text/babel">
    import EntriesList from 'components/entries-list.vue'

    export default {
        vuex: {
            getters: {
                entries: store => store.entries.all
            }
        },

        components: {
            EntriesList
        }

    }
</script>
