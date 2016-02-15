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
                        <input v-model="entry.title">
                        <input v-model="entry.content">

                        <button @click="add">add</button>
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
    import entriesService from 'services/entries.js'

    export default {
        props: ['show'],

        data: {
            entry: {
                title  : '',
                content: ''
            }
        },

        methods: {
            add() {
                entriesService.add({
                    title  : this.entry.title,
                    content: this.entry.content
                })

                this.show = false

                this.entry = {}
            }
        }
    }
</script>

<style lang="sass" scoped src="./_entry-add.scss"></style>