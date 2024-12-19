<template>
  <input v-model="modelValue.value" :class="{'error-style': errorFeedback}">
  <div>{{ errorFeedback }}</div>
</template>

<script setup lang="ts">
import {computed, defineProps} from "vue";
import {StringInputProps} from "./types";

const props = defineProps<StringInputProps>()

const errorFeedback = computed(() => {
  console.log(props.modelValue)
  return props.modelValue?.showedError?.map(({description})=> description)?.join('; ')
})
</script>

<style scoped>
.error-style {
  border-color: red;
}

</style>