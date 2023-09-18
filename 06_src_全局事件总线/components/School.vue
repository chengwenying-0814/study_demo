<template>
  <div class="school">
    <h2>学校姓名：{{name}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:''
        }
    },
    methods:{

    },
    mounted() {
        this.$bus.$on('shijian',(name)=>{
            console.log('我收到了数据', name)
            this.name = name
        })
    },
}
</script>

<style>

</style>