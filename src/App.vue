<template>
    <div id="main" @touchstart="e => e.preventDefault()">
        <Board />
    </div>
</template>

<script>

import Board from './Component/Board';
import core from './core';

export default {
    components: { Board }
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