<template>
    <rect
        :id="draging && 'draging'"
        :x="x"
        :y="y"
        :width="width"
        :height="height"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @mousedown="handleMouseDown"
    />
</template>

<script>

export default {
    props: ['type', 'position', 'startX', 'startY', 'unitSize', 'handleMove'],
    data () {
        let size = { width: 0, height: 0 }
        
        return {
            draging: false,
            x: this.startX,
            y: this.startY,
            previousX: 0,
            previousY: 0
        }
    },
    computed: {
        height () {
            switch (this.type) {
                case '2': case '4': return this.unitSize;
                case '3': case '5': return this.unitSize * 2;
                default: return 0;
            }
        },
        width () {
            switch (this.type) {
                case '2': case '3': return this.unitSize;
                case '4': case '5': return this.unitSize * 2;
                default: return 0;
            }
        }
    },
    methods: {
        handleTouchStart (e) {
            this.previousX = e.targetTouches[0].clientX;
            this.previousY = e.targetTouches[0].clientY;
            this.draging = true;
        },
        handleTouchMove (e) {
            let currentX = e.targetTouches[0].clientX;
            let currentY = e.targetTouches[0].clientY;
            this.x += currentX - this.previousX;
            this.y += currentY - this.previousY;
            this.previousX = currentX;
            this.previousY = currentY;
            let shiftX = this.x - this.startX;
            let shiftY = this.y - this.startY;
            let direction = 0;
            if (Math.abs(shiftY) > Math.abs(shiftX)) {
                if (-shiftY > this.unitSize / 1.5) direction = 1;
                else if (shiftY > this.unitSize / 1.5) direction = 3;
            } else {
                if (shiftX > this.unitSize / 1.5) direction = 2;
                else if (-shiftX > this.unitSize / 1.5) direction = 4;
            }
            this.handleMove(direction, this.position);
        },
        handleTouchEnd (e) {
            let _this = this, step = 5;
            let distanceX = _this.x - this.startX;
            let distanceY = _this.y - this.startY;
            let inv = setInterval(() => {
                if (!--step) { clearInterval(inv); _this.draging = false; }
                _this.x = this.startX + distanceX * step * 0.1;
                _this.y = this.startY + distanceY * step * 0.1;
            }, 10);
        },
        handleMouseDown (e) {
            let target = e.target;
            let event = document.createEvent('Events');
            event.initEvent('touchstart');
            event.targetTouches = [{clientX: e.clientX, clientY: e.clientY }];
            let handleMouseMove = function (e) {
                let event = document.createEvent('Events');
                event.initEvent('touchmove');
                event.targetTouches = [{clientX: e.clientX, clientY: e.clientY }];
                target.dispatchEvent(event);
            }
            let handleMouseUp = function (e) {
                target.removeEventListener('mousemove', handleMouseMove);
                let event = document.createEvent('Events');
                event.initEvent('touchend');
                target.dispatchEvent(event);
                target.removeEventListener('mouseup', handleMouseUp);
            }
            target.addEventListener('mousemove', handleMouseMove);
            target.addEventListener('mouseup', handleMouseUp);
            target.dispatchEvent(event);
        }
    }
}

</script>

<style lang="less">
    rect {
        fill: gray;
        stroke: #fff;
        stroke-width: 5;

        &#draging {
            stroke-width: 2;
            stroke: #00f;
        }
    }
</style>