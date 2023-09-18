<template>
  <div class="student">
    <h2>学校姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>当前求和为：{{number}}</h2>
    <button @click="sendStudentName">把学生名给app</button>
    <!-- 函数是不带括号 记住 -->
    <button @click="unbind">解绑atguigu事件</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            name:'张三',
            sex: '男',
            number: 0
        }
    },
    methods:{
        sendStudentName(){
            this.$emit('atguigu',this.name)
        },
        unbind(){
            this.$off('atguigu')
        }
    }

}
</script>

<style>

</style>