<template>
    <div class="modal" :class="{ hide: !this.show }"
        :style="{ width: `${unitSize * 5}px`, height: `${unitSize * 6.3}px` }">
        <h1><span>选择关卡</span></h1>
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
    props: [ 'unitSize', 'show', 'handleSelect' ],
    data () {
        return {
            levels: [
                { title: '十八步', layout: '25122112222222222002' },
                { title: '罂粟', layout: '35131111241222222002' },
                { title: '横刀立马', layout: '35131111341312212002' },
                { title: '横竖皆将', layout: '35131111341214122002' },
                { title: '守口如瓶之一', layout: '35131111230221024141' },
                { title: '守口如瓶之二', layout: '25123113130121024141' },
                { title: '层层设防之一', layout: '35131111241224120410' },
                { title: '层层设防之二', layout: '25123113141124120410' },
                { title: '三军联防', layout: '51331111414124122002' },
                { title: '堵塞要道', layout: '25122112334111410410' },
                { title: '水泄不通', layout: '35121112414141412002' },
                { title: '四路皆兵', layout: '05130111222241414141' },
                { title: '五虎拦路', layout: '51411141334111222002' },
                { title: '兵将连环', layout: '51231121414141412002' },
                { title: '插翅难飞', layout: '35121112412234131001' },
                { title: '齐头并进', layout: '35131111222234131001' },
                { title: '兵分三路', layout: '25123113122134131001' },
                { title: '将拥曹营', layout: '05103113133121124122' },
                { title: '横马当关', layout: '35131111414123022102' },
                { title: '前挡后堵', layout: '51411132331211220410' },
                { title: '兵挡将阻', layout: '25132111341214120410' },
                { title: '兵临城下', layout: '25122112333311110410' },
                { title: '一路进军', layout: '35121112333211120410' },
                { title: '一路顺风', layout: '35121112341312310210' },
                { title: '兵临曹营', layout: '25122112341313310110' },
                { title: '雨声淅沥', layout: '35121112341313012102' },
                { title: '桃花源中', layout: '25123113133121120410' },
                { title: '捷足先登', layout: '25122112041033331111' },
                { title: '围而不歼', layout: '35121112341213320110' },
                { title: '将守角楼', layout: '35131111241232231001' },
                { title: '巧过五关', layout: '24122112414141410410' },
                { title: '屯兵东路', layout: '51331111412233221100' },
                { title: '比翼横空', layout: '41514111414120232021' },
                { title: '峰回路转', layout: '22235131111304110241' },
            ]
        };
    }
}

</script>

<style lang="less">

    .modal {
        top: 0;
        left: 0;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        text-align: center;

        h1 {
            margin: 0;
            height: 15%;
            font-size: 25px;
            display: flex;
            align-items: center;
            
            span { margin: 0 auto; }
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
