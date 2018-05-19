<template>
  <div id="app">
    <div id="header">
      <h1>EasyCustomer</h1>
    </div>
    <div id="subheader">
      <span id="subheader">managage your customers, easy & free</span>
    </div>
    <!--Customer Components are rendered here-->
    <div id="mainContent">
          <router-view></router-view>
    </div>
    <router-link to="newcustomer"><i id="iconPlus" class="plus icon" v-on:click="openForm" v-show="!isCreating"></i></router-link>
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
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

#header{
  height: 10vh;
  background-color: #3700B3;
  color: #FFFFFF;
  text-align: center;
}

#header h1{
  font-family: Helvetica, Arial, sans-serif;
  font-size: 4em;
  line-height: 12vh;
}

#subheader{
  font-size: 1em;
  line-height: 2vh;
  font-family: Helvetica, Arial, sans-serif;
  height: 2vh;
  background-color: #3700B3;
  color: #FFFFFF;
  margin-bottom: 5vh;
  text-align: center;
}

#mainContent{
  margin: auto;
  width: 62%;
}

#iconPlus{
  font-size: 2.5em;
  position: fixed;
  bottom: 30px;
  right: 30px;
  color: #3700B3;
}

#isLoadingPopup{
  width: 270px;
  margin: 3% auto;
}

#emptyCustomersPopup{
  width: 270px;
  margin: 3% auto;
}
</style>
