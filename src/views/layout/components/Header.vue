<template>
    <div class="header">
        <div class="header-left">
            <showAside @toggleClick="toggleClick"/> 
        </div>

        <div class="header-right"></div>
    </div>
</template>

<script>

import ShowAside from './showAside'

export default {
    data() {
        return {

        }
    },
    components: {
        ShowAside
    },
    methods: {
        toggleClick(val) {
            console.log(val,'子组件');
        }
    }
}
</script>

<style scoped>
.header {
    height: 50px;
    line-height: 50px;
    /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04); */
    border-bottom: 2px solid #f0f0f0;
}
</style>