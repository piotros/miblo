<template>
    <div class="modal-mask" v-show="show" transition="modal">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header">
                        default header
                    </slot>
                    <i class="close" @click="show = false"></i>
                </div>
                <div class="modal-body">
                    <slot name="body">
                        default body<br>
                    </slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        default footer
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['show']
    }
</script>

<style lang="sass" scoped src="./_entry-add.scss"></style>