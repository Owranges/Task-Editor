<template>
<div>
    
    <input v-model="champ" type="text" placeholder="modifiez-moi">
    <button v-on:click="lol">Add Task</button>
   
</div>
</template>

<script>    

export default {
    name: 'AddForm',
    data(){
        return{
            champ : ''

        }
    },
   methods: {
       lol() {
           this.$emit('mdr', this.champ)
       }
   }
}
</script>