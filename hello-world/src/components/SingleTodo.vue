<template>

    <li v-if ="test.todo == true" class="nopoint"  v-on:click="click(test.id)" >   <b-icon icon='check-circle'></b-icon>   {{test.name}}</li>
    <li v-else-if="test.todo == false" class="nopoint teston"  v-on:click="click(test.id)">  <b-icon icon='check-circle-fill'></b-icon>   {{test.name}}</li>
    
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
      await this.axios.put(`http://localhost:8081/todo/+${id}`)
      // this.$emit("received")
      this.$store.dispatch("Swap", id)
      } catch (error) {
        console.log(error);
      }
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

