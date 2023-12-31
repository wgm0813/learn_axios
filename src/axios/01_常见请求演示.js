import axios from "axios";

// 1、发送request请求
axios
  .request({
    url: "http://123.207.32.32:8000/home/multidata",
    method: "get"
  })
  .then((res) => {
    console.log(res.data);
  });

// 2.发送get请求
// axios.get("http://123.207.32.32:9001/lyric?id=500665346").then((res) => {
//   console.log(res.data);
// });

// 写法：通过params来自动拼接成params里面的参数
// axios.get("http://123.207.32.32:9001/lyric", {
//   params: {
//     id: 500665346
//   }
// }).then(res => {
//   console.log(res.data);
// });

// 3、发送post请求:有参数直接放在后面就行
axios
  .post("http://123.207.32.32:1888/02_param/postjson", {
    name: "coderwhy",
    password: "123456"
  })
  .then((res) => {
    console.log(res.data);
  });

// 他会将第二个对象里面的东西当作参数传递给接口
axios
  .post("http://123.207.32.32:1888/02_param/postjson", {
    data: {
      name: "coderwhy",
      password: "123456"
    }
  })
  .then((res) => {
    console.log(res.data);
  });
