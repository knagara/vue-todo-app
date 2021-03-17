<template>
    <div id="todo-app">
        <h1>TODOアプリ</h1> 
        <Input></Input>
        <Sort></Sort>
        <List></List>  
    </div>
</template>

<script>
import Input from './Input'
import Sort from './Sort'
import List from './List'

export default {
    components: {
        Input,
        Sort,
        List
    }
}
</script>

<style scoped>
#todo-app {
    width: 700px;
    margin: 2rem auto;
    text-align: center;
}
</style>