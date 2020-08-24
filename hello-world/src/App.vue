<template>
  <div id="app">
  
    <MyJumbotron/>
    
    
  </div>
</template>


<script>
import MyJumbotron from './components/MyJumbotron.vue'

//  - Then you will pass it to the MyJumbotron component as a Props.

// Fourth Step : Display List
// - The MyJumbotron component will call a ListTodo component and give to it the
// List he received (as Props as well).

// - The ListTodo component will iterate through the Array he received and will call
// // SingleTodo component for each item of the List to looks like the picture below

export default {
  name: 'App',
  components: {
    MyJumbotron,
    

    
  },
  data () {
      return {
      list: [
        {id: 0, name: "Ecrire le sujet", todo: true},
        {id: 1, name: "Faire le sujet", todo: true},
        {id: 2, name: "Vendre le sujet", todo: true},
        {id: 3, name: "Partir en vaccances", todo: true}

      ]
      }

    
    
    
  }
  
  
}





</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
