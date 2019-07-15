<template>
    <div id="wrapper">
        <div class="page-list" data-log="商品列表">
            <ol class="version">
                <li v-for="todo in todos" @click="product_detail(todo.id)">
                    <a class="version-item" href="javascript:;" >
                            <div class="version-item-img">
                                <img
                                :src="todo.image==null? '':'http://images.canon4ever.com/'+todo.image" height="90">
                        </div>
                        <div class="version-item-intro">
                            <div class="version-item-name"><p>{{todo.description}}</p></div>
                            <div class="version-item-intro-price"><span>{{todo.price}}</span></div>
                        </div>
                    </a>
                </li>
            </ol>
        </div>
    </div>
</template>
<script>
 export  default {
     data(){
         return{
             todos:[]

         }

     },
     created(){
         let id =this.$route.params.id;
         this.axios.get(`http://localhost:8000/api/product/list?id=${id}`).then(res=>{
             console.log(res)
             this.todos=res.data
         })

     },
     methods:{
         product_detail(todo){
             console.log(todo)
             this.$router.push({name:'product_detail',params:{id:todo}})
         }
     }
 }
</script>