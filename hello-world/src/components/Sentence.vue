<template>
    <div>
    <p v-if="taskUndone() == list.length" id="red"><b-icon icon='emoji-frown'></b-icon>   It's time to start working you have {{list.length}} tasks to do !!   <b-icon icon='emoji-frown'></b-icon></p>
    <p v-else-if="taskUndone() === 0"
    id = "greenc"><b-icon icon='emoji-sunglasses'></b-icon>   Congratulation !! You finished all the {{list.length}} tasks   <b-icon icon='emoji-sunglasses'></b-icon></p>
    <p v-else-if="taskUndone() < (list.length/2)" id="green"><b-icon icon='emoji-laughing'></b-icon>   Good !! you made half or more {{(list.length-taskUndone())+"/"+list.length}} tasks   <b-icon icon='emoji-laughing'></b-icon></p>
    <p v-else id="orange"><b-icon icon='emoji-smile'></b-icon>   Continue that way and you will finish soon, still have {{taskUndone()+"/"+ list.length}} tasks   <b-icon icon='emoji-smile'></b-icon></p>
    </div>     
    
</template>

<script>
export default {
    name : "Sentence",
    props: ['list'],
    methods : {
        taskUndone() {
           let todoUndone = this.list.filter(e => e.todo ==true)
           return todoUndone.length
        }
    }

}
</script>

<style>
    #red{
        color: red;
    }
    #green{
        color: #32CD32;
    }
    #greenc{
        color: green;
    }
    #orange{
        color: orange;
    }

</style>