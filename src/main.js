import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

createApp(App).mount('#app')

// 1.baseURL
const baseURL = "http://123.207.32.32:8000";

// 给axios实例配置公共的基础配置
axios.defaults.baseURL = baseURL
axios.defaults.timeout = 3000
axios.defaults.headers = {}

axios.get('/home/multidata').then(res => {
  console.log(res.data);
})
// ip+端口

// axios发送多个请求
axios
  .all([axios.get("/home/multidata"), axios.get("/home/multidata")])
  .then((res) => {
    console.log('多个请求',res);
  });