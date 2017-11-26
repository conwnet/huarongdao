<template>
    <div id="main" @touchstart="e => e.preventDefault()">
        <svg :width="unitSize * 5" :height="unitSize * 6">
            <Grid
                v-for="(t, i) in state"
                v-if="t !== '1' && t != '0'"
                :type="t"
                :position="i"
                :key="`grid-${i}`"
                :unitSize="unitSize"
                :startX="(i % 4 + 0.5) * unitSize"
                :startY="(Math.floor(i / 4) + 0.5) * unitSize"
                :handleMove="handleMove"
            />
            <use xlink:href="#draging" />
        </svg>
        <button @click="getSolve">查看解法</button>
    </div>
</template>

<script>

import Grid from './Component/Grid.vue';
import core from './core';

export default {
    components: { Grid },
    data () {
        return {
            state: '35131111341312212002',
            unitSize: 80 // window.innerWidth / 5
        }
    },
    methods: {
        handleMove (direction, position) {
            let nextState = false;
            switch (direction) {
                case 1: nextState = core.moveUp(this.state, position); break;
                case 2: nextState = core.moveRight(this.state, position); break;
                case 3: nextState = core.moveDown(this.state, position); break;
                case 4: nextState = core.moveLeft(this.state, position); break;
            }
            nextState && (this.state = nextState);
        },
        getSolve () {
            let states = core.getSolve(this.state);
            if (states) {
                let _this = this;
                let inv = setInterval(() => {
                    _this.state = states.pop();
                    if (!states.length) clearInterval(inv);
                }, 1000);
            }
        }
    }
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

        svg {
            margin: 0 auto;
        }
    }
    

</style>