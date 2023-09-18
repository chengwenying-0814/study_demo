<template>
  <div class="school">
    <h2>学校姓名：{{name}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
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
        this.pubid = pubsub.subscribe('hello', (msgName,data)=>{
            console.log('收到了'+ msgName+ '数据为' + data);
        })
    },
    beforeDestroy(){
        pubsub.unsubscribe(pid)
    }
}
</script>

<style>

</style>