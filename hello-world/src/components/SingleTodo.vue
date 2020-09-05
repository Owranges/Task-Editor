<template>

    <li v-if ="test.todo == true" class="nopoint"  >   <b-icon icon='check-circle'  v-on:click="click(test.id)" ></b-icon> <br>  Task: <br> {{test.name}} <hr class='forhr'><br> Author: {{test.author}} <br> <b-icon  icon='x-circle' v-on:click="supr(test.id)" ></b-icon></li>
    <li v-else-if="test.todo == false" class="nopoint teston" >  <b-icon  icon='check-circle-fill'  v-on:click="click(test.id)" ></b-icon> <br>  Task:  <br> {{test.name}} <hr class='forhr'><br> Author: {{test.author}} <br> <b-icon  icon='x-circle-fill' v-on:click="supr(test.id)"></b-icon></li>
    
</template>
<script>
export default {
  name: "SingleTodo",
  props: ['test'],
  data(){
    return {
      todoByID : ''
    }
  },
  methods: {
    async click(id) {
      try {
        await this.axios.put(`http://localhost:8081/todo/${id}`, {todo: !this.test.todo})
        this.$store.dispatch("Swap", id)
      } catch (error) {
        console.log(error);
      }
    },
     supr(id) {
        this.axios.delete(`http://localhost:8081/todo/${id}`)
        this.$store.dispatch("Supr", id)
      
    }
  }
};

</script>
<style>
 .nopoint{
   list-style: none;
   width: 20%;
   height: auto;
   padding-bottom: 1%;
   background: rgba(54, 65, 77, 0.95);
   margin: 2%;
   border-radius: 10px;
   border: solid 1px rgba(194, 65, 53, 0.39);
   color: whitesmoke
  
 }.nopoint:hover{
   background : rgb(165, 28, 28);
   color : whitesmoke;
 }svg:hover{
   cursor:pointer
 }
 .teston {
   text-decoration: line-through;
 }.forhr{
   margin-top: 5%;
   padding: 5%;
   margin-bottom: 5%;
   
   background-color : red;
   border: 0;
   

 }


</style>

