<template>
    <div id="newcustomer">
        <router-link to="/">Go back</router-link>
        <md-card>
            <md-card-header>
                <div class="md-title">New Customer</div>
            </md-card-header>
            <m-card-content>
                <md-field>
                    <label>Customer-No.</label>
                    <md-input v-model="customerNumber"></md-input>
                </md-field>
                <md-field>
                    <label>Firstname</label>
                    <md-input v-model="name"></md-input>
                </md-field>
                <md-field>
                    <label>Lastname</label>
                    <md-input v-model="lastname"></md-input>
                </md-field>
                <md-field>
                    <label>Adress</label>
                    <md-input v-model="adress"></md-input>
                </md-field>
                <md-field>
                    <label>Postcode</label>
                    <md-input v-model="postcode"></md-input>
                </md-field>
                <md-field>
                    <label>City</label>
                    <md-input v-model="city"></md-input>
                </md-field>
                <md-field>
                    <label>Phone</label>
                    <md-input v-model="phone"></md-input>
                </md-field>
                <md-field>
                    <label>E-Mail</label>
                    <md-input v-model="email"></md-input>
                </md-field>
            </m-card-content>
            <md-card-actions>
                <md-button v-on:click="sendForm()">Add Customer</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>

<script>
import swal from 'sweetalert'
import router from 'vue-router'
export default {
  data () {
    return {
      customerNumber: '',
      name: '',
      lastname: '',
      adress: '',
      postcode: '',
      city: '',
      phone: '',
      email: ''
    }
  },
  methods: {
    sendForm () {
      console.log(this.name.length)
      if (this.name.length > 0 && this.lastname.length > 0 && this.customerNumber.length > 0) {
        // create constants to make sure nothing is edited after the user pressed send
        const customerNumber = this.customerNumber
        const name = this.name
        const lastname = this.lastname
        const adress = this.adress
        const postcode = this.postcode
        const city = this.city
        const phone = this.phone
        const email = this.email
        this.addCustomer({
          name,
          lastname,
          phone,
          email,
          adress,
          city,
          postcode,
          customerNumber
        })
      }
    },
    // adds a new customer
    addCustomer (customer) {
      this.$http.post('https://easycustomer-api.herokuapp.com/api/customer', customer)
        .then(response => {
          console.log('Customer added ' + customer.name + ' ' + customer.lastname)
          // redirect to home
          router.go('/')
        }, response => {
          swal('Could not add Customer', {icon: 'error'})
        })
    }
  }
}
</script>

<style>
#iconPlus{
    font-size: 2em;
}

#newcustomer{
    margin: auto;
    min-width: 200px;
    max-width: 700px;
}

</style>
