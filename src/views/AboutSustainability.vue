<template>
  <div class="about-sustainability">
      <h1><span id="pg-heading">What is sustainability?</span></h1>

      <h2><span>Is it possible to eat meat sustainably?</span></h2> 
      <p class="box">Alternative diets are not available to everyone. Place of residence, income, health reasons, and many other factors
      can prevent someone from pursuing alternative diets. You can still eat meat in a sustainable way.
       Halal and kosher meat (meat and poultry killed in accordance with religious guidelines) is killed in a humane way vs. animals being raised and killed in 
       slaughter houses and factories. corporate farming also...
      Plus, you are supporting small businesses by purchasing meat from local butchers!

       </p>
  </div>
</template>

<script>


export default {
  name: 'AboutSustaiability',
  created: function() {
    this.$route.query.token = window.localStorage.getItem("token")
  }
}
</script>

<style scoped>


span {
  text-align: left;
  font-size: 30px;
  color: black;
  font-family: 'Caveat', cursive;
}

#pg-heading {
  font-size: 40px;
}

p {
  width: 70%;
  text-align: center;
  margin: auto;
  background-color: rgb(252, 255, 250, 0.7);
  box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.1), 0 0px 0 1px rgba($scheme-invert, 0.02)

}
</style>
