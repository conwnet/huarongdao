<template>
    <div id="main" @touchstart="e => e.preventDefault()">
        <Menu />
    </div>
</template>

<script>

import Board from './Component/Board';
import Menu from './Component/Menu';

export default {
    components: { Board, Menu }
}

</script>

<style lang="less">

    #main {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        user-select: none;
    }

</style>
