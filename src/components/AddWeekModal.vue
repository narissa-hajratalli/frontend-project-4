<template v-if="loggedIn">
  <div class="week-modal">
        <section>
            <button class="button is-primary is-medium"
                @click="isComponentModalActive = true">
                Add
            </button>
            <b-modal 
                v-model="isComponentModalActive"
                has-modal-card
                full-screen 
                :can-cancel="false">
                <modal-form v-bind="formProps"></modal-form>
            </b-modal>
        </section>
    </div>
</template>

<script>
    const ModalForm = {
        props: ['email', 'password'],
        template: `
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Login</p>
                </header>
                <section class="modal-card-body">
                    <b-field label="Email">
                        <b-input
                            type="email"
                            :value="email"
                            placeholder="Your email"
                            required>
                        </b-input>
                    </b-field>
                    <b-field label="Password">
                        <b-input
                            type="password"
                            :value="password"
                            password-reveal
                            placeholder="Your password"
                            required>
                        </b-input>
                    </b-field>
                    <b-checkbox>Remember me</b-checkbox>
                </section>
                <footer class="modal-card-foot">
                    <button class="button" type="button" @click="$parent.close()">Close</button>
                    <button class="button is-primary">Login</button>
                </footer>
            </div>
        `
    }
    export default {
        components: {
            ModalForm
        },
        data() {
            return {
                isComponentModalActive: false,
                formProps: {
                    email: 'evan@you.com',
                    password: 'testing'
                }
            }
        }
    },

        methods: {
        ////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////// CREATING A WEEK ///////////////
        //// Modal to pop up and enter a number
        //// Actually creating the week
            addWeek: function() {
            const { token, URL } = this.$route.query;

            fetch(`${URL}/meat_consumption/weekly_consumption/`, {
                method: "post",
                headers: {
                authorization: `JWT ${ token }`,
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ week_number: this.value }),
            }).then(() => {
                console.log("new week created!")
                console.log(this.value)
                this.populateWeeks()
                })
            },
        }
    }
</script>