<template>
    <div class="user-profile">
        <user-card :user="user"></user-card>

        <h1>Entries</h1>
        User entries list will be here
    </div>
</template>

<script>
    import UserCard from 'components/user-card/user-card.vue'

    export default{
        components: {
            UserCard
        },

        vuex: {
            getters: {
                currentUser: store => store.user
            }
        },

        computed: {
            user() {
                if (this.$route.params.nickname === this.currentUser.nickname) {
                    return this.currentUser
                } else {
                    // get user by nickname
                }
            }
        }
    }
</script>