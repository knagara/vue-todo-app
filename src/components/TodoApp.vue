<template>
    <v-container>
        <v-row class="text-center mt-5">
            <v-col cols="12">
                <h1>TODOアプリ</h1> 
                <div class="mt-5">
                    <Input></Input>
                    <Sort></Sort>
                    <List></List>  
                </div>
            </v-col>
        </v-row>
    </v-container>
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