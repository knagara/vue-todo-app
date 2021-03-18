<template>
  <v-app>
    <v-main>
      <TodoApp/>
    </v-main>
  </v-app>
</template>

<script>
import TodoApp from './components/TodoApp'

export default {
  components: {
    TodoApp,
  }
};
</script>
