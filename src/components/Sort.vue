<template>
    <div>
        <v-btn class="mr-4" @click="sortById">IDでソート</v-btn>
        <v-btn @click="sortByDate">期限でソート</v-btn>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations("todo", ["sortById", "sortByDate"])
    }
}
</script>
