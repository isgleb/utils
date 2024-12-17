<template>
  <div>
    <div>
      {{ number }}
    </div>
    <StringInput v-model="number"/>
    <button @click="validate">back validate</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {BaseField} from "@/pages/BaseModels.ts";
import StringInput from '@/pages/StringInput/StringInput.vue';

const number = ref<BaseField>(new BaseField({
  label: 'hi',
  key: 'hi',
  defaultValue: '1'
}))

const validate = () => {
  number.value.showError = !number.value.showError
  number.value.backValidationError = "oh noooo"
}
</script>

<style scoped>

</style>