<template>
  <div>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <!-- <School :getSchoolName="getSchoolName"></School> -->
    <Student/>
    <School/>
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
    };
  }
};
</script>

<style></style>
