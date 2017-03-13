<template>
    <div class="list-content-box">
        我是list页内容 <br/><br/><br/>
        <router-link :to="{ path: '/detail/23' }">
          点击去详情页
        </router-link>
        <br/><br/><br/>
        <span @click="onBack">点击回退</span>
        当前页面url: {{this.$route.path}}
    </div>
</template>

<script>
export default {
  props: {
    
  },
  data () {
    return {
     
    }
  },
  computed: { 
    
  },
  watch: {
    
  },
  methods: {
    onBack () {
        window.history.back()
    }
  },
  mounted () {
    
  }
}
</script>
<style lang="sass" scoped>
    .list-content-box {
        font-size:16px;
        color:#f34;
    }
</style>

