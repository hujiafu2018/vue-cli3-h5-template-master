<template>
      <Sticky>
        <Nav-Bar
        :title="$route.name"
        left-arrow
        @click-left="onClickLeft"
        >
        </Nav-Bar>
    </Sticky>
</template>

<script>
import { Sticky, NavBar } from 'vant';

export default {
    name: 'TopBar',
    components: {
        Sticky,
        NavBar
    },
    methods: {
        onClickLeft() {
            history.go(-1)
        }
    }
}
</script>

<style>

</style>