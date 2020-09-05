<template>
<div>
    <MyHeader />
    
    <router-view :key="$route.path"/>
</div>
</template>

<script>
import MyHeader from "./MyHeader.vue"


export default {
  name: "MyJumbotron",
  components : { MyHeader},
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
div{
  background-image: url("../assets/workspace.jpg");
  height: 100vh;
}
h1 {
  margin: 40px 0 0;
  font-size: 2em;
  width: 20%;
  
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








