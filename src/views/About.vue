<template>
  <div class="about">
  <img id="me" src="https://res.cloudinary.com/ds7vqqwb8/image/upload/v1600647756/Project%203%20-%20leaft/Screen_Shot_2020-08-12_at_9.17.12_PM_mj0nio.png">
  <p>
    As a pre-medical student turned Software Engineer, I strive to code with the purpose to make other’s lives better. <br/>
    My “patient-first” perspective has seamlessly translated into a “user-first” approach when creating products that are geared towards societal impact. <br/> 
    An ambitious problem-solver by nature, I always aim high to find solutions to systemic problems with detail-oriented, thoughtful code. <br/>
    At my core, I am a leader that diagnoses problems efficiently and tackles them with a growth mindset. <br/>

    Tech stack: Buefy, Vue.js, Python, Django, Bulma
  </p>
  <i class="fab fa-linkedin">jbj</i>


  </div>
</template>

<script>

export default {
  name: 'About',
  created: function() {
    this.$route.query.token = window.localStorage.getItem("token")
  }
}
</script>

<style scoped>

#me {
  width: 30vw;
  box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.1), 0 0px 0 1px rgba($scheme-invert, 0.02);
  margin: 30px auto

}


</style>
