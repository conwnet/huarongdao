<template>
    <svg class="ground" :width="width" :height="height">
        <rect x="0" y="0" :width="width" :height="height" />
        <polygon :points="points" />
    </svg>
</template>

<script>

export default {
    props: [ 'unitSize' ],
    computed: {
        width () { return this.unitSize * 5; },
        height () { return this.unitSize * 6.3; },
        points () {
            let unitSize = this.unitSize;
            return [
                `${unitSize * 0.5},${unitSize * 0.8}`,
                `${unitSize * 0.5},${unitSize * 5.8}`,
                `${unitSize * 1.5},${unitSize * 5.8}`,
                `${unitSize * 1.5},${unitSize * 6.3}`,
                `${unitSize * 3.5},${unitSize * 6.3}`,
                `${unitSize * 3.5},${unitSize * 5.8}`,
                `${unitSize * 4.5},${unitSize * 5.8}`,
                `${unitSize * 4.5},${unitSize * 0.8}`,
                `${unitSize * 0.5},${unitSize * 0.8}`,
            ].join(' ');
        }
    }
}

</script>

<style lang="less">

    .ground {
        rect { fill: #888; }
        polygon { fill: #fff; }
    }

</style>