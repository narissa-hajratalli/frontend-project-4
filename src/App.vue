<template>
  <div id="app">
    <div id="nav">
      <Header v-bind:URL="URL" @loggedIn="login($event)"/>

      
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data:function(){
    return {
      loggedIn: false,
      tokens: {},
      URL: 'http://localhost:8000'
    }
  },
  methods: {
    login: function(event){
      this.loggedIn = true
      this.tokens = event
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
