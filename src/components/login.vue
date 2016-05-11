<template>
    <modal :show="loginModalOpened" :close-function="closeLoginModal" title="Login">
        <div slot="body">
            <a href="/auth/facebook" class="facebook-login-button">
                <i class="facebook"></i>
                Facebook
            </a>
            <a href="/auth/google" class="google-login-button">
                <i class="google"></i>
                Google
            </a>
            <div class="or-text">or</div>
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
    @import '~foundation-sites/scss/forms/forms';

    .login-button {
        @include button;
        margin-bottom: 0;
    }

    .facebook-login-button {
        @include button(
            $background: #4E69A2,
            $background-hover: #3C5488
        );
    }

    .google-login-button {
        @include button(
            $background: #E0492F,
            $background-hover: #CB432B
        )
    }

    i {
        margin-right: 10px;
    }

    .or-text {
        display: flex;
        justify-content: space-around;
        align-items: center;

        &:before,
        &:after {
            content: '';
            display: inline-block;
            border-top: 1px solid lightgray;
            width: 30%;
        }
    }

    input {
        @include form-element();
    }

    @include icon(facebook, $fa-var-facebook)
    @include icon(google, $fa-var-google)
</style>
