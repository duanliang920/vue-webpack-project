<template>
    <div class="index-content-box">
        我是首页内容<br/><br/><br/>
        <router-link :to="{ path: '/list' }">
          点击去list页
        </router-link><br/><br/>
        <router-link :to="{ path: '/detail/23' }">
          点击去详情页
        </router-link><br/><br/>
        <router-link :to="{ path: '/about' }">
          点击关于我们
        </router-link>
    </div>
</template>

<script>
import {ajax} from '../../services/ajax'
export default {
  props: {
    
  },
  data () {
    return {
        dataList: []
    }
  },
  computed: { 
    
  },
  watch: {
    
  },
  methods: {
    getTestData () {
        /*
         *  ajax Example
         *  1、ajax 一个是基于promise库。下面的调用方法，
         *  是我对它（axios）进行了一次封装。
         *  2、具体 请到 services 目录下查看源码
         *  3、暂时只对外提供 get post。 如需其它请求，请自行添加！
         *  注：这个ajax库不是项目必须的。可根据您的喜好自行选择，
         *      这里只是提供了一个演示方式。
        */
        let url ="http://www.duanliang920.com"
        ajax.get(url, (res)=>{

            console.log('res:', res)
           // this.dataList = res.data
        })
        .catch(err => {
            console.log('ajax error', err);
        });
    }
  },
  mounted () {
    this.getTestData()
  }
}
</script>
<style lang="sass" scoped>
    .index-content-box {
        width:600px;
        margin:50px auto;
        font-size:16px;
        color:#f34;
    }
</style>
