<template>
    <div id="main">
        <Ground :unitSize="unitSize" style="position: absolute; top: 0; left: 0;" />
        <Board :unitSize="unitSize" :layout="layout"
            :style="{ position: 'absolute', top: unitSize * 0.8, left: unitSize * 0.5 }" />
        <div :style="{ top: `${(unitSize * 0.8 - 34) / 2}px`, left: `${(unitSize * 5 - 124) / 2}px` }"
            class="select-btn" @click="showLevel = true;">{{ title }}</div>
        <Level :unitSize="unitSize" :show="showLevel" :handleSelect="handleSelect" />
    </div>
</template>

<script>

import Ground from './Component/Ground.vue';
import Board from './Component/Board.vue';
import Level from './Component/Level.vue';

export default {
    components: { Ground, Board, Level },
    data () {
        return {
            unitSize: window.innerWidth / 5,
            layout: '22222222222222222222',
            title: '选择关卡',
            showLevel: false
        }
    },
    methods: {
        handleSelect (level) {
            this.layout = level.layout;
            this.title = level.title;
            this.showLevel = false;
        }
    },
    created () {
        location.hash && (this.layout = location.hash.slice(1)) && (this.title = '自定义');
        window.onresize = () => this.unitSize = window.innerWidth / 5;
        window.onhashchange = () => location.hash &&
            (this.layout = location.hash.slice(1)) && (this.title = '自定义');

    }
}

</script>

<style lang="less">

    #main {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        .select-btn {
            position: absolute;
            background-color: #ccc;
            border: 2px solid #aaa;
            border-radius: 5px;
            min-width: 120px;
            line-height: 30px;
            text-align: center;
            cursor: pointer;

            &:hover {
                background-color: #eee;
            }

            &:active {
                color: #09c;
            }
        }
    }

</style>
