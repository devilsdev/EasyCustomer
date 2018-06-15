<template>
    <div id="newcustomer">
        <router-link to="/"><i class="material-icons">keyboard_backspace</i></router-link>
        <div id="newCustomerForm">
            <h1 class="md-title">New Customer</h1>
            <form method="post">
                <label for="customerno">Customer-No.*</label>
                <input v-model="customerNumber" id="customerno" type="text" placeholder="Enter a Customer-No."/>
                <label for="name">Firstname*</label>
                <input v-model="name" id="name" type="text" placeholder="Enter a Firstname"/>
                <label for="lastname">Lastname*</label>
                <input v-model="lastname" id="name" type="text" placeholder="Enter a Lastname"/>
                <label for="adress">Adress</label>
                <input v-model="adress" id="adress" type="text" placeholder="Enter an Adress"/>
                <label for="postcode">Postcode</label>
                <input v-model="postcode" id="postcode" type="text" placeholder="Enter a Postcode"/>
                <label for="adress">City</label>
                <input v-model="city" id="city" type="text" placeholder="Enter a City"/>
                <label for="phone">Phone</label>
                <input v-model="phone" id="phone" type="text" placeholder="Enter a Phonenumber"/>
                <label for="email">E-Mail</label>
                <input v-model="email" id="email" type="email" placeholder="Enter an Email"/>
            </form>
            <md-button id="saveButton" class="md-primary" v-on:click="sendForm()">Save</md-button>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert'
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
        // create new customer object
        let newCustomer = {
          name: this.name,
          lastname: this.lastname,
          phone: this.phone,
          email: this.email,
          adress: this.adress,
          city: this.city,
          postcode: this.postcode,
          customerNumber: this.customerNumber
        }
        // pass customer to function
        this.addCustomer(newCustomer)
      } else {
        // show error to user
        swal('Please fill in all needed fields!', {icon: 'error'})
      }
    },
    // adds a new customer
    addCustomer (customer) {
      this.$http.post('https://easycustomer-api.herokuapp.com/api/customer', customer)
        .then(response => {
          console.log('Customer added ' + customer.name + ' ' + customer.lastname)
          // Navigates back to Home
          this.$router.push({path: '/'})
        }, response => {
          swal('Could not add Customer', {icon: 'error'})
        })
    }
  }
}
</script>

<style>
#newcustomer{
    width: 100%;
    margin: 0 auto;
    max-width: 1000px;
}

input[type=text],
input[type=email]{
    width: 100%;
    padding: 0.4em 0.4em;
    margin: 0.4em 0;
    box-sizing: border-box;
    border: 1px solid grey;
}

input[type=text]:focus,
input[type=email]:focus{
    border: 1px solid #E94B3C;
    outline: none;
}

#saveButton{
    float: right;
    margin: 0;
    margin-top: 1%;
    background-color: #E94B3C;
    color:white;
}

</style>
