<template>
    <modal :show="entryAddModalOpened" :close-function="closeEntryAddModal" title="Add entry">
        <div slot="body">
            <textarea v-model="entry.content"
                      maxlength="{{entryMaxLength}}"
                      @keydown.enter.prevent="add"
                      v-focus="entryAddModalOpened">
            </textarea>
        </div>
        <div slot="footer">
            {{availableEntryChars}}
            <button @click="add" class="entry-add-button">Add</button>
        </div>
    </modal>
</template>

<script type="text/babel">
    import {addEntry, closeEntryAddModal}    from 'vuex/actions'
    import Modal                             from 'components/modal.vue'
    import {focus}       from 'vue-focus'

    let getEmptyEntry = function () {
        return {
            content: ''
        }
    }

    export default {
        directives: {
            focus
        },

        components: {
            Modal
        },

        vuex: {
            getters: {
                entryAddModalOpened: store => store.ui.entryAddModalOpened
            },

            actions: {
                addEntry,
                closeEntryAddModal
            }
        },

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
                this.addEntry(this.entry)

                this.closeEntryAddModal()

                this.entry = getEmptyEntry()
            }
        }
    }
</script>

<style lang="sass" scoped rel="stylesheet/scss">
    @import 'settings';
    @import '~foundation-sites/scss/components/button';
    @import '~foundation-sites/scss/forms/forms';

    .entry-add-button {
        @include button;
        margin-bottom: 0;
    }

    textarea {
        @include form-element;
    }
</style>
