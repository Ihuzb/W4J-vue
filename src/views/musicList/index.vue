<template>
    <div>
        <a-table :pagination="false" :columns="columns" :dataSource="dataInfo" :loading="loading" rowKey="comment_id">
        <span slot="music_name" slot-scope="text, record,index">
            <span>《{{text}}》</span>
        </span>
            <span slot="caozuo" slot-scope="text, record,index">
          <a-button type="danger" @click="updateCommentStates(record.comment_id,index)">删除</a-button>
         </span>
        </a-table>
        <a-icon type="retweet" class="retweet" @click="showNewInfo"/>
    </div>

</template>

<script>
    import {Table, Button, Icon} from 'ant-design-vue'
    import {selectMusicList, updateCommentState} from '../../api/index'

    const columns = [
        {
            title: '音乐名',
            dataIndex: 'music_name',
            key: 'music_name',
            scopedSlots: {customRender: 'music_name'},
            width: '20%'
        },
        {
            title: '评论内容',
            dataIndex: 'comment_text',
            key: 'comment_text',
            width: '60%'
        },
        {
            title: '操作',
            key: 'caozuo',
            scopedSlots: {customRender: 'caozuo'},
            width: '20%'
        },
    ];

    export default {
        name: 'musicList',
        data() {
            return {
                loading: false,
                dataInfo: [],
                columns,
            }
        },
        components: {
            ATable: Table,
            AButton: Button,
            AIcon: Icon
        },
        created() {
            this.selectMusicLists()
        },
        methods: {
            selectMusicLists: function () {
                this.loading = true;
                selectMusicList().then(res => {
                    console.log(res);
                    this.dataInfo = res.data;
                    this.loading = false
                })
            },
            updateCommentStates: function (id, index) {
                let dataInfo = this.dataInfo;
                updateCommentState({id}).then(res => {
                    dataInfo.splice(index, 1);
                    this.dataInfo = dataInfo;
                })
            },
            showNewInfo: function () {
                this.selectMusicLists();
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