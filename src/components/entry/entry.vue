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
                <i class="like" @click="likeEntry(entry)"></i> {{entry.likes}}
                <i class="share"></i> {{entry.shares}}
                <i class="comment"></i> {{entry.comments}}
            </section>
        </section>
    </article>
</template>

<script>
    import { likeEntry } from 'vuex/actions'

    export default {
        props: ['entry'],

        vuex: {
            actions: {
                likeEntry
            }
        }
    }
</script>

<style lang="sass" scoped src="./_entry.scss"></style>
