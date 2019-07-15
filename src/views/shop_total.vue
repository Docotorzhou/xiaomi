<template>
    <div class="bottom-submit ui-box">
        <div class="price"><span>共{{total.num}}件 金额：</span><br><strong>{{total.total_price}}</strong><span>元</span></div>
        <div class="btn" @click="go"><a class="ui-button ui-button-disable"
                                        href="javascript:;"><span>继续购物</span></a></div>
        <div class="btn"><a class="ui-button"
                            href="javascript:;" @click="product_pay"><span>去结算</span></a></div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
            }
        },
        created(){
            this.$store.dispatch('getCarts')
        },
        computed:{
            total(){
                return this.$store.state.total
            }
        },
        methods:{
            go(){
                this.$router.push({name:'about'})
            },
            product_pay(){
                this.$router.push({name:'product_pay'})
            }
        }


    }
</script>