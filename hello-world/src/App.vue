<template>
  <div id="app">
    <MyJumbotron  v-on:changeicon='test3' v-on:mdr='task' />
  </div>
</template>


<script>
import MyJumbotron from "./components/MyJumbotron.vue";

export default {
  name: "App",
  components: {
    MyJumbotron
  },
  async mounted(){
    await this.getForStore()
  },
  methods: {
     async getForStore()  {
      let todo =  await this.axios.get("http://localhost:8081/todo")
      console.log(todo.data);
      for (const ele of todo.data) {
        this.$store.dispatch("Add", ele)
      }
      
    },
    test3: function(id) {
   
      this.list.forEach(element =>{
        if(element.id == id && element.todo == true ){
          element.todo = false
        }else if(element.id == id && element.todo == false )
          element.todo = true
      })
    },
    task: function(champ) {
      if(champ != undefined && champ != ''){
        this.list.push({ 
          id : this.list.length,
          name : champ,
          todo : true
        })
      }
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
}
#aa{
  display : none
}
</style>
