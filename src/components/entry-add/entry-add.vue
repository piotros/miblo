<template>
    <div class="modal-mask" v-show="show" transition="modal">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    Add entry
                    <i class="close" @click="show = false"></i>
                </div>
                <div class="modal-body">
                    <input v-model="entry.title">
                    <textarea v-model="entry.content"
                              maxlength="{{entryMaxLength}}"
                              @keydown.enter.prevent="add"
                              @keydown.esc.prevent="show = false"
                              v-focus="show">
                    </textarea>
                </div>
                <div class="modal-footer">
                    {{availableEntryChars}}
                    <button @click="add" class="entry-add-button">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import store     from 'store'
    import { focus } from 'vue-focus'

    let getEmptyEntry = function () {
        return {
            title  : '',
            content: ''
        }
    }

    export default {
        props: ['show'],

        directives: {focus: focus},

        data() {
            return {
                entry         : getEmptyEntry(),
                entryMaxLength: 160
            }
        },

        computed: {
            availableEntryChars() {
                return this.entryMaxLength - this.entry.content.length
            }
        },

        methods: {
            add() {
                store.actions.addEntry(this.entry)

                this.show = false

                this.entry = getEmptyEntry()
            }
        }
    }
</script>

<style lang="sass" scoped src="./_entry-add.scss"></style>