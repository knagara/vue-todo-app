<template>
  <div>
    <div class="ma-5">
      <v-btn class="mr-5" @click="filterAll">すべて表示</v-btn>
      <v-btn class="mr-5" @click="filterNotYet">未着手のみ表示</v-btn>
      <v-btn class="mr-5" @click="filterGoing">進行中のみ表示</v-btn>
      <v-btn @click="filterDone">完了のみ表示</v-btn>
    </div>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <div v-if="!todo.editMode">
          {{ todo.id }}, {{ todo.title }}, {{ todo.dueDate }}, {{ todo.status }}
          <v-btn @click="editTodo(todo.id)">編集</v-btn>
          <v-btn @click="deleteTodo(todo.id)">削除</v-btn>
        </div>
        <div v-else>
          <v-form>
            <v-container>
              <v-row justify="center">
                <v-col cols="12" sm="5">
                  <v-text-field
                    label="タイトル"
                    solo
                    dense
                    type="text"
                    v-model="title"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3">
                  <datepicker
                    placeholder="期限"
                    v-model="dueDate"
                    :format="'yyyy-MM-dd'"
                  ></datepicker>
                </v-col>
                <v-col cols="12" sm="2">
                  <v-select solo dense :items="statusList" v-model="status">
                  </v-select>
                </v-col>
                <v-col cols="12" sm="2">
                  <v-btn @click="updateTodo(todo.id)">保存</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Datepicker from "vuejs-datepicker";
import formatDate from "@/common/dateFormatter";
import { statusNotYet, statusGoing, statusDone } from "@/common/const";

export default {
  data() {
    return {
      title: "",
      dueDate: "",
      status: "",
      statusList: [statusNotYet, statusGoing, statusDone],
      filterStatus: "",
    };
  },
  components: {
    Datepicker,
  },
  computed: {
    ...mapGetters("todo", ["todos"]),
    filteredTodos() {
      let todos = this.$store.getters["todo/todos"];
      if (this.filterStatus === "") return todos;
      return todos.filter((todo) => todo.status === this.filterStatus);
    },
  },
  methods: {
    ...mapMutations("todo", ["deleteTodo"]),
    filterAll() {
      this.filterStatus = "";
    },
    filterNotYet() {
      this.filterStatus = statusNotYet;
    },
    filterGoing() {
      this.filterStatus = statusGoing;
    },
    filterDone() {
      this.filterStatus = statusDone;
    },
    editTodo(id) {
      const todo = this.$store.getters["todo/todos"].find(
        (todo) => todo.id === id
      );
      this.title = todo.title;
      this.dueDate = todo.dueDate;
      this.status = todo.status;
      this.$store.commit("todo/editTodo", id);
    },
    updateTodo(id) {
      if ((this.title === "") | (this.dueDate === "")) return;
      let todo = this.$store.getters["todo/todos"].find(
        (todo) => todo.id === id
      );
      todo.title = this.title;
      todo.dueDate =
        typeof this.dueDate === "string"
          ? this.dueDate
          : formatDate(this.dueDate, "yyyy-MM-dd");
      todo.status = this.status;
      this.$store.commit("todo/updateTodo", { id, todo });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
.vdp-datepicker {
  display: inline-block;
  border: 1px solid #ccc;
}
</style>