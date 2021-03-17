<template>
    <div>
        <ul>
            <li v-for="todo in todos" :key="todo">
                {{todo.title}}, {{todo.dueDate}}, {{todo.status}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters("todos", ["todos"])
    }
}
</script>

<style scoped>
ul {
    list-style: none;
}
</style>