<template>
    <div>
<!--        <div class="cart-index" v-if="show">-->
<!--            <div style="height:1rem;"></div>-->

<!--            <div class="cart-index-wrap">-->
<!--                <div class="empt">-->
<!--                    <div class="b3">-->
<!--                        <a href="/1/#/product/category" class="ui-button ui-button-disable">-->
<!--                            <span>全部商品</span>-->
<!--                        </a>-->
<!--                        <a href="/1/#/index/recommend" class="ui-button">-->
<!--                            <span>精选商品</span>-->
<!--                        </a>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
                <div class="cart-list">
                    <ul >
                        <li class="item">
                            <div class="ui-box" v-for="category in categories">
                                <div class="imgProduct" ><a href="javascript:;"><img
                                        :src="category.product.image==null? '':'http://images.canon4ever.com/'+category.product.image"></a></div>
                                <div class="info ui-box-flex">
                                    <div class="name">
                                        <span>{{category.product.name}}</span>
                                    </div>
                                    <div class="price">
                                        <p>
                                            <span>售价：</span><span>{{category.product.price}}</span>
                                            <span>合计：</span><span>{{category.product.price*category.num}}</span>
                                        </p>
                                        <div class="tip">
                                            <span style="display: none;">请于2016/04/11 00:58前下单，逾期将失效。</span>
                                        </div>
                                    </div>
                                    <div class="num">
                                        <div class="xm-input-number">
                                            <div class="input-sub"  @click="add(category,'dec')"></div>
                                            <div class="input-num"><span>{{category.num}}</span></div>
                                            <div class="input-add active" @click="add(category,'inc')"></div>
                                        </div>
                                        <div class="delete">
                                            <a href="javascript:;"  @click="remove(category.id)">
                                                <span class="icon-iconfontshanchu"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="append"></div>
                        </li>
                    </ul>
                </div>
    </div>

</template>
<script>
    import {mapActions} from  'vuex'
    export default {
        created(){
            this.$store.dispatch( 'getCarts')
        },
        computed: {
          categories(){
                return this.$store.state.categories
            }

        },
        methods:{
            add(id,type){
                this.$store.dispatch('add',{id:id,type:type})

            },
            ...mapActions(['remove'])
         // remove(id){
         //        this.$store.dispatch("remove",id)
         // }
        }
    }
</script>