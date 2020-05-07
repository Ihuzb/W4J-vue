<template>
    <div>
        <a-row :gutter="[8,35]">
            <a-col :span="12">
                <a-row>
                    <a-col :span="12">
                        <a-button type="primary" :disabled="disabled" @click="addServer">
                            启动准备
                        </a-button>
                    </a-col>
                    <a-col :span="12">
                        <a-button type="primary" :disabled="disabled" @click="startServer">
                            启动程序
                        </a-button>
                    </a-col>
                </a-row>
            </a-col>
            <a-col :span="12">
                <a-button type="danger" @click="clearShow">
                    清屏
                </a-button>
            </a-col>
        </a-row>
        <a-row :gutter="[8,24]">
            <a-textarea placeholder="Basic usage" :value="values" id="textarea"
                        :autoSize="{ minRows: 30,maxRows: 30 }"/>
        </a-row>
    </div>
</template>
<script>
    import {Row, Col, Button, Input, message} from 'ant-design-vue'
    import {startW4J, addStartW4J} from '../../api/index'

    export default {
        name: 'serviceManagement',
        data() {
            return {
                values: '',
                disabled: false
            }
        },
        components: {
            ARow: Row,
            ACol: Col,
            AButton: Button,
            ATextarea: Input.TextArea,
        },
        mounted() {
            this.$socket.on('connect', function () {
                console.log('连接成功')
            });
            this.$socket.on('customEmit', (data) => {
                this.values += (data + ' \n');
                var obj = document.getElementById("textarea");
                obj.scrollTop = obj.scrollHeight + 20; // good
//                console.log(`接收到数据${data}`)
            });
            this.$socket.on('disconnect', function () {
                console.log('连接断开')
            });
        },
        watch: {
            values: function (val) {
                if (val != '') {
                    this.disabled = true
                }
            },
        },
        methods: {
            startServer: function () {
                startW4J().then(res => {
                    console.log(res);
                    this.disabled = true
                })
            },
            addServer: function () {
                addStartW4J().then(res => {
                    console.log(res);
                    message.success('创建成功！！')
                })
            },
            clearShow: function () {
                this.values = ''
            },
        }
    }
</script>