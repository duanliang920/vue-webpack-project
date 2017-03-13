<template>
    <footer class="footer-wrap-box">
        {{text}}
    </footer>
</template>

<script>
export default {
    props: {
        text: {
            type: String
        }
    }
}
</script>
<style lang="sass" scoped>
  @import './footer.scss'
</style>
