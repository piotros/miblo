<template>
    <div class="layout">
        <navigation></navigation>
        <entry-add></entry-add>
        <signup></signup>
        <login></login>
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

<script type="text/babel">
    import store            from 'vuex/store'
    import Mousetrap        from 'mousetrap'
    import Navigation       from 'components/navigation.vue'
    import EntryAdd         from 'components/entry-add.vue'
    import Signup           from 'components/signup.vue'
    import Login            from 'components/login.vue'
    import FooterView       from 'components/footer.vue'
    import {
        fetchEntries,
        openEntryAddModal,
        closeEntryAddModal
    } from 'vuex/actions'

    export default {
        store,

        vuex: {
            actions: {
                fetchEntries,
                openEntryAddModal,
                closeEntryAddModal
            }
        },

        components: {
            Navigation,
            EntryAdd,
            Signup,
            Login,
            FooterView
        },

        created() {
            this.fetchEntries()

            Mousetrap.bind('a e', function () {
                this.openEntryAddModal()
                return false
            }.bind(this))

            Mousetrap.bind('esc', function () {
                this.closeEntryAddModal()
                return false
            }.bind(this))
        }
    }
</script>
