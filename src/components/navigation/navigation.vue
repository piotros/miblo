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
            <li><a @click.prevent="addEntry = true">Add entry</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: ['addEntry'],

        vuex: {
            getters: {
                currentUser: store => store.user
            }
        }
    }
</script>

<style lang="sass" scoped src="./_navigation.scss"></style>
