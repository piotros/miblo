<template>
    <div class="user-profile">
        <div v-if="$loadingRouteData">
            <loader></loader>
        </div>

        <div v-if="!$loadingRouteData">
            <user-card :user="user"></user-card>

            <h1>Entries</h1>
            User entries list will be here
        </div>
    </div>
</template>

<script type="text/babel">
    import usersApi from 'api/users.js'
    import Loader   from 'components/loader/loader.vue'
    import UserCard from 'components/user-card/user-card.vue'

    export default{
        components: {
            UserCard,
            Loader
        },

        vuex: {
            getters: {
                currentUser: store => store.user
            }
        },

        data() {
            return {
                user: {}
            }
        },

        route: {
            data(transition) {
                if (this.$route.params.nickname === this.currentUser.nickname) {
                    transition.next({
                        user: this.currentUser
                    })

                    return
                }

                usersApi.getUser({
                    nickname: this.$route.params.nickname,

                    success: ({ data }) => {
                        transition.next({
                            user: data
                        })
                    },

                    error: () => {
                        this.$route.router.go('/404')
                    }
                })
            }
        }
    }
</script>