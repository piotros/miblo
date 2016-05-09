<template>
    <modal :show="loginModalOpened" :close-function="closeLoginModal" title="Login">
        <div slot="body">
            Login form
        </div>
        <div slot="footer">
            <button @click="login" class="login-button">Login</button>
        </div>
    </modal>
</template>

<script type="text/babel">
    import {closeLoginModal}    from 'vuex/actions'
    import {focus}              from 'vue-focus'
    import Modal                from 'components/modal.vue'

    export default {
        directives: {
            focus
        },

        components: {
            Modal
        },

        vuex: {
            getters: {
                loginModalOpened: store => store.ui.loginModalOpened
            },

            actions: {
                closeLoginModal
            }
        },

        methods: {
            login() {

            }
        }

    }
</script>

<style lang="sass" scoped rel="stylesheet/scss">
    @import 'settings';
    @import '~foundation-sites/scss/components/button';

    .login-button {
        @include button;
        margin-bottom: 0;
    }
</style>
