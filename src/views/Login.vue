<template>
  <div class="login">
      <input class='input is-primary' type="text" v-model="username"/>
      <input class='input is-primary' type="password" v-model="password"/>
      <br/>
      <button class="button is-danger" @click="handleLogin">Login</button>
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
      .then(response => {
        if (response.status != 200) {
          response.json()
        } else {
          return response.json()
        }
      })
      .then(data => {
        console.log('data', data)
        if(data){
          this.$emit('loggedIn', data)
        } else {
          alert('Incorrect Login')
        }
      })
    },
////// MORE FUNCTIONS HERE ////

  },
}
</script>
