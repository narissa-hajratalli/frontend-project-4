<template>
  <div class="home">
    <h1> HOME PAGE</h1>
    <ul>
      <li v-for="dailyLog of dailyLogs" v-bind:key="dailyLog.id">{{ dailyLog.daily_servings }}</li>
    </ul>
    
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: function(){
    return {
      dailyLogs: []
    }
  },
  created: function(){
    const {token, URL} = this.$route.query

    fetch(`${URL}/meat_consumption/daily_consumption/`, {
      method: 'get',
      headers: {
        'authorization': `JWT ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      this.dailyLogs = data
      console.log(data)
    })
  }
}
</script>
