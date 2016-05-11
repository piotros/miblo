<template>
    <modal :show="loginModalOpened" :close-function="closeLoginModal" title="Login">
        <div slot="body">
            <social-auth></social-auth>
            <or-divider></or-divider>
            <label>Login</label><input type="text">
            <label>Password</label><input type="password">
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
    import SocialAuth           from 'components/social-auth.vue'
    import OrDivider            from 'components/or-divider.vue'

    export default {
        directives: {
            focus
        },

        components: {
            Modal,
            SocialAuth,
            OrDivider
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
    @import '~foundation-sites/scss/forms/forms';

    .login-button {
        @include button;
        margin-bottom: 0;
    }

    input {
        @include form-element;
    }
</style>
