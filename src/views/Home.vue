<template>
  <div class="home">
    <h1> HOME PAGE </h1>
    <ul>
      <li v-for="dailyLog of dailyLogs" v-bind:key="dailyLog.id">{{ dailyLog.servings }}</li>
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
        Authorization: `JWT ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.dailyLogs = data
    })
  }
}
</script>
