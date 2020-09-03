<template>
  <ul>
    
      <SingleTodo v-for="li in RenderByPath" v-bind:key="li.id" :test='li' />
      
 </ul>
</template>
<script>
import SingleTodo from "./SingleTodo.vue"

export default {
  name: "ListTodo",
  components : {SingleTodo},
  props: ["whatToDisplay"],
  // async mounted(){
  //   await this.todo()
  // },
  data()  {
    return {
      listOfTodo : this.$store.state.Todo
    }
  },
  computed: {
    RenderByPath () {
      console.log(' je suis dans le computedd');
    return this.$store.getters.RenderByPath(this.whatToDisplay)
    }
  },
  mounted(){
    
  },
  

    // async todo(){
    //   try {
    //     let getTodo = await this.axios.get('http://localhost:8081/todo')
    //     this.listOfTodo = getTodo.data;
    //     console.log( getTodo);
    //     if(this.whatToDisplay == "done"){
    //       let todoFalse =  this.listOfTodo.filter(e => e.todo == false)
    //       this.listOfTodo = todoFalse
    //     }else if (this.whatToDisplay == "todo"){
    //       let todoTrue = this.listOfTodo.filter(e => e.todo == true)
    //       this.listOfTodo = todoTrue
    //     }
        
    //   } catch (error) {
    //     console.log(error);
    //   }
      
      
    // }
  
};
</script>