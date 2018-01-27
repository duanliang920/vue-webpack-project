<template>
    <div class="index-box">
        这是首页311123<br/>
        <img src="../../assets/images/test1.png"/><br/>
        <div class="test flex">test测试</div><br/>
    </div>

</template>

<script>
    import { ajax } from '@services/ajax'
    import { commonApi } from '@services/api'
    export default {
        props: {
           
        },
        data () {
            return {
                
            };
        },

        computed: {
           
        },

        watch: {
            
        },

        methods: {
            getData () {
                let url = commonApi.index
                ajax.get(url)
                    .then((res) => {
                        console.log('res:', res)
                    })
                    .catch((error) => {
                        console.log('error:', error)
                    })
            },
            postData () {
                let url = commonApi.index
                let _data = {
                    test: 1
                }
                let _headers = {
                    "X-Requested-With": "XMLHttpRequest"
                }
                ajax.post(url, _data, _headers)
                    .then((res) => {
                        console.log('res:', res)
                    })
                    .catch((error) => {
                        console.log('error:', error)
                    })
            }
        },

        mounted() {
            // this.getData()
        }
    };
</script>
<style lang="sass" scoped>
    @import './index.scss'
</style>