<template>
    <div class="contain">
        <div class="xx" v-for="todo in todos">
            <p>{{todo.name}}</p>
            <ul>
                <li v-for="item in todo.children" @click="product_list(item.id)">
                    <img :src="'http://images.canon4ever.com/'+item.image" alt=""  >
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>
<style lang="scss">
    .contain{
        width: 100%;
        background-color: beige;
        .xx{
            height: 15em;
            border-bottom:5px solid white;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            ul{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: flex-end;
                li{
                  display: flex;
                   width: 25%;
                    flex-direction: column;
                    align-items: center;
                    img{
                        width: 30%;
                    }
                }
            }
        }
    }

</style>
<script>
    import Footer from './nav'
    export default {
        components:{
            Footer
        },

        data() {
            return {
                todos:[]
            }
        },
        created(){
           this.axios.get('http://localhost:8000/api/category').then(res=>{
                console.log(res);
                this.todos=res.data
            })

        },
        methods:{
            product_list(item){
                console.log(item);
                this.$router.push({name:'product_list',params:{id:item}})
            }
        }
    }
</script>
