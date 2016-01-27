<template>
    <nav class="navigation">
        <ul class="main-menu">
            <li><a v-link="{ path: '/entries' }">Entries</a></li>
            <li><a v-link="{ path: '/tags' }">Tags</a></li>
            <li><a v-link="{ path: '/watched' }">Watched</a></li>
        </ul>
    </nav>
</template>

<style lang="sass" scoped src="./_navigation.scss"></style>
