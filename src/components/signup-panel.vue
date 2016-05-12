<template>
    <div class="signup-panel">
        <social-auth></social-auth>
        <or-divider></or-divider>
        <label>Full name</label><input type="text">
        <label>E-mail</label><input type="text">
        <label>Password</label><input type="password">
        <button @click="signup" class="signup-button">Sign up</button>
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
            signup() {

            }
        }

    }
</script>

<style lang="sass" scoped rel="stylesheet/scss">
    @import 'settings';
    @import '~foundation-sites/scss/components/button';
    @import '~foundation-sites/scss/forms/forms';

    .signup-button {
        @include button;
        margin-bottom: 0;
    }

    input {
        @include form-element;
    }
</style>
