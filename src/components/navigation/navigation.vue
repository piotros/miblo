<template>
    <nav class="navigation">
        <div class="top-bar-left">
            <li><a v-link="{ path: '/bar' }">Bar</a></li>
            <li><a v-link="{ path: '/tags' }">Tags</a></li>
        </div>
    </nav>
</template>

<style lang="sass" src="./navigation.scss"></style>
