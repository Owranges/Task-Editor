<template>
 <form @submit.prevent="onSubmit" class="forForm">
   <h2>"ONCE U SEE RESULTS, IT BECOMES AN ADDICTION"</h2>
   <p>New Task </p>
    <input
      v-model="champ"
      type="text"
      placeholder="Enter a New Task"
      v-on:keyup="keymonitor"
    />
    <input
      v-model="newauthor"
      type="text"
      placeholder="Enter an Author Name"
      v-on:keyup="keymonitor"
    />
    <b-button v-on:click="keymonitor">ADD</b-button>
 </form>
  
</template>

<script>

export default {
  name: "AddForm",
  data() {
    return {
      champ: "",
      newauthor:"",
    };
  },
  methods: {
    fetchData() {
      console.log(this.champ);
      if(this.champ.length == "" && this.newauthor.length == "" ){
        window.alert('Please enter a Task and an Author')
      }else if (this.newauthor.length == ""){
        window.alert('Please enter an Author')
      }else if (this.champ.length == ""){
        window.alert('Please enter an Task')
      }
      else {
        let todoPost = {
          name: this.champ,
          id: Date.now(),
          createdAt : String(new Date),
          todo: true,
          author: this.newauthor
        }
        console.log(todoPost);
        this.axios.post('http://localhost:8081/todo',  todoPost)
        .then(() => {
          return this.$store.dispatch('Post', todoPost)
          
          } 
        ).catch(err => {
          console.log(err);
        });
        this.champ = "";
        this.newauthor = "";
      }
    },
    keymonitor: function(event) {
      console.log(event.key);
      event.preventDefault()
      if (event.key == "Enter") {
        this.fetchData(event);
      }else if(event.key == onclick) 
        this.fetchData()
    },
    onSubmit: function(event) {
      event.preventDefault()
    }
  }
}
</script>

<style >
.forForm{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
p{
  margin-top: 10%;
  font-size: 1.5em;
  color: whitesmoke;
}
h2{
  margin-top: 5%;
  width: 60%;
  font-size : 2.5em;
  color: whitesmoke;
}
input{
  margin-bottom: 2%;
  border: solid 2px rgba(39, 139, 39, 0.424);
  /* border-radius: 10px; */
  outline: none;
}
.mar{
  margin-left : 37.5% ;
}


</style>
