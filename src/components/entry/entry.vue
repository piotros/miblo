<template>
    <article class="entry" transition="bounce">
        <section class="user-info">
            <img class="avatar" src="http://placehold.it/80x80">
        </section>
        <section class="entry-data">
            <h4>{{entry.title}}</h4>
            <div>{{entry.content}}</div>
            <section class="actions">
                <i class="like"></i>
                <i class="share"></i>
                <i class="comment"></i>
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
