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
            state.Todo = todo
            console.log(state.Todo);
        },
        SWAP_TODO: (state, id) => {
            let todoID = state.Todo.findIndex(e => e.id == id)
            state.Todo[todoID].todo = !state.Todo[todoID].todo
        },
        ADD_TASK: (state, newTask) => {
            state.Todo.push(newTask)
        },
        SUPR_TODO: (state, id) => {
            let todoSupr = state.Todo.findIndex(e => e.id == id)
            console.log(todoSupr);
            state.Todo.splice(todoSupr,1)
        }

    },
    actions: {
        Add (context, todo) {
            context.commit('ALL_TODO', todo)
        },
        Swap (context, id) {
            console.log(id);
            context.commit('SWAP_TODO', id)
        },
        Post(context, newTask) {
            context.commit('ADD_TASK', newTask)
        },
        Supr(context, id) {
            console.log(id);
            context.commit('SUPR_TODO', id)
        }
    },
    getters: {
        RenderByPath : (state) => (whatToDisplay) => {
            if(whatToDisplay == 'done'){
                return state.Todo.filter(e => e.todo == false)
            }else if(whatToDisplay == 'todo'){
                return state.Todo.filter(e => e.todo == true)
            }else
            return state.Todo
            
        }

    },

})