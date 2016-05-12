<template>
    <modal :show="signupModalOpened" :close-function="closeSignupModal" title="Sign up">
        <div slot="body">
            <signup-panel></signup-panel>
        </div>
    </modal>
</template>

<script type="text/babel">
    import {closeSignupModal}   from 'vuex/actions'
    import Modal                from 'components/modal.vue'
    import SignupPanel          from 'components/signup-panel.vue'

    export default {

        components: {
            Modal,
            SignupPanel
        },

        vuex: {
            getters: {
                signupModalOpened: store => store.ui.signupModalOpened
            },

            actions: {
                closeSignupModal
            }
        }

    }
</script>
