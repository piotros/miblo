<template>
    <div class="modal-mask" v-show="entryAddModalOpened" transition="modal">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    Add entry
                    <i class="close" @click="closeEntryAddModal()"></i>
                </div>
                <div class="modal-body">
                    <textarea v-model="entry.content"
                              maxlength="{{entryMaxLength}}"
                              @keydown.enter.prevent="add"
                              @keydown.esc.prevent="closeEntryAddModal()"
                              v-focus="entryAddModalOpened">
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

<script type="text/babel">
    import {addEntry, closeEntryAddModal}    from 'vuex/actions'
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
    @import '~foundation-sites/scss/components/callout';
    @import '~foundation-sites/scss/forms/forms';

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
        width: 300px;
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

    .modal-footer {
        @include callout;
    }

    .entry-add-button {
        @include button;
    }

    textarea {
        @include form-element;
    }

    @include icon(close, $fa-var-close);
</style>
