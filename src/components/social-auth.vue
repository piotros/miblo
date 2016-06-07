<template>
    <div class="social-auth">
        <a href="/auth/facebook" class="facebook-login-button">
            <i class="facebook"></i>
            Facebook
        </a>
        <a href="/auth/google" class="google-login-button">
            <i class="google"></i>
            Google
        </a>
    </div>
</template>

<style lang="sass" scoped rel="stylesheet/scss">
    @import 'settings';
    @import '~foundation-sites/scss/components/button';

    .social-auth {
        display: flex;
        justify-content: space-around;
    }

    a {
        width: 48%;
    }

    .facebook-login-button {
        @include button(
                $background: #4E69A2,
                $background-hover: #3C5488
        );
    }

    .google-login-button {
        @include button(
                $background: #E0492F,
                $background-hover: #CB432B
        )
    }

    i {
        margin-right: 10px;
    }

    @include icon(facebook, $fa-var-facebook)
    @include icon(google, $fa-var-google)
</style>
