<template>
    <div>
        タイトル：<input type="text" v-model="title">
        期限：<datepicker v-model="dueDate" :format="'yyyy-MM-dd'"></datepicker>
        <button @click="addTodo">追加</button>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import formatDate from '@/common/dateFormatter'
export default {
    data(){
        return {
            title: '',
            dueDate: ''
        }
    },
    components:{
        Datepicker
    },
    methods: {
        addTodo(){
            if(this.title === '' | this.dueDate === '') return;
            const todo = {
                title: this.title,
                dueDate: formatDate(this.dueDate, 'yyyy-MM-dd')
            }
            this.$store.commit("todo/addTodo", todo)
        }
    }
}
</script>

<style scoped>
.vdp-datepicker {
    display: inline-block;
}
</style>