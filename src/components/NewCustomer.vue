<template>
    <div class="ui middle aligned center aligned grid">
        <i id="iconPlus" class="plus icon" v-on:click="openForm" v-show="!isCreating"></i>
        <div class="ui middle aligned center aligned grid" v-show="isCreating">
            <div class="column">
                <div class="ui large form">
                    <div class="ui stacked segment">
                        <div class="field">
                            <label>Customer Number</label>
                            <input v-model="customerNumber" type="text" ref="customerNumber" defaultValue="">
                        </div>
                        <div class="field">
                            <label>Name</label>
                            <input v-model="name" type="text" ref="name" defaultValue="">
                        </div>
                        <div class="field">
                            <label>Lastname</label>
                            <input v-model="lastname" type="text" ref="lastname" defaultValue="">
                        </div>
                        <div class="field">
                            <label>Adress</label>
                            <input v-model="adress" type="text" ref="adress" defaultValue="">
                        </div>
                        <div class="field">
                            <label>Postcode</label>
                            <input v-model="postcode" type="text" ref="postcode" defaultValue="">
                        </div>
                        <div class="field">
                            <label>City</label>
                            <input v-model="city" type="text" ref="city" defaultValue="">
                        </div>
                        <div class="field">
                            <label>Phone</label>
                            <input v-model="phone" type="text" ref="phone" defaultValue="">
                        </div>
                        <div class="field">
                            <label>E-Mail</label>
                            <input v-model="email" type="text" ref="email" defaultValue="">
                        </div>
                        <div class="ui two button attached buttons">
                            <button class="ui basic blue button" v-on:click="sendForm()">
                                Create new Customer
                            </button>
                            <button class="ui basic red button" v-on:click="closeForm()">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
      email: '',
      isCreating: false
    }
  },
  methods: {
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    },
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
        this.$emit('create-customer', {
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
      this.isCreating = false
    }
  }
}
</script>

<style>
#iconPlus{
    font-size: 2em;
}

</style>
