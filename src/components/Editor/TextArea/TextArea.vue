<template>
  <div class="textArea">
    <div
      class="textArea__div"
      contenteditable="true"
      ref="editor"
      @input="handleOnInput"
      :innerHTML="content"
    ></div>
  </div>
</template>

<script>
import monkeys from "../../../assets/img/monkeys.jpg";
export default {
  name: "TextArea",
  props: ["content"],
  data() {
    return {
      monkeys: monkeys,
    };
  },
  methods: {
    handleOnInput() {
      this.$emit("onInput");
    },
  },
};
</script>

<style lang="scss" scoped>
.textArea {
  margin-top: 38px;
}
.textArea__div {
  border: 1px solid #639eff;
  min-height: 100px;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  background-color: #1e1e1e;
  color: #fff;
  box-sizing: border-box;
  font-size: 16px;
}
</style>
