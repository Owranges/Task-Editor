import Vue from 'vue'
import Vuex from 'vuex'


import 'es6-promise/auto'

Vue.use(Vuex)

export default new Vuex.Store ({
    state : {
        Todo : []

    },
    mutations: {
        ALL_TODO: (state, todo) =>{
            state.Todo.push(todo)
            console.log();
        },
        SWAP_TODO: (state, id) => {
            let todoID = state.Todo.find(e => e.id == id)
            todoID.todo = !todoID.todo
            console.log(todoID.todo);
        },
        ADD_TASK: (state, newTask) => {
            state.Todo.push(newTask)
        }

    },
    actions: {
        Add (context, todo) {
            context.commit('ALL_TODO', todo)
        },
        Swap (context, id) {
            context.commit('SWAP_TODO', id)
        },
        Post(context, newTask) {
            context.commit('ADD_TASK', newTask)
        }
    },
    getters: {

    }

})