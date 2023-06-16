import axios from "axios";

// 创建axios实例
const instance = axios.create({
  withCredentials: false,
  baseURL: 'http://123.207.32.32：9001', // api的base_url
  timeout: 60000 // 请求超时时间
});
instance.get('/lyric',{
  params:{
    id: 500665346
  }
}).then(res => {
  console.log(res.data);
})

// 可以有多个实例，要看项目的
const instance2 = axios.create({
  withCredentials: false,
  baseURL: 'http://123.207.32.32:9001',
  timeout: 60000
});
instance2.get('/lyric',{
  params: {
    id: 500029394
  }
}).then(res => {
  console.log(res.data);
})