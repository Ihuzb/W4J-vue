<template>
    <div>
        <a-spin :spinning="spinning">
            <div id="echarts05" style="height:500px;width:100%"></div>
        </a-spin>
        <a-icon type="retweet" class="retweet" @click="ciYuns"/>
    </div>

</template>
<script>
    import echarts from 'echarts';
    import {Spin, Icon, message} from 'ant-design-vue'
    import "echarts-wordcloud";
    import {ciYun} from '../../api/index'

    export default {
        name: 'ziyun',
        data() {
            return {
                spinning: true,
                chart: null,
                data: []
            }
        },
        mounted() {
            this.ciYuns()
        },
        components: {
            ASpin: Spin,
            AIcon: Icon
        },
        methods: {
            ciYuns() {
                this.spinning = true;
                ciYun().then(res => {
                    this.spinning = false;
                    this.initChart(res.data);
                }).catch(err => {
                    this.spinning = false;
                    message.error('生成失败，请重新生成')
                })
            },
            initChart(data) {
                this.chart = echarts.init(document.getElementById("echarts05"));
                const option = {
                    backgroundColor: "#fff",
                    tooltip: {
                        show: false
                    },
                    series: [
                        {
                            type: "wordCloud",
                            gridSize: 10,
                            sizeRange: [14, 60],
                            rotationRange: [-45, 0, 45, 90],
                            //随机生成字体颜色
//                            maskImage: maskImage,
                            textStyle: {
                                normal: {
                                    color: function () {
                                        return (
                                            "rgb(" +
                                            Math.round(Math.random() * 255) +
                                            ", " +
                                            Math.round(Math.random() * 255) +
                                            ", " +
                                            Math.round(Math.random() * 255) +
                                            ")"
                                        );
                                    }
                                }
                            },
                            left: "center",
                            top: "center",
                            right: 0,
                            bottom: 0,
                            width: "100%",
                            height: "120%",
                            //数据
                            data: data
                        }
                    ]
                };
                this.chart.setOption(option);
            }
        }
    }
</script>
<style scoped>
    .retweet {
        position: fixed;
        right: 70px;
        bottom: 20px;
        font-size: 35px;
        background-color: ghostwhite;
        border: 1px solid gainsboro;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
    }
</style>