<template>
    <div>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                {{todo.id}}, {{todo.title}}, {{todo.dueDate}}, {{todo.status}}
                <button @click="deleteTodo(todo.id)">削除</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapGetters("todos", ["todos"])
    },
    methods: {
        ...mapMutations("todos", ["deleteTodo"])
    }
}
</script>

<style scoped>
ul {
    list-style: none;
}
</style>