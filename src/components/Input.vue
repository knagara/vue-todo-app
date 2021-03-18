<template>
  <div>
    <v-form>
      <v-container class="cyan lighten-5 mb-5">
        <v-row>
          <v-col align="center">
            <h3>新規追加</h3>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" sm="6">
            <v-text-field
              label="タイトル"
              solo
              dense
              v-model="title"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2">
            <datepicker
              placeholder="期限"
              v-model="dueDate"
              :format="'yyyy-MM-dd'"
            ></datepicker>
          </v-col>
          <v-col cols="12" sm="2">
            <v-btn @click="addTodo">追加</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import formatDate from "@/common/dateFormatter";
export default {
  data() {
    return {
      title: "",
      dueDate: "",
    };
  },
  components: {
    Datepicker,
  },
  methods: {
    addTodo() {
      if ((this.title === "") | (this.dueDate === "")) return;
      const todo = {
        title: this.title,
        dueDate: formatDate(this.dueDate, "yyyy-MM-dd"),
      };
      this.$store.commit("todo/addTodo", todo);
    },
  },
};
</script>

<style scoped>
.vdp-datepicker {
  display: inline-block;
  border: 1px solid #ccc;
}
</style>