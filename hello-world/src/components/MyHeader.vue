<template>
<header>
  <nav class="center">
    <h1 class="header">ToDo List</h1>
    <router-link class="alink" to="/new">Home</router-link>
    <router-link class="alink" to="/list">List</router-link>
    <router-link class="alink" to="/done">Done</router-link>
    <router-link class="alink" to="/todo">Todo</router-link>
  </nav>
</header>
</template>
<script>
export default {
    name : "MyHeader"

}
</script>

<style>
.center{
  display :flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  
}
.alink{
  margin-right: 5%;
  color : whitesmoke;
  font-size : 1.2em

}
header{
  background-color: teal;
  
  color : whitesmoke;
}
</style>