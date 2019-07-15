import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories :[],
    show:false,
    total:{},
    changing:false
  },
  getters:{

  },
  mutations: {
    setCarts(state,carts){
      state.categories=carts
    },
    setCount(state,count){
      state.total=count
    },
    add(state, payload) {
      payload.type=='inc'? payload.id.num++ : payload.id.num--
    },
    remove(state,payload){


    }
  },
  actions: {
    getCarts({commit}) {
      axios.get("api/cart").then(res => {
        console.log(res)
        commit('setCarts', res.data.carts)
        commit('setCount', res.data.count)
      })

    },
    add({commit}, payload) {
      console.log(payload)
      if(this.state.changing){
        return
      }
      if (payload.type == "dec" && payload.id.num < 1) {
        return false
      }
      commit('changeStatus',true)
      axios.patch(`api/cart`, {cart_id: payload.id.id, type: payload.type}).then(res => {
        console.log(res)
        commit('changeStatus,false')
        commit('setCarts',res.data.carts)
        commit('setCount',res.data.count)

      })
    },
    remove({commit},id){
     axios.delete(`api/cart?cart_id=${id}`).then(res=>{
       commit('setCarts',res.data.carts)

     })

    }
  }
})




