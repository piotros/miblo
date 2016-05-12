<template>
    <modal :show="loginModalOpened" :close-function="closeLoginModal" title="Login">
        <div slot="body">
            <login-panel></login-panel>
        </div>
    </modal>
</template>

<script type="text/babel">
    import {closeLoginModal}    from 'vuex/actions'
    import Modal                from 'components/modal.vue'
    import LoginPanel           from 'components/login-panel.vue'

    export default {

        components: {
            Modal,
            LoginPanel
        },

        vuex: {
            getters: {
                loginModalOpened: store => store.ui.loginModalOpened
            },

            actions: {
                closeLoginModal
            }
        }

    }
</script>
