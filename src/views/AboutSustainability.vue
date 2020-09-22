<template>
  <div class="about-sustainability">
      <h1><span id="pg-heading">What is sustainability?</span></h1>
      <p class="box"><a href=https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions>The definition of “sustainability”</a> 
      is the study of how natural systems function, 
        remain diverse and produce everything it needs for the ecology to remain in balance. It also 
        acknowledges that human civilisation takes resources to sustain our modern way of life. There are 
        countless examples throughout human history where a civilisation has damaged its own environment and seriously 
        affected its own survival chances</p>

      <h2><span>Is it possible to eat meat sustainably?</span></h2> 
      <p class="box">Alternative diets are not available to everyone. Place of residence, income, health reasons, and many other factors
      can prevent someone from pursuing alternative diets. You can still eat meat in a sustainable way.
       Halal and kosher meat (meat and poultry killed in accordance with religious guidelines) is killed in a humane way vs. animals being raised and killed in 
       slaughter houses and factories. <a href=https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions>Corporate farming also creates a ton of carbon emissions</a> that destroys the environment.
      Plus, you are supporting small businesses by purchasing meat from local butchers!
       </p>

       <h2><span>Can individual's changing their diet really stop climate change?</span></h2> 
      <p class="box">Our diet-related environmental burdens are in no way minuscule. Vegetarianism and veganism are a great ways to stay healthy and to remain personally accountable.
        However, policy changes surrounding the <a href="https://www.commonobjective.co/article/can-fashion-stop-climate-change">fossile fuel industry, agriculture, and fast fashion</a>
        are essential to creating lasting inpacts that would save the future of our planet. Call your local representatives
        to show your support for the Green New Deal!</p>

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
  font-size: 50px;
  color: seagreen
}

p {
  width: 70%;
  text-align: center;
  margin: auto;
  background-color: rgb(252, 255, 250, 0.7);
  box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.1), 0 0px 0 1px rgba($scheme-invert, 0.02)

}

a:link {
  color: green
}

</style>
