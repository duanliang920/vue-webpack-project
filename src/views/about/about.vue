<template>
    <div class="about-content-box">
        {{this.$route.meta.title}}<br/><br/>
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
    .about-content-box {
        font-size:16px;
        color:#f34;
    }
</style>

