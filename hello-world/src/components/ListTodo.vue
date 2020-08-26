<template>
  <div>

      <SingleTodo v-for="li in count" v-bind:key="li.id" :test='li' v-on:changeicon='test'/>

  </div>
</template>
<script>
import SingleTodo from "./SingleTodo.vue"

export default {
  name: "ListTodo",
  components : {SingleTodo},
  props: ["count"],
  methods: {
    test: function(id) {
      this.$emit('changeicon', id)
    }
  }
};
</script>