<template>
  <div class="about-sustainability">
      <h1> What is sustainability? </h1>

      <h2>Is it possible to eat meat sustainably?</h2> 
      <p>Eating meat is not bad--you can still eat meat in a sustainable way.<br/>
       Halal and kosher meat — meat and poultry killed in accordance with religious guidelines.
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
