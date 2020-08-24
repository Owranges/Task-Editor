<template>
  <div>
    <h1>Vue Top Artists by Country</h1>
    <ul>
      <li v-for="(SingleTodos, x) in SingleTodo" :key="x">{{x.name}}</li>
      <ListTodo />
    </ul>
  </div>
</template>
<script>
import SingleTodo from "./SingleTodo.vue";

export default {
  name: "ListTodo",
  props: ["SingleTodo"]
};
</script>