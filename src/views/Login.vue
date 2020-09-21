<template>
  <div class="login">
   <b-field label="Username">
            <b-input v-model="username"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
                v-model="password"
                password-reveal>
            </b-input>
        </b-field>
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
  beforeCreate: function() {
    const getLogin = JSON.parse(window.sessionStorage.getItem('login'))
    if (getLogin) {
        this.user = getLogin.user
        this.token = getLogin.token
        // this.loggedin = true
    }
  },
  methods: {
    handleLogin: function() {
      fetch(`${this.$route.query.URL}/auth/users/login/`,  {
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
    }
  },
}
</script>


<style>
  .login {
    width: 40%;
    margin: 10px auto
  }
</style>
