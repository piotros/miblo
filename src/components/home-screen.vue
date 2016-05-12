<template>
    <div class="home-screen">
        <div class="welcome">
            <h1>Welcome to miblo.</h1>
        </div>
        <div class="join-us">
            Signup
            <signup-panel></signup-panel>
            Login
            <login-panel></login-panel>
        </div>
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
    @import '~foundation-sites/scss/grid/grid';

    .home-screen {
        @include grid-row;
    }

    .welcome {
        @include grid-column(7);
    }

    .join-us {
        @include grid-column(5);
    }

    .login-panel,
    .signup-panel {
        @include callout;
    }
</style>
