 <template>
  <header class="header-wrap-box" >
    <img src="../../../assets/images/logo.jpg" width="460" height="99" alt="logo"/>
  </header>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
     
    }
  },
  computed: { 
    
  },
  watch: {
    $route (to, from) {
      
    }
  },
  methods: {
    
  },
  mounted () {
    
  }
}
</script>
<style lang="sass" scoped>
@import './header.scss'
</style>
