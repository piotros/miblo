<template>
    <div class="user-profile">
        <user-card :user="user"></user-card>

        <h1>Entries</h1>
        User entries list will be here
    </div>
</template>

<script>
    import store from 'store'
    import UserCard from 'components/user-card/user-card.vue'

    export default{
        components: {
            UserCard
        },

        computed: {
            user() {
                if (this.$route.params.nickname === store.state.user.nickname) {
                    return store.state.user
                } else {
                    // get user by nickname
                }
            }
        }
    }
</script>