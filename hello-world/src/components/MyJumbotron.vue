<template>
  <div class="jumbotron">
    <h1 class="display-4">Todo List</h1>
    <p class="lead">New Features we will have to done for this project</p>
    <hr class="my-4" />
    <p>Easy to use, we created this web app just for you</p>
    <p class="lead"></p>
    <ListTodo :count='list' />
  


  </div>
</template>

<script>
import ListTodo from "./ListTodo.vue";

export default {
  name: "MyJumbotron",
  components : {ListTodo},
  props: ['list'] 
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








