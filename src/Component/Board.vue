<template>
    <svg :width="width" :height="height" @touchstart="e => e.preventDefault()">
        <Grid
            v-for="(t, i) in state"
            v-if="t !== '1' && t != '0'"
            :type="t"
            :position="i"
            :key="`grid-${i}`"
            :success="t === '5' && success"
            :unitSize="unitSize"
            :startX="(i % 4) * unitSize"
            :startY="Math.floor(i / 4) * unitSize"
            :handleMove="handleMove"
        />
        <rect class="tip" :class="{ success, thinking }" 
            :x="unitSize * 1.2" :y="unitSize * 5.05"
            :width="unitSize * 1.6" :height="unitSize * 0.4"
            @click="help" @touchstart="help" />
        <use xlink:href="#draging" />
    </svg>
</template>

<script>

import Grid from './Grid.vue';
import core from '../core.js'

export default {
    components: { Grid },
    props: [ 'unitSize', 'layout' ],
    data () { 
        return {
            state: this.layout,
            answer: [], 
            thinking: false
        };
    },
    computed: {
        width () { return this.unitSize * 4; },
        height () { return this.unitSize * 5.5; },
        success () { return this.state[13] === '5'; }
    },
    watch: {
        layout (newValue) { this.state = newValue; this.answer = []; }
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
            nextState && (this.state = nextState) && (this.answer = []);
        },
        help () {
            this.thinking = true;
            setTimeout(() => {
                if (!this.answer.length)
                    this.answer = core.getSolve(this.state);
                if (this.answer.length)
                    this.state = this.answer.pop();
                this.thinking = false;
            }, 10);
        }
    }
}

</script>

<style lang="less">

    svg {
        margin: 0 auto;

        .tip {
            fill: #0a0;

            &.thinking {
                fill: #f44;
            }

            &.success {
                fill: #fff;
            }
        }
    }

</style>