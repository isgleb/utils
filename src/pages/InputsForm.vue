<template>
  <div>
    <StringInput v-model="number"/>
    <button @click="validate">back validate</button>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {FieldModel} from "../validationModels/FieldModel";
import StringInput from "@/pages/StringInput/StringInput.vue";
import {min, required} from "../validationModels/validationRules";

const number = reactive<FieldModel>(new FieldModel({
  label: 'hi',
  key: 'hi',
  defaultValue: '1234',
  validationRules: {'Не заполнено': required, 'Минимальная длина': (val) => min(val, 3)},
}))

number.showError = true;

const validate = () => {
  number.frontValidate();
}
</script>

<style scoped>

</style>