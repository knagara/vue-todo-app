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
    add(state, todo) {
        state.todos.push(todo)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}