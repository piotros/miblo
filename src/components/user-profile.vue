<template>
    <div class="user-profile">
        <div v-if="$loadingRouteData">
            <loader></loader>
        </div>

        <div v-if="!$loadingRouteData" class="user-data">
            <user-card :user="user" class="user-card"></user-card>
            <entries-list :entries="entries" class="user-entries"></entries-list>
        </div>
    </div>
</template>

<style lang="sass" scoped rel="stylesheet/scss">
    .user-data {
        display: flex;
    }

    .user-card {
        width: 300px;
        margin-right: 20px;
    }

    .user-entries {
        flex-grow: 1;
    }
</style>

<script type="text/babel">
    import usersApi from 'api/users.js'
    import Loader   from 'components/loader.vue'
    import UserCard from 'components/user-card.vue'
    import EntriesList from 'components/entries-list.vue'

    export default{
        components: {
            UserCard,
            EntriesList,
            Loader
        },

        vuex: {
            getters: {
                currentUser : store => store.user.profile,
                selectedUser: store => store.selectedUser,
                entries     : store => store.selectedUser.entries.all
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

                    success: ({data}) => {
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
