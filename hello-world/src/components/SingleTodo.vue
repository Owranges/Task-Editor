<template>
  <div>
    <SingleTodo v-for="li in list" v-bind:key="li.name" />
  </div>
</template>
<script>
export default {
  name: "SingleTodo",
  props: ["list"]
};
</script>
