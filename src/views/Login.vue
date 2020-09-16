<template>
  <div class="login">
      <b-field label="Username">
          <b-input type='username' value="" placeholder="username"></b-input>
      </b-field>
      <b-field label="Password">
          <b-input type="password" value="" placeholder="password"></b-input>
      </b-field>
      <button>Login</button>
  </div>
  

</template>

<script>


export default {
  name: 'Login',
}
</script>
