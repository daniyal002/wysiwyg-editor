<template>
  <div class="textArea">
    <textarea class="textArea__input-textArea" ref="textarea"> </textarea>
    <iframe class="textArea__input-iframe" ref="editor"></iframe>
    <button @click="Selected">Bold</button>
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  data() {
    return { selection: '' };
  },
  methods: {
    Iframe() {
      this.$refs.editor.contentDocument.designMode = 'on';
    },
    Selected() {
      this.$refs.editor.select();
      document.execCommand('bold', false, null);
    },
  },
  created: function () {
    window.addEventListener('load', this.Iframe);
  },
};
</script>

<style lang="scss" scoped>
.textArea__input-textArea {
  display: none;
}
.textArea__input-iframe {
  width: 100%;
}

.textArea__input-iframe body {
  background: #1e1e1e00;
  border: 0;
  color: #fff;
}

.headerT {
  font-size: 35px;
}
</style>
