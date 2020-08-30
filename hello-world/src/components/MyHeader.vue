<template>
<header>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item >
    <router-link to="/new">Home</router-link>
    <router-link to="/List">List</router-link>
    </b-nav-item>
      <b-nav-item text="New" right/>
      <b-nav-item text="ToDo" right/>
      <b-nav-item text="Done" right/>
      <b-nav-item text="List" right/>
   
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

</style>