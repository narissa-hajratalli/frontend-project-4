<template>
  <div class="about">
  <img id="me" src="https://res.cloudinary.com/ds7vqqwb8/image/upload/v1600647756/Project%203%20-%20leaft/Screen_Shot_2020-08-12_at_9.17.12_PM_mj0nio.png">
  <p class="box">
    <span>Creator: Narissa Hajratalli</span><br/>
    As a pre-medical student turned Software Engineer, I strive to code with the purpose to make other’s lives better.
    My “patient-first” perspective has seamlessly translated into a “user-first” approach when creating products that are geared towards societal impact.
    An ambitious problem-solver by nature, I always aim high to find solutions to systemic problems with detail-oriented, thoughtful code.
    At my core, I am a leader that diagnoses problems efficiently and tackles them with a growth mindset. <br/>
    
    I'm interested in the intersection of tech and social impact, whether it be in environmental, healthcare, or social justice related spaces.</p>



  <!-- <p>Tech stack: Buefy, Vue.js, Python, Django, Bulma</p> -->
  <a href="https://www.linkedin.com/in/narissa-hajratalli/" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a>
  <a href="https://github.com/narissa-hajratalli/backend-project-4" target="_blank"><i class="fab fa-github fa-3x"></i></a>
  <a href="https://medium.com/@narissa_hajratalli" target="_blank"><i class="fab fa-medium fa-3x"></i></a>


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

p  {
  width: 60%;
  margin: auto;
  background-color: rgb(252, 255, 250, 0.7);
  box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.1), 0 0px 0 1px rgba($scheme-invert, 0.02)
}

.fab {
  color: teal;
  margin-bottom: 20px;
  padding: 10px
}

span {
  font-family: 'Caveat', cursive;
  font-size: 30px
}


</style>
