<template>
  <ul>
    
      <SingleTodo v-for="li in listOfTodo" v-bind:key="li.id" :test='li' v-on:changeicon='test'/>
      
 </ul>
</template>
<script>
import SingleTodo from "./SingleTodo.vue"

export default {
  name: "ListTodo",
  components : {SingleTodo},
  props: ["count"],
  mounted(){
    this.$nextTick(this.todo())
  },
  data()  {
    return {
      listOfTodo : ""

    }
  },
  methods: {
    test: function(id) {
      this.$emit('changeicon', id)
    },
    todo(){
      console.log('aa');
      this.axios.get('http://localhost:8080/todo')
      .then(response => {
        console.log('aa');
        console.log(response.data);
        this.listOfTodo = response.data;
        console.log(this.listOfTodo);
        return this.listOfTodo
      });

    }
    
  }
};
</script>