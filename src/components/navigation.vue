<template>
    <nav class="navigation">
        <ul class="main-menu">
            <li><a v-link="{ path: '/entries' }">Entries</a></li>
            <li><a v-link="{ path: '/tags' }">Tags</a></li>
            <li><a v-link="{ path: '/watched' }">Watched</a></li>
        </ul>
        <ul class="secondary-menu">
            <li>
                <a v-link="{ name: 'user', params: { nickname: currentUser.nickname } }">
                    {{currentUser.name}} {{currentUser.surname}}
                </a>
            </li>
            <li><a @click.prevent="openEntryAddModal()">Add entry</a></li>
        </ul>
    </nav>
</template>

<script type="text/babel">
    import {openEntryAddModal}    from 'vuex/actions'

    export default {
        vuex: {
            getters: {
                currentUser: store => store.user
            },

            actions: {
                openEntryAddModal
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
