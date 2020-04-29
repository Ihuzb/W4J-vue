<template>
    <a-table :columns="columns" :dataSource="data">
    </a-table>
</template>

<script>
    import {Table} from 'ant-design-vue'
    import {selectMusicList} from '../../../../new/src/api/index'

    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
            slots: {title: 'customTitle'},
            scopedSlots: {customRender: 'name'},
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            scopedSlots: {customRender: 'tags'},
        },
        {
            title: 'Action',
            key: 'action',
            scopedSlots: {customRender: 'action'},
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    export default {
        name: 'musicList',
        data() {
            return {
                data,
                columns,
            }
        },
        components: {
            ATable: Table
        },
        created() {
            selectMusicList();
        }
    }
</script>