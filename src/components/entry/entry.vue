<template>
    <article class="entry">
        <section class="user-info">
            <img class="avatar" src="http://placehold.it/80x80">
        </section>
        <section class="entry-data">
            <h4>{{entry.title}}</h4>
            <div>{{entry.content}}</div>
            <section class="actions">
                <i class="icon like"></i>
                <i class="icon share"></i>
                <i class="icon comment"></i>
            </section>
        </section>
    </article>
</template>

<script>
    export default {
        props: ['entry']
    }
</script>

<style lang="sass" scoped src="./_entry.scss"></style>
