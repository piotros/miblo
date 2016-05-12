<template>
    <modal :show="signupModalOpened" :close-function="closeSignupModal" title="Sign up">
        <div slot="body">
            <social-auth></social-auth>
            <or-divider></or-divider>
        </div>
        <div slot="footer">
            <button @click="signup" class="signup-button">Sign up</button>
        </div>
    </modal>
</template>

<script type="text/babel">
    import {closeSignupModal}   from 'vuex/actions'
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
                signupModalOpened: store => store.ui.signupModalOpened
            },

            actions: {
                closeSignupModal
            }
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

    .signup-button {
        @include button;
        margin-bottom: 0;
    }
</style>
