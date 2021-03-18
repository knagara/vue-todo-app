import {statusNotYet} from '@/common/const'

const state = {
    todos: [{
        id: 1,
        title: 'テスト1',
        dueDate: '2021-06-01',
        status: statusNotYet,
        editMode: false
    },{
        id: 2,
        title: 'テスト2',
        dueDate: '2021-05-01',
        status: statusNotYet,
        editMode: false
    },{
        id: 3,
        title: 'テスト3',
        dueDate: '2021-04-01',
        status: statusNotYet,
        editMode: false
    }],
    id: 3
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
    },
    sortById(state){
        state.todos.sort((a, b) => {
            return a.id < b.id ? -1 : 1
        })
    },
    sortByDate(state){
        state.todos.sort((a, b) => {
            return a.dueDate < b.dueDate ? -1 : 1
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}