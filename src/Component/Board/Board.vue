<template>
    <svg :width="unitSize * 5" :height="unitSize * 6">
        <rect
            x="0"
            y="0"
            :width="unitSize * 5"
            :height="unitSize * 6"
            fill="#fff"
            stroke="gray"
            :stroke-width="unitSize - 5"
        />
        <rect
            :x="unitSize * 1.5"
            :y="unitSize * 5.5"
            :width="unitSize * 2"
            :height="unitSize * 0.5"
            fill="#fff"
        />
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
</template>

<script>

import Grid from './Grid';
import core from './core.js'

export default {
    components: { Grid },
    data () {
        return {
            state: '35131111341312212002',
            unitSize: Math.min(window.innerWidth / 5,   )
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

    svg {
        margin: 0 auto;
    }

</style>