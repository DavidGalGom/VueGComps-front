<template>
  <div class="hello">
    <h1>VueGComps</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
