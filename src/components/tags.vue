<template>
    <div class="tags">
        <div class="popular-tags">
            <h3>Popular tags</h3>

            <div v-if="$loadingRouteData">
                <loader></loader>
            </div>

            <div v-if="!$loadingRouteData">
                <a
                    v-for="tag in popularTags"
                    v-link="{ name: 'tags', params: { tagname: tag } }">
                    {{tag}}
                </a>
            </div>
        </div>
        <div class="newest-tags">
            <h3>Newest tags</h3>

            <div v-if="$loadingRouteData">
                <loader></loader>
            </div>

            <div v-if="!$loadingRouteData">
                <a
                    v-for="tag in newestTags"
                    v-link="{ name: 'tags', params: { tagname: tag } }">
                    {{tag}}
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped rel="stylesheet/scss">
    .tags {
        display: flex;
    }

    .popular-tags,
    .newest-tags {
        width: 50%;
    }
</style>

<script type="text/babel">
    import Loader          from 'components/loader.vue'
    import {fetchTagsList} from 'vuex/actions'

    export default {
        vuex: {
            getters: {
                popularTags: store => store.tags.popular,
                newestTags: store => store.tags.newest
            },

            actions: {
                fetchTagsList
            }
        },

        components: {
            Loader
        },

        route: {
            data(transition) {
                this.fetchTagsList(transition.next)
            }
        }
    }
</script>
