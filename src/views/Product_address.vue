<template>
    <div class="page-address-list" data-log="地址列表">

        <div class="address-manage">
            <div class="ui-card">
                <ul class="ui-card-item ui-list" v-for="category in categories">
                    <li class="ui-list-item identity" @click="to_pay(category.id)">
                        <a href="javascript:;">删除</a>
                        <span class="consignee">{{category.name}}</span>
                        <span>{{category.tel}}</span>
                    </li>
                    <li class="ui-list-item edit" @click="product_EditAddress">
                        <p>{{category.province}}&#32{{category.city}}&#32{{category.area}}</p>
                        <p>{{category.detail}}</p>
                    </li>
                </ul>
            </div>
        </div>


        <div class="add"><a href="javascript:;" class="ui-button ui-button-active" @click=" product_address"><span>新建地址</span></a></div>
        <div class="popup-risk-check"></div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                categories:[]
            }

        },
        created(){
            this.axios.get('api/address').then(res=>{
                console.log(res)
                this.categories=res.data
            })


        },
        methods:{
            product_address(){
                this.$router.push({name:'product_NewAddress'})
            },
            product_EditAddress(){
                this.$router.push({name:'product_EditAddress'})

            },
            to_pay(id){
                this.axios.patch(`api/address`,{address_id:id}).then(res=>{
                    this.$router.push({name:'product_pay'})
                })
            }
        }
    }
</script>