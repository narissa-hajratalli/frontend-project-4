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
            <a class="button is-primary">
              <!-- <router-link to="/signup">Sign Up</router-link> -->
            </a>
            <router-link :to="{ name: 'Login', query: { URL: this.URL }}" v-bind:URL="URL" v-if="!loggedIn"><button class="button is-light">Login</button></router-link>
            <router-link :to="{ name: 'Main', query: { URL: this.URL }}" v-bind:URL="URL" v-if="loggedIn"><button class="button is-light" @click="logout">Logout</button></router-link>
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

.header-text {
  color:green;
}

</style>
