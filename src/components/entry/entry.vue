<template>
    <article class="entry">
        <h1>{{entry.title}}</h1>
        <div>{{entry.content}}</div>
    </article>
</template>

<script>
    export default {
        props: ['entry']
    }
</script>

<style lang="sass" src="./_entry.scss"></style>
