<template>
    <div id="wrapper">
        <div class="cart-index" >
            <div class="cart-index-wrap">
                <shop_list></shop_list>
                <div class="pointBox">
                    <div class="point" style="display: none;"><span class="act act_special">包邮</span><span></span></div>
                    <div class="point">
                        <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
                    </div>
                </div>
                <shop_total></shop_total>
            </div>
        </div>
    </div>
</template>

<script>
    import shop_list from './shop_list'
    import shop_total from './shop_total'
    export  default {
        components:{
            shop_list,shop_total
        },
        data(){
            return{
                categories:[],
                show:false


            }
        },

        created(){
            this.x();
        },
        computed:{
           total(){
                var num=0;
                var price=0;
                this.categories.map(item=>{
                     num+=item.num;
                    price+=item.num*item.product.price
                })
                return{num:num,price:price}
            },

        },
        watch:{
            categories(val){
                this.show=this.categories.length<1? true : false
            }

        },
        methods:{
            x(){ this.axios.get('http://localhost:8000/api/cart').then(res=>{
                console.log(res)
                this.categories=res.data.carts
            })
            },
            product_pay(){
                this.$router.push({name:'product_pay'})
            },
            go(){
                this.$router.push({name:'about'})
            },
            remove(id){
                this.axios.delete(`api/cart?cart_id=${id}`).then(res=>{
                    this.x()
            })
            },
              // 数字加减
            add(id,type){
                    if(id.num<1 && type=='dec'){
                        return false
                    }
                this.axios.patch(`api/cart`,{cart_id:id.id,type:type}).then(res=>{
                    console.log(res)
                    type=='inc'? id.num++ : id.num--
                })
            }
        }
    }
</script>