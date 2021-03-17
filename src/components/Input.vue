<template>
    <div>
        <input type="text" v-model="title">
        <button @click="addTodo">追加</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: ''
        }
    },
    methods: {
        addTodo(){
            const todo = {
                title: this.title,
                dueDate: 'xxx'
            }
            this.$store.commit("todo/addTodo", todo)
        }
    }
}
</script>