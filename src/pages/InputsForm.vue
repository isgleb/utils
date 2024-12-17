<template>
  <div>
    <div>
      {{ number }}
    </div>
    <input v-model="number.value">
  </div>
</template>

<script setup>
import {ref} from "vue";
import {BaseField} from "@/pages/BaseModels.ts";

const number = ref(new BaseField({
  label: 'hi',
  key: 'hi',
  defaultValue: '1'
}))
</script>

<style scoped>

</style>