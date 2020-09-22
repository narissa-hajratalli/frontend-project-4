<template >
  <div class="home">
    <img src="https://res.cloudinary.com/ds7vqqwb8/image/upload/v1600553249/Project%203%20-%20leaft/160055314716415549_tdbshz.png" alt="leaft logo">  
<!---------------------------------------------------------------------------------------------------------------> 
  


<!---------------------------------------------------------------------------------------------------------------> 

    <!----------- DROPDOWN AREA ----------> 
    <div id="dropdown">
        <!----------- Dropdown menu with weeks ----------> 
        <b-field class="header-text-select small-headers" label="Select a Weekly Log">
            <b-select v-model="weekID" placeholder="Select a week">
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
            
            <b-button type="is-success" v-on:click="findDailyLogs" v-model="weekID">Find</b-button>

            <!----------- Add a week button / input field ---------->  
            <b-collapse :open="false" aria-id="contentIdForA11y1">
                <b-button
                    class="button btn-outline-succes"
                    slot="trigger"
                    aria-controls="contentIdForA11y1" type="is-success is-light">Add</b-button>
                <div class="notification">
                    <div class="content">
                        <h7 class="header-text-select">
                            New Week
                        </h7>
                        <b-field>
                          <b-field grouped>
                      
                              <b-numberinput min="0" v-model="weekNumber" expanded/>
                              <p class="control">
                                  <button class="button" v-on:click="createWeek">Save</button>
                              </p>
                            </b-field>
                        </b-field>
                    </div>
                </div>
            </b-collapse>
            

      </b-field>
      </div>

<!--------------------------------------------------------------------------------------------------------------->
  <!----------- CREATE INPUT FIELDS ----------->
    
    <b-collapse :open="false" aria-id="contentIdForA11y1" id="create-log-with-button">
        <b-button
          class="button is-primary"
          slot="trigger"
          aria-controls="contentIdForA11y1" id="add-log" type="is-success">Add a daily log</b-button>
        <div>
          <div class="content">
            <section id="create-log-form" class="box">
              <b-field label="Select a date" class="header-text-card">
                <b-datepicker v-model="date"
                    :first-day-of-week="1"
                    placeholder="Select a date...">

                    <button class="button is-success"
                        @click="date = new Date()">
                        <b-icon icon="calendar-today"></b-icon>
                        <span>Today</span>
                    </button>

                    <button class="button is-danger"
                        @click="date = null">
                        <b-icon icon="close"></b-icon>
                        <span>Clear</span>
                    </button>
                </b-datepicker>
              </b-field>

              <b-field class="header-text-card" label="Ate meat? (be honest; it's okay!)">
                <b-select placeholder="Ate meat? Be honest--it's okay!" v-model="consumed">
                  <option>Yes</option>
                  <option>No</option>
                </b-select>
              </b-field>

              <b-field class="header-text-card" label="How many servings?">
                <b-numberinput type="is-success" min=0 v-model="servings"></b-numberinput>
              </b-field>
              
              <b-button type="is-success" v-on:click="createDailyLog" v-model="weekID">Add log</b-button>
            </section>
          </div>
        </div>
      </b-collapse>

<!---------------------------------------------------------------------------------------------------------------> 

      <!----------- CARDS WITH DAILY LOGS ----------> 
      <div class="daily-logs-box">
        <section v-for="dailyLog of dailyLogs" v-bind:key="dailyLog.id" v-bind:id="dailyLog.id" class="daily-logs"> 
          <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="contentIdForA11y3">
                <p class="header-text-home">
                  {{ `Date: ${dailyLog.day_consumed}` }}
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content log-content" v-bind:id="dailyLog.id">
                  {{ 
                  `
                  Consumed meat?: ${dailyLog.consumed} \
                  Daily Servings: ${dailyLog.daily_servings}
                  `
                 }}
                </div>
        
        
              <!----------- Update servings field ----------> 
            
              <b-field class="header-text-card" label="Update daily servings">
                  <b-field grouped>
                      <b-numberinput min="0" v-bind:id="dailyLog.id" v-model="updateServings" expanded/>
                  </b-field>
              </b-field>
                  <p class="control">
                    <button class="button" v-bind:id="dailyLog.id" v-on:click="editServings"
                    >Update</button>
                  </p>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item" v-bind:id="dailyLog.id" v-on:click="deleteLog">Delete</a>
            </footer>
        </b-collapse>
      </section>
    </div>

