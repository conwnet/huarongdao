<template>
    <div>
        <div class="select">
            选关
            <ul>
                <li>十八步</li>
                <li><a href="#">罂粟</a></li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            level: [
                { name: '十八步', state: '22222512211222222002' },
                { name: '罂粟', state: '35131111241222222002' },
                { name: '横刀立马', state: '35131111341312212002' }
            ]
        };
    }
}

</script>

<style lang="less">

    .select {
        width: 50px;
        height: 30px;
        border: 1px solid #f00;
        border-radius: 5px;
        line-height: 30px;

        ul {
            position: absolute;
            list-style: none;
            margin: 0;
            padding: 0;
            border: 1px solid #0f0; 

            li {
                &:hover {
                    background-color: #eee;
                }
                &:active {
                    background-color: #00f;
                }
            }
        }
    }

</style>
