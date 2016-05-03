<template>
    <div class="tags">
        <div class="popular-tags">
            <h3>Popular tags</h3>
            <a
                v-for="tag in popularTags"
                v-link="{ name: 'tags', params: { tagname: tag } }">
                {{tag}}
            </a>
        </div>
        <div class="newest-tags">
            <h3>Newest tags</h3>
            <a
                v-for="tag in newestTags"
                v-link="{ name: 'tags', params: { tagname: tag } }">
                {{tag}}
            </a>
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
    export default {
        vuex: {
            getters: {
                popularTags: store => store.tags.popular,
                newestTags: store => store.tags.newest
            }
        }
    }
</script>
