<template>
    <article class="entry" transition="bounce">
        <section class="user-info">
            <img class="avatar" src="http://placehold.it/80x80">
        </section>
        <section class="entry-data">
            <a v-link="{ name: 'user', params: { nickname: entry.authorNickname } }">
                <strong>{{entry.authorName}}</strong> @{{entry.authorNickname}}
            </a>
            <div>{{entry.content}}</div>
            <section class="actions">
                <i class="like" @click="like()"></i> {{entry.likes}}
                <i class="share"></i> {{entry.shares}}
                <i class="comment"></i> {{entry.comments}}
            </section>
        </section>
    </article>
</template>

<script>
    import store from 'store'

    export default {
        props: ['entry'],

        methods: {
            like() {
                store.actions.likeEntry(this.entry)
            }
        }
    }
</script>

<style lang="sass" scoped src="./_entry.scss"></style>
