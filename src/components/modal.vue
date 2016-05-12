<template>
    <div class="modal-mask" v-show="show" transition="modal">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header">
                        {{title || 'Default modal title'}}
                        <i class="close" @click="closeFunction()"></i>
                    </slot>
                </div>
                <div class="modal-body">
                    <slot name="body">
                        Default modal body
                    </slot>
                </div>
                <div class="modal-footer"><slot name="footer"></slot></div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        props: ['show', 'closeFunction', 'title']
    }
</script>

<style lang="sass" scoped rel="stylesheet/scss">
    @import 'settings';
    @import '~foundation-sites/scss/components/callout';
    @import '~foundation-sites/scss/forms/forms';

    $callout-margin: 0;

    .modal-mask {
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 400px;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
    }

    .modal-enter, .modal-leave {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave .modal-container {
        transform: scale(1.1);
    }

    .modal-header {
        @include callout;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .modal-body {
        @include callout;
    }

    .modal-footer {
        @include callout;

        &:empty {
            display: none;
        }
    }

    @include icon(close, $fa-var-close);
</style>
