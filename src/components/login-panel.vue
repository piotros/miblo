<template>
    <div class="login-panel">
        <social-auth></social-auth>
        <or-divider></or-divider>
        <label>Login</label><input type="text">
        <label>Password</label><input type="password">
        <button @click="login" class="login-button">Login</button>
    </div>
</template>

<script type="text/babel">
    import {focus}              from 'vue-focus'
    import SocialAuth           from 'components/social-auth.vue'
    import OrDivider            from 'components/or-divider.vue'

    export default {

        components: {
            SocialAuth,
            OrDivider
        },

        directives: {
            focus
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
