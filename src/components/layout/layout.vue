<template>
    <div class="layout">
        <navigation :add-entry.sync="addEntry"></navigation>
        <entry-add :show.sync="addEntry"></entry-add>
        <router-view></router-view>
        <footer-view></footer-view>
    </div>
</template>

<style lang="sass">
    @import "settings";
    @import "~foundation-sites/scss/typography/base";
    @import "~font-awesome/scss/variables";
    @import "~font-awesome/scss/path";
    @import "~font-awesome/scss/core";

    @include foundation-typography-base;
    @include foundation-global-styles;

    .layout {
        width: rem-calc(1200);
        margin: 0 auto;
    }
</style>

<script>
    import Navigation from 'components/navigation/navigation.vue'
    import EntryAdd   from 'components/entry-add/entry-add.vue'
    import FooterView from 'components/footer/footer.vue'

    export default {
        components: {
            Navigation,
            EntryAdd,
            FooterView
        },

        data: function () {
            return {
                addEntry: false
            }
        }
    }
</script>