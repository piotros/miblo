<template>
    <div class="layout">
        <loader v-if="!isAppReady"></loader>
        <div v-if="isAppReady">
            <navigation></navigation>
            <entry-add></entry-add>
            <signup-modal></signup-modal>
            <login-modal></login-modal>
            <router-view></router-view>
            <footer-view></footer-view>
        </div>
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
    import Loader           from 'components/loader.vue'
    import Navigation       from 'components/navigation.vue'
    import EntryAdd         from 'components/entry-add.vue'
    import SignupModal      from 'components/signup-modal.vue'
    import LoginModal       from 'components/login-modal.vue'
    import FooterView       from 'components/footer.vue'
    import {
            openEntryAddModal,
            closeEntryAddModal,
            setAppAsReady,
            getAppInitialData
    } from 'vuex/actions'

    export default {
        store,

        vuex: {
            getters: {
                isAppReady: store => store.app.isAppReady
            },

            actions: {
                openEntryAddModal,
                closeEntryAddModal,
                setAppAsReady,
                getAppInitialData
            }
        },

        components: {
            Navigation,
            EntryAdd,
            SignupModal,
            LoginModal,
            Loader,
            FooterView
        },

        created() {
            Mousetrap.bind('a e', function () {
                this.openEntryAddModal()
                return false
            }.bind(this))

            Mousetrap.bind('esc', function () {
                this.closeEntryAddModal()
                return false
            }.bind(this))
        },

        ready() {
            if (!localStorage.getItem('token')) {
                this.setAppAsReady()
            } else {
                this.getAppInitialData()
            }
        }
    }
</script>
