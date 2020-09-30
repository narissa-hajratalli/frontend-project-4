# Project Proposal - Frontend Development

## Live Website
https://leaft.netlify.app/

## Backend Development
https://github.com/narissa-hajratalli/backend-project-4

## Daily Documentation
- [Day 1](https://medium.com/@narissa_hajratalli/leaft-day-1-sept-14th-3aa38c30cca9)
- [Day 2](https://medium.com/@narissa_hajratalli/leaft-day-2-sept-15th-868f70ce6dd6)
- [Day 3](https://medium.com/@narissa_hajratalli/leaft-day-3-sept-16th-737a40c853a7)
- [Days 4-6](https://medium.com/@narissa_hajratalli/leaft-day-4-6-sept-17th-18th-21st-a7986f832d46)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Day 2| Working RestAPI | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches and Present | Complete

## Project Description
The purpose of this project is to create a full CRUD application to track how much meat a user consumes in a week, for people who want to transition to a healthier, more sustainable lifestyle.

For the frontend application, I would like to have a weekly tracker so the user can see which day of the week they consumed meat. I also want to have a daily traker to monitor their daily intake.


## Time/Priority Matrix 
- [Graphic](https://res.cloudinary.com/ds7vqqwb8/image/upload/v1600052787/Project%203%20-%20leaft/IMG_1542_gzw2vb.heic)

## Wireframes 
- [Desktop](https://res.cloudinary.com/ds7vqqwb8/image/upload/v1600050334/Project%203%20-%20leaft/Desktop_v5v1hv.png)
- [iPad](https://res.cloudinary.com/ds7vqqwb8/image/upload/v1600050334/Project%203%20-%20leaft/iPad_unsjfj.png)
- [Mobile](https://res.cloudinary.com/ds7vqqwb8/image/upload/v1600050334/Project%203%20-%20leaft/Mobile_ialxkl.png)

## MVP/Post MVP

#### MVP
- Create a login page (includes login and create account)
- Landing page, list days of the week
- Add a field to indicate if the person at meat this day
- Add a field to indicate the servings of meat a person had per day
- Field to show total meat consumption per week 
- Field to show daily meat consumption
- Page with facts
- Tab to delete account if the user wants to

#### Post MVP
- Put days of the week in a carousel on mobile
- Add sliding scale to indicate amount of meat consumed
- Add a date field to indicate which day of the week meat was consumed
- Add a monthly calendar to show dates meat was consumed 

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Research and Development| H | 5 hrs | 5 hrs | 5 hrs |
| Landing page, list days of the week | H | 4 hrs | 10 hrs | 10 hrs |
| Create a login page (includes login and create account) | H | 5 hrs | 4 hrs | 4 hrs |
| Add a field to indicate if the person at meat this day | H | 4 hrs | 2 hrs | 2 hrs |
| Add a field to indicate the servings of meat a person had per day | H | 4 hrs | 3 hrs | 3 hrs |
| Field to show total meat consumption per week | H | 4 hrs | 5 hrs | 5 hrs |
| Field to show daily meat consumption | H | 4 hrs | 4 hrs | 4 hrs |
| Page with facts | M | 3 hrs | 2 hrs | 2 hrs |
| Styling | M | 3 hrs | 4 hrs | 4 hrs |
| Logout button | H | 1 hr | 1 hrs | 1 hrs |
| Debugging| H | 7 hrs | 7 hrs |  7 hrs |
| Deployment| H | 1 hr | 30 mins | 1 hr |
| Total | - | 44 hrs | 48 hrs | 48 hrs |


#### Post MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Put days of the week in a carousel on mobile | M | 3 hr | - hrs | - hrs |
| Add sliding scale to indicate amount of meat consumed| M |  3 hrs | - hrs | - hrs |
| Add a date field to indicate which day of the week meat was consumed | L | 2 hr | 2 hrs | 2 hrs |
| Add a monthly calendar to show dates meat was consumed | L | 4 hr | 1 hrs | 1 hrs |
| Tab to delete account if the user wants to | H | 2 hrs | - hrs | - hrs |
| Total | - |  12 hrs | 3 hrs | 3 hrs |

## Additional Libraries
- Vue.js and Vue CLI (for connecting the frontend and the backend)
- Buefy (for models, sliding scales, and styling)
- Canva (for logo)
- [Additional Resources](https://docs.google.com/spreadsheets/d/1laHGT9kh-9N0061Kmw5pyd3lF4BJ7Na-DrvCe5UXskQ/edit#gid=0)

## Code Snippets
#### Binding the value of the id of the week in the dropdown menu with the select field and the find button, so that the user can find all the logs associated with one week.

HTML
```
<b-button type="is-success" v-on:click="findDailyLogs" v-model="weekID">Find</b-button>
```

JavaScript
```
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
      })
    },
```

## Issues and Resolutions

####
Issue: CORS error when trying to perform patch request. Tested and working in Postman but not working in the browser

```
Access to fetch at 'https://backend-project4.herokuapp.com/meat_consumption/daily_consumption/2/' from origin 'http://localhost:8080' has been blocked by CORS policy: Request header field access-control-allow-origin is not allowed by Access-Control-Allow-Headers in preflight response.
```

Resolution: Capitalized patch request to PATCH
```
editServings: function(event) {
      const { token, URL } = this.$route.query;
      const id = event.target.id;

      // Patch request--fetching one log by it's id
      fetch(`${URL}/meat_consumption/daily_consumption/${id}/`, {
        method: "PATCH",
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
    },
  }
}
```

