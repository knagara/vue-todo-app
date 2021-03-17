<template>
    <div id="todo-app">
        <h1>TODOアプリ</h1> 
        <Input></Input>
        <List></List>  
    </div>
</template>

<script>
import Input from './Input'
import List from './List'

export default {
    components: {
        Input,
        List
    }
}
</script>

<style scoped>
#todo-app {
    width: 400px;
    margin: 2rem auto;
    text-align: center;
}
</style>