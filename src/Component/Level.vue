<template>
    <div class="modal" :class="{ hide: !this.show }">
        <h1>选择关卡</h1>
        <ul>
            <li
                :key="item.state"
                v-for="item in levels"
                @click="handleSelect(item)">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: [ 'show', 'handleSelect' ],
    data () {
        return {
            levels: [
                { title: '十八步', layout: '25122112222222222002' },
                { title: '罂粟', layout: '35131111241222222002' },
                { title: '横刀立马', layout: '35131111341312212002' }
            ]
        };
    }
}

</script>

<style lang="less">

    .modal {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        text-align: center;

        h1 {
            margin: 0;
            font-size: 25px;
            line-height: 80px;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            height: 80%;
            overflow: auto;

            &::-webkit-scrollbar { display:none }

            li {
                height: 50px;
                line-height: 50px;
                margin-bottom: 5px;
                background-color: rgba(255, 255, 255, 0.2);
                cursor: pointer;

                &:hover {
                    background-color: rgba(255, 255, 255, 0.4);
                }

                &:active {
                    color: #000;
                    background-color: rgba(255, 255, 255, 0.8);
                }
            }
        }

        &.hide {
            display: none;
        }
    }

</style>
