<template>
    <div class="detail-content-box">
        我是{{this.$route.meta.title}}<br/><br/>
        <span @click="onBack">点击回退</span>
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
    .detail-content-box {
        font-size:16px;
        color:#f34;
    }
</style>
