<template>
 <b-form inline class="mar">
   <b-input-group prepend="New Task" class="mb-2 mr-sm-2 mb-sm-0 "/>
    <b-input
      id='inline-form-input'
      class="w-30"
      v-model="champ"
      type="text"
      placeholder="Todo Name"
      v-on:keyup="keymonitor"
    /><b-button v-on:click="fetchData">Add </b-button>
 </b-form>
  
</template>

<script>

export default {
  name: "AddForm",
 
  data() {
    return {
      champ: "",
     
    };
  },
  methods: {
    fetchData:  function() {
       this.axios.post('http://localhost:8080/todo', {
          name: this.champ,
          id: (Math.random * Math.random),
          createdAt : "22/07",
          todo: true
        }),
              
              
              
      
      this.champ = "";
    },
    keymonitor: function(event) {
      console.log(event.key);
      if (event.key == "Enter") {
        this.fetchData();
      }
    }
   
  }
}
</script>

<style >
.mar{
  margin-left : 37.5% ;
}


</style>
