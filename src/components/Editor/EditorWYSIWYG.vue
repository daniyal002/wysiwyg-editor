<template>
  <div class="Editor">
    <EditorButton />
  </div>
</template>

<script>
import EditorButton from "./EditorButton/EditorButton.vue";
export default {
  name: "EditorWYSIWYG",
  components: {
    EditorButton,
  },
};
</script>

<style lang="scss" scoped></style>