<!--------------------------------------------------------------------------------------------------------------->

    <!----------- DISPLAY WEEKLY TOTAL ---------->
    <section id="weekly-total">
        <h1 v-if="dailyLogs.length >= 1">{{ `Your weekly total: ${dailyLogs[0].weekly_total} servings`}}</h1>
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
      weekID: 0,
      date: new Date(),
      servings: 0,
      consumed: "",
      weekNumber: 0,
      updateServings: 0,
      weeklyTotal: 0
    }
  },

////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////// FILL DROPDOWN BEFORE ANYTHING //////
  created: function() {
      this.showWeeks()
      console.log("create showWeeks running")
  },

  beforeCreate: function(){
    this.$route.query.token = window.localStorage.getItem("token")
    console.log("beforeCreate token running")
  },

/////////////////////////////// METHODS /////////////////////////////////////////

  methods: {

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////// POPULATING THE WEEKS IN A DROPDOWN MENU //////
  showWeeks: function() {
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
      // console.log(data)
      // console.log(this.weekID)
    })
    console.log('im running')

  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////// CREATING A WEEK ///////////////
    createWeek: function() {
      const { token, URL } = this.$route.query;

      fetch(`${URL}/meat_consumption/weekly_consumption/`, {
        method: "post",
        headers: {
          authorization: `JWT ${ token }`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            week_number: this.weekNumber}),
      }).then(() => {
        // console.log(this.weekNumber)
        this.showWeeks()
      })
    },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////// CREATING A DAILY LOG ///////////////
  createDailyLog: function() {
    const { token, URL } = this.$route.query;

      fetch(`${URL}/meat_consumption/daily_consumption/`, {
        method: "post",
        headers: {
          'authorization': `JWT ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          daily_servings: this.servings,
          consumed: this.consumed,
          day_consumed: this.date,
          weekly_consumption_id: this.weekID

         }),
      }).then(() => {
        // console.log(`${URL}/meat_consumption/weekly_consumption/${this.weekID}/daily_consumption`)
        // console.log(this.consumed)
        // console.log(this.servings)
        // console.log(this.date)
        // console.log(this.weekID)
        // this.dailyLogs = data
        this.findDailyLogs();
      });
  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////// FIND ALL THE DAILY LOGS ASSOCIATED WITH ONE WEEK ///////////////
  //// will be attached to the "Find" button in the form of an on-click event 
  findDailyLogs: async function() {   
      // Grabs the token and the URL
      const {token, URL} = this.$route.query

      // API CALL - fetches the days in the database that belong to one week
      fetch(`${URL}/meat_consumption/weekly_consumption/${this.weekID}/daily_consumption`, {
        method: 'get',
        headers: {
          'authorization': `JWT ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        this.dailyLogs = data
        // console.log(data)
      })
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
        this.findDailyLogs()
      })
    },

  /////////////////////////////////////////////////////////////////////////
  //////////////// UPDATE ONE DAILY LOG ///////////////
  editServings: function(event) {
      const { token, URL } = this.$route.query;

      const id = event.target.id;
      // console.log(id)

      // Patch request--fetching one log by it's id
      fetch(`${URL}/meat_consumption/daily_consumption/${id}/`, {
        method: "patch",
        headers: {
          authorization: `JWT ${token}`,
          "Content-Type": "application/json"
        },
        // used v-model on the input field to make the number value the user inputs
        // equal to this.updateServings and using that as the new valur for servings
        body: JSON.stringify({
          daily_servings: this.updateServings
          })
      }).then(() => {
        this.findDailyLogs();
      });
      console.log(`${URL}/meat_consumption/daily_consumption/${id}/`)
    },
  }
}
</script>

<style>
body {
  /* background-color: rgb(238, 255, 217); */
  background-image: url("https://res.cloudinary.com/ds7vqqwb8/image/upload/v1600731815/Project%203%20-%20leaft/Vintage_Floral_Frame_Desktop_Wallpaper_ti3z11.png");
}

#add-log {
  margin: 30px;
}

#dropdown {
  /* width: 100%; */
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#create-log-form {
  /* border: 1px black solid; */
  width: 50vw;
  max-width: 500px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.1), 0 0px 0 1px rgba($scheme-invert, 0.02)
  /* background-image: url("https://res.cloudinary.com/ds7vqqwb8/image/upload/v1600536028/Project%203%20-%20leaft/Untitled_design_copy_zzi5gz.png") */
}

.daily-logs {
  max-width: 400px;
  padding: 30px
}

.daily-logs-box {
  display: flex;
  flex-wrap: wrap;
}

#field {
  margin: 0px auto
}

#weekly-log {
  font-size: 40px;
}


.header-text-card {
  font-family: 'Caveat', cursive;
  font-size: 30px
}

.header-text-select, .header-text-home, .label {
  font-family: 'Caveat', cursive;
  font-size: 25px
}



</style>