<template>
    <modal :show="true">
        <div slot="header">
            Almost done!
        </div>
        <div slot="body">
            <template v-if="!nickname">
                <label>Nickname</label><input type="text">
            </template>
            <label>Full name</label><input type="text">
        </div>
        <div slot="footer">
            <button @click="complete" class="complete-profile-button">Complete profile</button>
        </div>
    </modal>
</template>

<style lang="sass" scoped rel="stylesheet/scss">
    @import 'settings';
    @import '~foundation-sites/scss/components/button';
    @import '~foundation-sites/scss/forms/forms';

    .complete-profile-button {
        @include button;
        margin-bottom: 0;
    }

    input {
        @include form-element;
    }

</style>

<script type="text/babel">
    import Modal from 'components/modal.vue'

    export default {

        components: {
            Modal
        },

        vuex: {
            getters: {
                nickname: store => store.user.profile.nickname
            }
        },

        methods: {
            complete() {
            }
        }
    }
</script>