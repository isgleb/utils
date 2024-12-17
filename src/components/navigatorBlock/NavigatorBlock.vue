<template>
  <nav >
    <ul>
      <li v-for="item in pagesLinks" :key="item.url">{{ item.url }}</li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

import { NavigatorBlockProps } from "./types";

const props = defineProps<NavigatorBlockProps>();
console.log(props);

</script>

<style scoped lang="scss">
nav {
  border: 1px solid black;

  ul {
    padding-inline-start: 0;
    li {
      list-style-type: none;
      text-align: left;
    }
    li:hover {
      background-color: #535bf2;
    }
  }
}

</style>