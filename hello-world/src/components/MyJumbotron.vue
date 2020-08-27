<template>
  <b-jumbotron>
    <template v-slot:header>Todo List</template>

    <template v-slot:lead>
      New Features we will have to done for this project
    </template>

    <hr class="my-4">

    <p>
      Easy to use, we created this web app just for you
    </p>
     <Sentence :list='list'/>

    <ListTodo :count='list' v-on:changeicon ='test2'/>
    
    <AddForm v-on:mdr='task' />

    <!-- <b-button variant="primary" href="#">Do Something</b-button>
    <b-button variant="success" href="#">Do Something Else</b-button> -->
  </b-jumbotron>
</template>

<script>
import ListTodo from "./ListTodo.vue";
import AddForm from "./AddForm.vue";
import Sentence from "./Sentence.vue";

export default {
  name: "MyJumbotron",
  components : {ListTodo, AddForm, Sentence},
  props: ['list'],
   methods: {
    test2: function(id) {
      this.$emit('changeicon', id)
    },
    task: function(champ){
      
      this.$emit('mdr', champ)
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>








