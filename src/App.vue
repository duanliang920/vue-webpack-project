<template>
    <div class="viewport-wrap-box">
        <!--start header-->
        <main-header></main-header>
        <!--end header-->
        
        <!--start content (Router)-->
        <router-view></router-view>
        <!--end content-->
        
        <!--start footer-->
        <main-footer :text="footerText"></main-footer>
        <!--end footer-->
    </div> 
</template>

<script>
import mainHeader from 'Views/common/header/header'
import mainFooter from 'Views/common/footer/footer'

export default {
    props: {
      
    },
    components: {
        mainHeader,
        mainFooter,
    },
    data () {
        return {
            footerText: '我是底部'
        }
    },
    watch: { 
        //监听路由变化
        $route (to, from) { 
            console.log('to:', to)
            console.log('from:', from)
            document.title = to.meta.title
        }
    },
    computed: { 
    
   
    },
    methods: {
   
    },
    mounted () {

    }
}
</script>
<style lang="sass" scoped>
    .viewport-wrap-box{
        width:1200px;
        margin:0 auto;
    }
</style>