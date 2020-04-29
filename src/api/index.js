import axios from 'axios';
//查询音乐列表
export const selectMusicList = () => {
    axios.get('/api/selectMaxLoveCommentList', {maxLove: 12}).then(res => {
        console.log(res)
    })
}
