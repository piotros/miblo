<template>
    <nav class="navigation">
        <ul class="main-menu">
            <li><a v-link="{ path: '/' }">miblo</a></li>

            <template v-if="isAuthenticated">
                <li><a v-link="{ path: '/tags' }">Tags</a></li>
                <li><a v-link="{ path: '/watched' }">Watched</a></li>
                <li><a v-link="{ path: '/notifications' }">Notifications</a></li>
            </template>
        </ul>

        <ul class="secondary-menu">
            <template v-if="isAuthenticated">
                <li>
                    <a v-link="{ name: 'user', params: { nickname: currentUser.nickname } }">
                        {{currentUser.first_name}} {{currentUser.last_name}}
                    </a>
                </li>
                <li class="avatar">
                    <img :src="currentUser.avatar" alt="Avatar"/>
                </li>
                <li><a @click.prevent="openEntryAddModal()">Add entry</a></li>
                <li><a @click.prevent="logoutUser()">Logout</a></li>
            </template>
            <template v-else>
                <li><a @click.prevent="openSignupModal()">Sign up</a></li>
                <li><a @click.prevent="openLoginModal()">Login</a></li>
            </template>
        </ul>
    </nav>
</template>

<script type="text/babel">
    import {
            openEntryAddModal,
            openSignupModal,
            openLoginModal,
            logout
    } from 'vuex/actions'

    export default {
        vuex: {
            getters: {
                currentUser    : store => store.user.profile,
                isAuthenticated: store => store.user.isAuthenticated
            },

            actions: {
                openEntryAddModal,
                openSignupModal,
                openLoginModal,
                logout
            }
        },

        methods: {
            logoutUser() {
                this.logout()
                this.$route.router.go('/')
            }
        }
    }
</script>

<style lang="sass" scoped rel="stylesheet/scss">
    @import "settings";
    @import "~foundation-sites/scss/components/top-bar";
    @import "~foundation-sites/scss/components/menu";

    .navigation {
        @include top-bar-container;
    }

    .main-menu, .secondary-menu {
        @include menu-base;
    }

    @include breakpoint(medium) {
        .main-menu {
            float: left;
        }

        .secondary-menu {
            float: right
        }
    }
</style>
