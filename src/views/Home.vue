<template v-if="loggedIn">
  <div class="home">
    <h1> leaft </h1>
<!---------------------------------------------------------------------------------------------------------------> 

    <!----------- CREATE BUTTON AND MODAL ----------> 
  


<!---------------------------------------------------------------------------------------------------------------> 

    <!----------- DROPDOWN AREA ----------> 
    <section>
        <!----------- Dropdown menu with weeks ----------> 
        <b-field label="Select a Weekly Log">
            <b-select v-model="weekID" placeholder="Select a week" >
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
              </b-select>



            <!----------- Find button ---------->                
            <b-button type="is-success" v-on:click="findDailyLogs">Find</b-button>

            <!----------- Add a week button ---------->  
      </b-field>
    </section>

<!---------------------------------------------------------------------------------------------------------------> 

      <!----------- DROPDOWN MENU CONTAINING EACH WEEK ----------> 
        <section v-for="dailyLog of dailyLogs" v-bind:key="dailyLog.id" v-bind:id="dailyLog.id"> 
          <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="contentIdForA11y3">
                <p class="card-header-title">
                    {{ `Date: ${dailyLog.day_consumed}` }}
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content" v-bind:id="dailyLog.id">
                  {{ 
                  `
                  Consumed meat?: ${dailyLog.consumed}
                  Daily Servings: ${dailyLog.daily_servings}
                  `
                 }}
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item" v-bind:id="dailyLog.id">Edit</a>
                <a class="card-footer-item" v-bind:id="dailyLog.id" v-on:click="deleteLog">Delete</a>
            </footer>
        </b-collapse>
      </section>

<!--------------------------------------------------------------------------------------------------------------->

    <!----------- DISPLAY WEEKLY TOTAL ---------->
    <section id="weekly-total">
      <h1>{{ `Your weekly total is `}}</h1>
    </section> 

  </div>
</template>


<script>
export default {
  name: 'Home',
  data: function(){
    return {
      dailyLogs: [],
      weeks: [],
      weekID: 0
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
      console.log(data)
    })
    //   const getLogin = JSON.parse(window.sessionStorage.getItem('login'))
    //   if (getLogin) {
    //   this.user = getLogin.user
    //   this.token = getLogin.token
    //   this.loggedin = true
    // }
  },

////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////// POPULATING THE WEEKS IN A DROPDOWN MENU //////
  //// beforeCreated: Called synchronously immediately after the instance has been initialized
  //// want this to be before created so the weeks are already populated in the dropdown
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
      console.log(this.weekID)
    })

  },

/////////////////////////////// METHODS /////////////////////////////////////////

  methods: {

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////// CREATING A WEEK ///////////////

    //   const { token, URL } = this.$route.query;

    //   fetch(`${URL}/meat_consumption/weekly_consumption/`, {
    //     method: "post",
    //     headers: {
    //       authorization: `JWT ${ token }`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ week_number: this.value }),
    //   }).then(() => {
    //     console.log("new week created!")
    //   })
    // },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////// FIND ALL THE DAILY LOGS ASSOCIATED WITH ONE WEEK ///////////////
  //// will be attached to the "Find" button in the form of an on-click event 
  findDailyLogs: async function(event) {
      // this.week_id = id
    
      // Grabs the token and the URL
      // const {token, URL} = this.$route.query

      // Grabing the id from the week
      const id = event.target.id
      console.log(id)

      // API CALL - fetches the days in the database that belong to one week
      // fetch(`${URL}/meat_consumption/weekly_consumption/${id}/daily_consumption`, {
      //   method: 'get',
      //   headers: {
      //     'authorization': `JWT ${token}`
      //   }
      // })
      // .then(response => response.json())
      // .then(data => {
      //   this.dailyLogs = data
      //   console.log(data)
      // })

    },
  /////////////////////////////////////////////////////////////////////////
  //////////////// DELETE ONE DAILY LOG ///////////////
  deleteLog: function(event){
      // Destructuring the token and the URL from the request
      const { token, URL } = this.$route.query;

      // Grabbing the id from the delete button, which is the target
      const id = event.target.id;

      // Fetch request to the endpoint with the id on the delete button
      fetch(`${URL}/meat_consumption/daily_consumption/${id}/`, {
        method: "delete",
        headers: {
          'authorization': `JWT ${token}`,
        },

      // Delete method performed, then re-populate the screen with the remaining logs 
      // so the user doesn't have to request
      }).then(() => {
        console.log("is deleted!") // NEED TO RERUN THE SHOW FUNCTION WHEN ITS DONE
      });
    },
  }

}

</script>
