const state = {
    todos: [{
        id: 0,
        title: 'テスト',
        dueDate: '2012-04-01',
        status: '未着手'
    }]
};

const getters = {
    todos: state => state.todos
};

const mutations = {
    addTodo(state, todo) {
        state.todos.push(todo)
    },
    deleteTodo(state, id){
        state.todos = state.todos.filter(todo => todo.id !== id)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}