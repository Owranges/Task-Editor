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
    fetchData() {
      console.log(this.champ);
      if(this.champ.length == ""){
        window.alert('Please enter a task')
      }else {
        let todoPost = {
          name: this.champ,
          id: Date.now(),
          createdAt : String(new Date),
          todo: true
        }
        console.log(todoPost);
        this.axios.post('http://localhost:8081/todo',  todoPost)
        .then(() => {
          this.$store.dispatch('Post', todoPost)
          } 
        )
        .catch();
        this.champ = "";
      }
    },
    keymonitor: function(event) {
      console.log(event.key);
      event.preventDefault()
      if (event.key == "Enter") {
        this.fetchData(event);
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
