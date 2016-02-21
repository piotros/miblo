<template>
    <section class="user-card">
        <img class="avatar" src="http://placehold.it/80x80">
        @{{nickname}}
        {{name}} {{surname}}
        Entries: {{entriesCount}}
        Following: {{following}}
        Followers: {{followers}}
    </section>
</template>

<style lang="sass" scoped src="./_user-card.scss"></style>

<script>
    export default{
        computed: {
            entriesCount() {
                return 1
            },

            following() {
                return 2
            },

            followers() {
                return 3
            },

            name()  {
                return 'Stefan'
            },

            surname() {
                return 'Nowak'
            },

            nickname(){
                return 'testuser'
            }
        }
    }
</script>