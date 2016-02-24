<template>
    <section class="user-card">
        <a v-link="{ name: 'user', params: { nickname: user.nickname } }">
            <img class="avatar" src="http://placehold.it/120x120">
        </a>
        <section class="stats">
            <div class="stat">
                <span class="stat-title">Entries</span>
                <span class="stat-counter">{{user.entriesCount}}</span>
            </div>
            <div class="stat">
                <span class="stat-title">Following</span>
                <span class="stat-counter">{{user.following}}</span>
            </div>
            <div class="stat">
                <span class="stat-title">Followers</span>
                <span class="stat-counter">{{user.followers}}</span>
            </div>
        </section>
        <a v-link="{ name: 'user', params: { nickname: user.nickname } }" class="personal-info">
            <div>{{user.name}} {{user.surname}}</div>
            <div>@{{user.nickname}}</div>
        </a>
    </section>
</template>

<style lang="sass" scoped src="./_user-card.scss"></style>

<script>
    export default{
        props: ['user']
    }
</script>