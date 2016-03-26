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

<style lang="sass" scoped rel="stylesheet/scss">
    @import 'settings';

    $stat-height: 40px;

    .user-card {
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
        background-color: white;
        display: flex;
        flex-wrap: wrap;
    }

    .personal-info {
        width: 100%;
    }

    .stats {
        flex-grow: 1;
    }

    .stat {
        height: $stat-height;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #EFEFEF;
    }

    .stat-title {
        display: flex;
        align-items: center;
        padding-left: 10px;
    }

    .stat-counter {
        display: flex;
        align-items: center;
        background-color: #EFEFEF;

        &:before {
            @include css-triangle($stat-height / 2, #EFEFEF, 'left');
            margin-left: -$stat-height / 2;
            display: inline-block;
        }

    }
</style>

<script type="text/babel">
    export default{
        props: ['user']
    }
</script>