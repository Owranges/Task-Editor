<template>

    <li v-if ="test.todo == true" class="nopoint"  >   <b-icon icon='check-circle'  v-on:click="click(test.id)" ></b-icon>   {{test.name}}   <b-icon icon='x-square' v-on:click="supr(test.id)" ></b-icon></li>
    <li v-else-if="test.todo == false" class="nopoint teston" >  <b-icon icon='check-circle-fill'  v-on:click="click(test.id)" ></b-icon>   {{test.name}}   <b-icon icon='x-square' v-on:click="supr(test.id)"></b-icon></li>
    
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
  
 }
 .teston {
   text-decoration: line-through;
 }


</style>

