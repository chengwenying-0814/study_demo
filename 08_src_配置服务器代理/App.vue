<template>
  <div id="app">
    <button @click="getFileData">获取文件数据</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'App',
    methods:{
        getFileData(){
            axios.get('http://localhost:8080/hello').then(
                response => {
                    console.log('请求成功了',response.data);
                },
                error => {
                    console.log('请求失败了',error.message)
                }
            )
        }
    }

}
</script>

<style></style>
