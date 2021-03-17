import {statusNotYet} from '@/common/const'

const state = {
    todos: [{
        id: 0,
        title: 'テスト',
        dueDate: '2012-04-01',
        status: statusNotYet,
        editMode: false
    }],
    id: 0
};

const getters = {
    todos: state => state.todos
};

const mutations = {
    addTodo(state, todo) {
        state.id++;
        todo.id = state.id
        todo.status = statusNotYet
        todo.editMode = false
        state.todos.push(todo)
    },
    deleteTodo(state, id){
        state.todos = state.todos.filter(todo => todo.id !== id)
    },
    editTodo(state, id){
        state.todos.find(todo => todo.id === id).editMode = true
    },
    updateTodo(state, idAndTodo){
        let todo = state.todos.find(todo => todo.id === idAndTodo.id)
        todo.title = idAndTodo.todo.title
        todo.dueDate = idAndTodo.todo.dueDate
        todo.status = idAndTodo.todo.status
        todo.editMode = false
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}