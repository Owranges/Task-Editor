<template>
  <div>
    <h1>Vue Top Artists by Country</h1>
        
      
      <SingleTodo v-for="li in count" v-bind:key="li.id" :test='li'/>

  </div>
</template>
<script>
import SingleTodo from "./SingleTodo.vue"

export default {
  name: "ListTodo",
  components : {SingleTodo},
  props: ["count"]

};
</script>