<template>
  <div>
    <School name="东电" address="东北"/>
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  components: { School },
  data() {
	return {
		msg:'欢迎学习vue'
	}
  },

  
};
</script>
<style></style>
