<template>
    <div class="tag-entries-list">
        <div class="current-tag-name">
            #{{currentTagName}}
        </div>

        <div v-if="$loadingRouteData">
            <loader></loader>
        </div>

        <div v-if="!$loadingRouteData">
            <entries-list :entries="entries"></entries-list>
        </div>
    </div>
</template>

<style lang="sass" scoped rel="stylesheet/scss">
    .current-tag-name {
        text-align: center;
        padding: 20px;
        font-size: 130%;
    }
</style>

<script type="text/babel">
    import Loader             from 'components/loader.vue'
    import EntriesList        from 'components/entries-list.vue'
    import {
            setCurrentTag,
            fetchCurrentTagEntries
    } from 'vuex/actions'

    export default {
        vuex: {
            getters: {
                entries       : store => store.tags.currentTag.entries,
                currentTagName: store => store.tags.currentTag.name
            },
            actions: {
                setCurrentTag,
                fetchCurrentTagEntries
            }
        },

        components: {
            EntriesList,
            Loader
        },

        route: {
            data(transition) {
                this.setCurrentTag(this.$route.params.tagname)
                this.fetchCurrentTagEntries(transition.next)
            }
        }

    }
</script>
