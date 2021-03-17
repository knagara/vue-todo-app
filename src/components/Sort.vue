<template>
    <div>
        <button @click="sortById">IDでソート</button>
        <button @click="sortByDate">期限でソート</button>
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
