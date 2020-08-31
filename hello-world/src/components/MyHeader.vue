<template>
<header>
  
  <b-navbar type="dark" variant="dark">
    
    <b-navbar-nav>
      <p class="alink">ToDo List</p>
    <router-link class="alink" to="/new">Home</router-link>
    <router-link class="alink" to="/list">List</router-link>
    <router-link class="alink" to="/done">Done</router-link>
    <router-link class="alink" to="/todo">Todo</router-link>
    </b-navbar-nav>
  </b-navbar>
  
</header>
</template>
<script>
export default {
    name : "MyHeader"

}
</script>

<style>
.alink{
  margin-right: 5%;

}
</style>