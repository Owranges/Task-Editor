<template>
 <form class="displayflex">
   
    <b-input
      
      class="w-25"
      v-model="champ"
      type="text"
      placeholder="Todo Name"
      v-on:keyup="keymonitor"
    /><b-button v-on:click="lol">Add </b-button>
 </form>
  
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
    lol: function() {
      this.$emit("mdr", this.champ);
      this.champ = "";
    },
    keymonitor: function(event) {
      console.log(event.key);
      if (event.key == "Enter") {
        this.lol();
      }
    },
  },
};
</script>

<style >
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.displayflex{
  display: flex;
  justify-content: center;
  align-content: center;

}
.newtask{
  height : 40px;
  
}

</style>
