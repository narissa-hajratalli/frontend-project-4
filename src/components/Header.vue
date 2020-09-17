<template>
  <div class="header">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item>
          <span class="logo">leaft</span>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#">
          <router-link to="/">Home</router-link>
        </b-navbar-item>
        <b-navbar-item href="#">
          <router-link to="/aboutsustainability">About Sustainability</router-link>
        </b-navbar-item>
        <b-navbar-item href="#">
          <router-link to="/about">About</router-link>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <router-link to="/signup">Sign Up</router-link>
            </a>
            <router-link to="/login" v-bind:URL="URL" v-if="!loggedIn"><button class="button is-light">Login</button></router-link>
            <button v-if="loggedIn" class="button is-light" @click="logout">Logout</button>
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
.header {
    width: 90%;
    margin: 10px auto
}

</style>
