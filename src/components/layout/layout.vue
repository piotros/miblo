<template>
    <div>
        <navigation></navigation>
        <router-view></router-view>
        <footer-view></footer-view>
    </div>
</template>

<style lang="sass">
    @import "settings";
    @import "~foundation-sites/scss/vendor/normalize";
    @import "~foundation-sites/scss/typography/base";

    @include foundation-typography-base;
</style>

<script>
    import Navigation from 'components/navigation/navigation.vue'
    import FooterView from 'components/footer/footer.vue'

    export default {
        components: {
            Navigation,
            FooterView
        }
    }
</script>