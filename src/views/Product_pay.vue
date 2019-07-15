<template>
    <div class="wrap">

        <div class="page-order-checkout">
            <div class="page-order-checkout-wrap">
                <div class="b1 icon_arrow" v-if="address!=null">
                    <a href="javascript:;" @click="product_address" >
                        <div class="b11"><p><span>{{this.address.name}}</span><span>{{this.address.tel}}</span></p></div>
                        <div class="b13"><p>{{this.address.province}}&#32{{this.address.city}}&#32{{this.address.area}}&#32{{this.address.detail}}</p></div>
                    </a>
                </div>
                <div class="b1 icon_arrow" v-if="show">
                    <a href="javascript:;" @click="product_address">
                        <div class="b11"><p><span>没有地址</span></p></div>
                        <div class="b13"><p>请新建地址</p></div>
                    </a>
                </div>
                <div class="ui_line"></div>
                <div class="b2">
                    <ul>
                        <li class="on"><a href="javascript:;" class="alipaywap">微信支付</a></li>
                        <li class=""><a href="javascript:;" class="">货到付款</a></li>
                    </ul>
                </div>
                <div class="ui_line"></div>


                <div class="b8" >
                    <div class="b8w"  v-for="category in categories">
                        <div class="b81">
                            <div class="img"><img :src="category.product.image==null? '':'http://images.canon4ever.com/'+category.product.image">
                            </div>
                        </div>
                        <div class="b82">
                            <div class="name"><p>
                                <span>{{category.product.name}}</span></p></div>
                        </div>
                        <div class="b83">
                            <div class="price"><strong>{{category.product.price}}</strong></div>
                        </div>
                    </div><!--v-repeat-cart.list--></div>
                <div class="ui_line"></div>
                <div class="b5">
                    <div class="b51"><p><strong>商品价格：</strong><span>{{item.total_price}}</span></p></div>
                    <div class="b53"><p><strong>配送费用：</strong><span>0元</span></p></div>
                </div>
                <div class="b7">
                    <div class="b71"><span>共{{item.num}}件 合计: </span><strong>{{item.total_price}}</strong></div>
                    <div class="b72"><a href="javascript:;" class="ui-button" @click="product_pay"><span>去付款</span></a></div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return{
                categories:[],
               item:{},
               address:[],
               show:false,
            }
        },
        watch:{
            address(val){
                this.show=this.address==null? true : false
            },
        },
        created(){

            this.axios.get('api/order/checkout').then(res=>{
                console.log(res)
                this.categories=res.data.carts;
                this.item=res.data.count;
                this.address=res.data.address
            })
        },
        methods:{
            product_pay(){
                this.$router.push({name:'product_money'})

            },
            product_address(){
                this.$router.push({name:'product_address'})
            }
        }
    }
</script>
