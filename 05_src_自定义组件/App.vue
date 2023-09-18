<template>
  <div>
    <h1>{{ msg }}，学生姓名是:{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <!-- <School :getSchoolName="getSchoolName"></School> -->
    <Student @atguigu="getStudentName"></Student>
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";
export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "你好啊",
      studentName: "",
    };
  },
  methods: {
    getStudentName(name) {
      console.log("app收到了学生姓名", name);
      this.studentName = name;
    },
  },
};
</script>

<style></style>
