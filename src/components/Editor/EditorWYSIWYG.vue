<template>
  <div class="Editor">
    <EditorButton />
    <TextArea />
  </div>
</template>

<script>
import EditorButton from "./EditorButton/EditorButton.vue";
import TextArea from "./TextArea/TextArea.vue";
export default {
  name: "EditorWYSIWYG",
  components: {
    EditorButton,
    TextArea,
  },
};
</script>

<style lang="scss" scoped></style>
