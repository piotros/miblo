<template>
    <div class="home-screen">
        <h1>Welcome to miblo.</h1>
        Signup
        <signup-panel></signup-panel>
        Login
        <login-panel></login-panel>
    </div>
</template>

<script type="text/babel">
    import SignupPanel from 'components/signup-panel.vue'
    import LoginPanel  from 'components/login-panel.vue'

    export default {
        components: {
            SignupPanel,
            LoginPanel
        }
    }
</script>

<style lang="sass" scoped rel="stylesheet/scss">
    @import 'settings';
    @import '~foundation-sites/scss/components/callout';

    .login-panel,
    .signup-panel {
        @include callout;
    }
</style>
