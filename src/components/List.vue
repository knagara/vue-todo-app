<template>
    <div>
        <div>
            <button @click="filterAll">すべて表示</button>
            <button @click="filterNotYet">未着手のみ表示</button>
            <button @click="filterGoing">進行中のみ表示</button>
            <button @click="filterDone">完了のみ表示</button>
        </div>
        <ul>
            <li v-for="todo in filteredTodos" :key="todo.id">
                <div v-if="!todo.editMode">
                    {{todo.id}}, {{todo.title}}, {{todo.dueDate}}, {{todo.status}}
                    <button @click="editTodo(todo.id)">編集</button>
                    <button @click="deleteTodo(todo.id)">削除</button>
                </div>
                <div v-else>
                    タイトル：<input type="text" v-model="title">
                    期限：<datepicker v-model="dueDate" :format="'yyyy-MM-dd'"></datepicker>
                    ステータス：
                        <select v-model="status">
                            <option v-for="status in statusList" :key="status">{{status}}</option>
                        </select>
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
import {statusNotYet, statusGoing, statusDone} from '@/common/const'

export default {
    data() {
        return {
            title: '',
            dueDate: '',
            status: '',
            statusList: [statusNotYet, statusGoing, statusDone],
            filterStatus: ''
        }
    },
    components:{
        Datepicker
    },
    computed: {
        ...mapGetters("todo", ["todos"]),
        filteredTodos(){
            let todos = this.$store.getters["todo/todos"]
            if(this.filterStatus === '') return todos
            return todos.filter(todo => todo.status === this.filterStatus)
        }
    },
    methods: {
        ...mapMutations("todo", ["deleteTodo"]),
        filterAll(){
            this.filterStatus = ''
        },
        filterNotYet(){
            this.filterStatus = statusNotYet
        },
        filterGoing(){
            this.filterStatus = statusGoing
        },
        filterDone(){
            this.filterStatus = statusDone
        },
        editTodo(id){
            const todo = this.$store.getters["todo/todos"].find(todo => todo.id === id)
            this.title = todo.title
            this.dueDate = todo.dueDate
            this.status = todo.status
            this.$store.commit("todo/editTodo", id)
        },
        updateTodo(id){
            if(this.title === '' | this.dueDate === '') return;
            let todo = this.$store.getters["todo/todos"].find(todo => todo.id === id)
            todo.title = this.title
            todo.dueDate = typeof(this.dueDate) === 'string' ? 
                this.dueDate :
                formatDate(this.dueDate, 'yyyy-MM-dd')
            todo.status = this.status
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