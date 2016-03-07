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
    @import "~font-awesome/scss/path";

    @include foundation-global-styles;
    @include foundation-typography-base;

    .layout {
        width: rem-calc(1200);
        margin: 0 auto;
    }
</style>

<script>
    import store      from 'vuex/store'
    import Mousetrap  from 'mousetrap'
    import Navigation from 'components/navigation/navigation.vue'
    import EntryAdd   from 'components/entry-add/entry-add.vue'
    import FooterView from 'components/footer/footer.vue'

    export default {
        store,

        components: {
            Navigation,
            EntryAdd,
            FooterView
        },

        data() {
            return {
                addEntry: false
            }
        },

        created() {
            Mousetrap.bind('a e', function () {
                this.addEntry = true
                return false
            }.bind(this))

            Mousetrap.bind('esc', function () {
                this.addEntry = false
                return false
            }.bind(this))
        }
    }
</script>