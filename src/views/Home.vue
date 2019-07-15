<template>
  <div class="contain">
    <div class="contain-top">
      <template>
            <!-- swiper -->
            <swiper :options="swiperOption">
              <swiper-slide v-for="list in lists"><img :src="'http://images.canon4ever.com/'+list.image" width="100%"></swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
      </template>
    </div>
    <div class="contain-ad">
            <li v-for="item in category">
                <img :src="'http://images.canon4ever.com/'+item.image" width="100%">
            </li>
    </div>
    <div class="contain-main"v-for="categories in publics">
        <li >
            <img :src="'http://images.canon4ever.com/'+categories.image" width="60%">
            <img src="../assets/xp.png" width="20%" id="xin">
        </li>
        <div class="main-right">
            <h3>{{categories.name}}</h3>
            <span>{{categories.description}}</span>
            <div class="money">{{categories.price}}元 起</div>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<style lang="scss">
    body{  background-color: beige;}
    .contain{
        .contain-ad{
            display: flex;
            flex-direction: row;
            li{
                list-style: none;
            }
        }
        .contain-main{
            display: flex;
            border: 1px solid white;
            align-items:center;
                li{
                    width: 40%;
                    list-style: none;
                }
                .main-right{
                    width: 60%;
                    display: flex;
                    flex-direction: column;
                    .money{
                        text-align: center;
                        color: red;
                        margin-top: 10px;
                        margin-bottom: 10px;
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
              swiperOption: {
                  spaceBetween: 30,
                  centeredSlides: true,
                  autoplay: {
                      delay: 2500,
                      disableOnInteraction: false
                  },
                  pagination: {
                      el: '.swiper-pagination',
                      clickable: true
                  },
                  navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev'
                  }
              },
              lists:[],
              category:[],
              publics:[]
          }
      },
    created(){
      this.axios.get('http://localhost:8000/api').then(res=>{
        console.log(res)
          this.lists=res.data.slides
          this.category=res.data.banners
          this. publics=res.data.recommends
      })
    }
  }
</script>
