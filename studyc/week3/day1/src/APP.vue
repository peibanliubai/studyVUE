<template>
    <div>{{msg}}
<!--<router-view></router-view>-->
        <button @click="show">notify</button>
</div>
</template>
<script>
    export default {
        data(){
            return {msg:"hello"}
        },
        methods: {
            show(){
                this.$notify("456",{delay:1000});
            }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped>

</style>
