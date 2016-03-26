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
    import {likeEntry} from 'vuex/actions'

    export default {
        props: ['entry'],

        vuex: {
            actions: {
                likeEntry
            }
        }
    }
</script>

<style lang="sass" scoped rel="stylesheet/scss">
    @import 'settings';
    @import '~foundation-sites/scss/components/callout';
    @import '~foundation-sites/scss/components/media-object';

    $callout-border: none;

    .entry {
        @include callout;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
    }

    .entry-data {
        @include media-object-section;
    }

    .user-info {
        @include media-object-section;
    }

    .bounce-transition {
        opacity: 1;
        transform: none;
        transition: all 0.5s cubic-bezier(.36, -0.64, .34, 1.76);
    }

    .bounce-enter, .bounce-leave {
        opacity: 0;
        transform: rotateX(-90deg);
        transition: all 0.5s cubic-bezier(.36, -0.64, .34, 1.76);
    }

    @include icon(like, $fa-var-thumbs-up)
    @include icon(share, $fa-var-retweet)
    @include icon(comment, $fa-var-comment)
</style>
