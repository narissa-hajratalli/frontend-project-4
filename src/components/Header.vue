<template>
  <div class="header">
    <b-navbar>
      <!-- <template slot="brand">
        <b-navbar-item>
          <router-link to="/"><span class="logo">leaft</span></router-link>
        </b-navbar-item>
      </template> -->
      <template slot="start">
        <b-navbar-item href="#" v-if="loggedIn">
          <router-link to="/home" class="header-text">Home</router-link>
        </b-navbar-item>
        <b-navbar-item href="#" v-if="loggedIn">
          <router-link to="/aboutsustainability" class="header-text">About Sustainability</router-link>
        </b-navbar-item>
        <b-navbar-item href="#" v-if="loggedIn">
          <router-link to="/about" class="header-text">About</router-link>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <!-- <a class="button is-primary">
              <router-link to="/signup">Sign Up</router-link>
            </a> -->
            <router-link :to="{ name: 'Login', query: { URL: this.URL }}" v-bind:URL="URL" v-if="!loggedIn"><b-button class="button is-light">Login</b-button></router-link>
            <router-link :to="{ name: 'Main', query: { URL: this.URL }}" v-bind:URL="URL" v-if="loggedIn"><b-button class="button is-light" @click="logout">Logout</b-button></router-link>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ['URL', 'loggedIn'],
  methods: {
    logout: function(){
      this.$emit('logout')
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster+Two:ital@1&display=swap');

.header {
    width: 90%;
    margin: 10px auto
}

.header-text {
  color:teal;
  font-family: 'Lobster Two', cursive;
  font-size: 25px
}

</style>
