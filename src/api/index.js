import axios from 'axios';
//查询音乐列表
export const selectMusicList = () => {
    return axios.get('/api/selectMaxLoveCommentList').then(res => {
        let data = res.data;
        if (data.code == 200) {
            return Promise.resolve(data)
        } else {
            return Promise.reject(data)
        }
    })
}
//删除不合规的评论信息
export const updateCommentState = (value) => {
    return axios.get('/api/updateCommentState',
        {params: {...value}}).then(res => {
        let data = res.data;
        if (data.code == 200) {
            return Promise.resolve(data)
        } else {
            return Promise.reject(data)
        }
    })
}
