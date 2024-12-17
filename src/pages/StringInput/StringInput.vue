<template>
  <input v-model="modelValue.value" :class="{'error-style': modelValue.showedError}">
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {StringInputProps} from "./types";

const model = defineProps<StringInputProps>()

</script>

<style scoped>
.error-style {
  border-color: red;
}

</style>