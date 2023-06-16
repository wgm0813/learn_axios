import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";

createApp(App).mount('#app')

// 对应实例配置拦截器
axios.interceptors.request.use((config) => {
  console.log('请求成功拦截')
  // 开始loading配置
  // 对原来的配置进行一些修改
  // hear
  // 认证登录:token/cookie
  // 请求参数进行某些转化

  // 只有路径等于这个/user/info的时候才会配置token
  if(config.url === '/user/info')
  config.headers['token'] = 'codewhy'

  // 修改完成要返回config
  return config
},(err) => {
  // 这里是请求失败之后会走的
  console.log('请求失败拦截');
  return err;
})


axios.interceptors.response.use((res) => {
  // 响应成功的拦截
  // 结束loading
  
  return res.data
},(err) => {
  // 响应失败的拦截
  return err
})

axios
  .get("http://123.207.32.32:8000/home/multidata")
  .then((res) => {
    console.log(res,res.data);
  })
  .catch((err) => {
    console.log(err);
  });
