<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
export default {
    name: 'icon-svg',
    props:{
        icon:{
            type:String,
            required:true
        }
    },
    computed:{
        iconName() {
            return `#icon-${this.icon}`
        }
    }
}
</script>

<style style="scss" scoped> 
    .svg-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor; /*将文本颜色传递给svg*/
        overflow: hidden;
    }
</style>