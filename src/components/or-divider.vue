<template>
    <div class="or-text">or</div>
</template>

<style lang="sass" scoped rel="stylesheet/scss">
    .or-text {
        display: flex;
        justify-content: space-around;
        align-items: center;

        &:before,
        &:after {
            content: '';
            display: inline-block;
            border-top: 1px solid lightgray;
            width: 30%;
        }
    }
</style>
