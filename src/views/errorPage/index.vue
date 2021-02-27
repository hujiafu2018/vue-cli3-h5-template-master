<template>
    <div class="errror-page">
        <div>
            <svg-icon icon="icon-default"></svg-icon>
            <span>{{error}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'Error',
    data() {
        return {
            error:404
        }
    }
}
</script>
<style lang="scss" scoped>
.errror-page {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $color-border-ddd;
        font-size: 2.5rem;
        span {
            margin-top: .2rem;
            font-size: .3rem;
            color: $black-light-5;
        }
    }
}
</style>