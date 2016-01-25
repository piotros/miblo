<template>
    <article class="entry">
        <h1>{{title}}</h1>

        <div>{{content}}</div>
    </article>
</template>

<script type="text/babel">
    export default {
        data(){
            return {
                title  : 'Entry title',
                content: 'Lorem ipsum'
            }
        }
    }
</script>

<style lang="sass" src="./entry.scss">
    @import 'settings.scss';
    @import '~foundation-sites/scss/components/callout';

    .entry {
    @include callout;

    h1 {
        color: red;
    }

    }
</style>
