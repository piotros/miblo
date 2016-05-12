<template>
    <nav class="navigation">
        <ul class="main-menu" v-if="isAuthenticated">
            <li><a v-link="{ path: '/entries' }">Entries</a></li>
            <li><a v-link="{ path: '/tags' }">Tags</a></li>
            <li><a v-link="{ path: '/watched' }">Watched</a></li>
        </ul>
        <ul class="main-menu" v-if="!isAuthenticated">
            <li><a v-link="{ path: '/' }">miblo</a></li>
        </ul>
        <ul class="secondary-menu" v-if="isAuthenticated">
            <li>
                <a v-link="{ name: 'user', params: { nickname: currentUser.nickname } }">
                    {{currentUser.name}} {{currentUser.surname}}
                </a>
            </li>
            <li class="avatar">
                <img v-bind:src="currentUser.avatar" alt="Avatar" />
            </li>
            <li><a @click.prevent="openEntryAddModal()">Add entry</a></li>
            <li><a @click.prevent="logout()">Logout</a></li>
        </ul>
        <ul class="secondary-menu" v-if="!isAuthenticated">
            <li><a @click.prevent="openSignupModal()">Sign up</a></li>
            <li><a @click.prevent="openLoginModal()">Login</a></li>
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
                currentUser: store => store.user.profile,
                isAuthenticated: store => store.user.isAuthenticated
            },

            actions: {
                openEntryAddModal,
                openSignupModal,
                openLoginModal,
                logout
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
