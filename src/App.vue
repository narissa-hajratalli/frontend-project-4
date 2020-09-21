<template>
  <div id="app">
    <Header v-bind:URL="URL" v-bind:loggedIn="loggedIn" @logout="logout"/> <!-- Header is a component and it is basically inserted as if it were an html tag-->
    <router-view @loggedIn="login($event)"/>
    <Footer/>
  </div>
</template>




<script>
// importing components from their respective .vue files
// so they can be used here
import Header from './components/Header' 
import Footer from './components/Footer'

// This is where the Vue instance will live
// This is exporting out the Vue instance, so it can be used in other components
export default {
  name: 'App',
  
  /////////////////////////////////////////////////////////
  // Components tells App.vue which components you are using in this file form the other files
  // This "registers" the components
  components: {
    Header,
    Footer
  },

  /////////////////////////////////////////////////////////
  // Data is a function, it needs to be returned as an object
  data:function(){
    return {
      loggedIn: false,
      token: "",
      URL: 'https://backend-project4.herokuapp.com'
      // https://backend-project4.herokuapp.com'
    }
  },

  // beforeMount: function(){
  //   this.token = window.localStorage.getItem("token")
  //   this.loggedIn = true
  // },
  /////////////////////////////////////////////////////////
  // Methods 
  methods: {
    login: function(event){
      console.log('event heard')
      this.loggedIn = true
      this.token = event.token
      console.log(event)
      this.$router.push({ 
        path: "Home", 
        query: { token: this.token, URL: this.URL } 
        })
      window.localStorage.setItem("token", this.token)
    },
    logout: function(){
      this.loggedIn = false;
      this.token = ""
      this.$router.push('/')
    }
  }
  
} 
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
