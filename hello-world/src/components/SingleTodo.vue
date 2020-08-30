<template>

    <li v-if ="test.todo == true" class="nopoint"  v-on:click='$emit("changeicon",test.id)'>   <b-icon icon='check-circle'></b-icon>   {{test.name}}</li>
    <li v-else-if="test.todo == false" class="nopoint teston" v-on:click='$emit("changeicon",test.id)'>  <b-icon icon='check-circle-fill'></b-icon>   {{test.name}}</li>
    
</template>
<script>
export default {
  name: "SingleTodo",
  props: ['test']
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

