import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el:"#app",

  data: {
    users: [],
  },

  methods:{
    mounted(){
      // fetch("https://jsonplaceholder.typicode.com/users")
      //   .then(responce => responce.json())
      //   .then((data) => {
      //     this.users = data;
      //   })
      // console.log(this.users);
      console.log("Mounted!!!");
    },
  },

  router,
  render: h => h(App)
}).$mount('#app')
