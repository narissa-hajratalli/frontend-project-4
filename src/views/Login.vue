<template>
  <div class="login">
      <b-field label="Username">
          <b-input type='username' value="" placeholder="username"></b-input>
      </b-field>
      <b-field label="Password">
          <b-input type="password" value="" placeholder="password"></b-input>
      </b-field>
      <button v-on:click="handleLogin">Login</button>
  </div>
  

</template>

<script>


export default {
  name: 'Login',
  data: function() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleLogin: function() {
      fetch("http://localhost:8000/auth/users/login/",  {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          username: this.username,
          password: this.password
        }),
      })
      .then(response => response.json())
      .then(data => console.log(data))
    }


  
  }
}
</script>
