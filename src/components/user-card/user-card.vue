<template>
    <section class="user-card">
        <a v-link="{ name: 'user', params: { nickname: nickname } }">
            <img class="avatar" src="http://placehold.it/120x120">
        </a>
        <section class="stats">
            <div class="stat">
                <span class="stat-title">Entries</span>
                <span class="stat-counter">{{entriesCount}}</span>
            </div>
            <div class="stat">
                <span class="stat-title">Following</span>
                <span class="stat-counter">{{following}}</span>
            </div>
            <div class="stat">
                <span class="stat-title">Followers</span>
                <span class="stat-counter">{{followers}}</span>
            </div>
        </section>
        <a v-link="{ name: 'user', params: { nickname: nickname } }" class="personal-info">
            <div>{{name}} {{surname}}</div>
            <div>@{{nickname}}</div>
        </a>
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