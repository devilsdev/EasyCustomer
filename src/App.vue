<template>
  <div id="app">
    <md-toolbar id="header" class="md-accent" md-elevation="1">
      <i class="material-icons">face</i>
      <h3 class="md-title" style="flex: 1">EasyCustomer</h3>
      <router-link to="newcustomer"><md-button class="md-primary">Add Customer</md-button></router-link>
    </md-toolbar>
    <!--Customer Components are rendered here-->
    <div id="mainContent">
          <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CustomerList from './components/CustomerList'
import NewCustomer from './components/NewCustomer'

export default {
  name: 'App',
  components: {
    CustomerList,
    NewCustomer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

#header{
  margin-bottom: 2vh;
}

#mainContent{
  margin: auto;
  width: 85%;
}

#isLoadingPopup{
  width: 270px;
  margin: 3% auto;
}

#emptyCustomersPopup{
  width: 270px;
  margin: 3% auto;
}

/*prevent link coloring*/
a { color: inherit; }
a:hover{color: inherit}

/*MOBILE STYLES*/
@media only screen and (max-width: 400px){
  #mainContent{
    width: 100%;
  }
}
</style>
