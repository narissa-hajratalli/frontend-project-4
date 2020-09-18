<template v-if="loggedIn">
  <div class="home">
    <h1> HOME PAGE</h1>
    <ul>
      <li v-for="dailyLog of dailyLogs" v-bind:key="dailyLog.id">{{ dailyLog.daily_servings }}</li>
    </ul>

    <!-- DROPDOWN MENU CONTAINING EACH WEEK --> 
    <section>
        <b-field label="Select a Weekly Log">
            <b-select placeholder="Select a week">
                <!-- v-for directive loops over all the weeks in the database --> 
                <!-- and populates each week in the dropdown menu --> 
                <!-- also making each field in the dropdown menu associate with the week's id --> 
                <option
                    v-for="week in weeks"
                    :id="week.id" 
                    :value="week.id"
                    :key="week.id">
                    <!-- This selects just what the week's number is in the database and interpolates it with -->
                    <!-- the word "Week" to maintain consistent spelling -->  
                    {{ `Week ${week.week_number}` }}
                </option>
            </b-select><b-button type="is-success">Find</b-button><b-button type="is-success is-light">Add</b-button>
        </b-field>
    </section>
    
    
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: function(){
    return {
      dailyLogs: [],
      weeks: []
    }
  },
  created: function(){
    const {token, URL} = this.$route.query

    // API CALL, feting from the /daily_consumption endpoint, which gathers all the daily logs in
    // the database, regardless of week. 
    fetch(`${URL}/meat_consumption/daily_consumption/`, {
      method: 'get',
      headers: {
        'authorization': `JWT ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      this.dailyLogs = data
    })
  },

  ///////// POPULATING THE WEEKS IN A DROPDOWN MENU //////
  //// beforeCreated: Called synchronously immediately after the instance has been initialized
  //// https://vuejs.org/v2/api/#created
  beforeCreate: function() {
    // Grabs the token and the URL
    const {token, URL} = this.$route.query

    //API CALL - fetches all the weeks in the database
    fetch(`${URL}/meat_consumption/weekly_consumption/`, {
      method: 'get',
      headers: {
        'authorization': `JWT ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      this.weeks = data
      console.log(data)
    })
  },

  /////// METHOD ASSOCIATE WITH THE BUTTON TO FIND THE DAILY LOGS FOR ONE WEEK /////


  ///// METHOD TO HAVE THE USER STAY LOGGED IN WHEN THEY REFRESH ///
  stay_logged_in: function() {
      const getLogin = JSON.parse(window.sessionStorage.getItem('login'))
      if (getLogin) {
      this.user = getLogin.user
      this.token = getLogin.token
      this.loggedin = true
    }
  }
}
</script>
