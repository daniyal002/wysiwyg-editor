<template>
  <div class="textArea">
    <textarea
      class="textArea__input-textArea"
      ref="textarea"
      v-model="selection"
    >
    </textarea>
    {{ selection }}
  </div>
</template>

<script>
export default {
  name: "TextArea",
  data() {
    return { selection: "" };
  },
  methods: {
    Selected() {
      let control = this.$refs.textarea;
      let start = control.selectionStart;
      let end = control.selectionEnd;

      console.log("Start>", start, "END>", end);

      if (start != end) {
        let text = control.value;
        control.value =
          text.substring(0, start) +
          "<span class='headerT'>" +
          text.substring(start, end) +
          "</span>" +
          text.substring(end);

        control.focus();
        let sel = end + 7;
        control.setSelectionRange(sel, sel);
      }
      return false;

      // this.selection = e.target.value
      //   .substring(e.target.selectionStart, e.target.selectionEnd)
      //   .toUpperCase();
    },
  },
};
</script>

<style lang="scss" scoped>
.textArea__input-textArea {
  width: 100%;
  background: #1e1e1e00;
  border: 0;
  color: #fff;
}

.headerT {
  font-size: 35px;
}
</style>
