<template>
    <div>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <div v-if="!todos[todo.id].editMode">
                    {{todo.id}}, {{todo.title}}, {{todo.dueDate}}, {{todo.status}}
                    <button @click="editTodo(todo.id)">編集</button>
                    <button @click="deleteTodo(todo.id)">削除</button>
                </div>
                <div v-else>
                    タイトル：<input type="text" v-model="title">
                    期限：<datepicker v-model="dueDate" :format="'yyyy-MM-dd'"></datepicker>
                    <button @click="updateTodo(todo.id)">保存</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Datepicker from 'vuejs-datepicker';
import formatDate from '@/common/dateFormatter'
export default {
    data() {
        return {
            title: '',
            dueDate: ''
        }
    },
    components:{
        Datepicker
    },
    computed: {
        ...mapGetters("todo", ["todos"])
    },
    methods: {
        ...mapMutations("todo", ["deleteTodo", "editTodo"]),
        updateTodo(id){
            if(this.title === '' | this.dueDate === '') return;
            let todo = this.$store.getters["todo/todos"][id]
            todo.title = this.title
            todo.dueDate = formatDate(this.dueDate, 'yyyy-MM-dd')
            todo.editMode = false
            this.$store.commit("todo/updateTodo", {id, todo})
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
}
.vdp-datepicker {
    display: inline-block;
}
</style>