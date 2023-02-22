<template>
  <div class="EditorButton">
    <div class="EditorButton_buttonGroup">
      <button type="button" class="EditorButton__button-undo">
        <img :src="buttonIcon.ButtonUndo" alt="" />
      </button>
      <button type="button" class="EditorButton__button-redo">
        <img :src="buttonIcon.ButtonRedo" alt="" />
      </button>
      <button
        type="button"
        class="EditorButton__button-headerText"
        @click="handleFS31"
      >
        <img :src="buttonIcon.ButtonHeaderText" alt="" />
      </button>
      <button
        type="button"
        class="EditorButton__button-paragraphText"
        @click="handleFS14"
      >
        <img :src="buttonIcon.ButtonParagraphText" alt="" />
      </button>
      <button
        type="button"
        class="EditorButton__button-imageDownload"
        @click="openModal"
      >
        <img :src="buttonIcon.ButtonImageDownload" alt="" />
      </button>

      <button
        type="button"
        class="EditorButton__button-copyHtml"
        @click="copyHtml"
      >
        Скопировать-HTML
      </button>
    </div>

    <ImgModal
      v-if="modalActive"
      :key="modalActive"
      @custom-event="pasteImage"
      @cancelModal="cancelModal"
    />
    <TextArea ref="textarea" />
  </div>
</template>

<script>
import TextArea from '../TextArea/TextArea.vue';
import ImgModal from './ImgModal/ImgModal.vue';
import undo from '../../../assets/buttonIcon/undo.svg';
import redo from '../../../assets/buttonIcon/redo.svg';
import paragraphText from '../../../assets/buttonIcon/paragraphText.svg';
import imageDownload from '../../../assets/buttonIcon/imageDownload.svg';
import headerText from '../../../assets/buttonIcon/headerText.svg';

const icons = {
  ButtonUndo: undo,
  ButtonRedo: redo,
  ButtonParagraphText: paragraphText,
  ButtonImageDownload: imageDownload,
  ButtonHeaderText: headerText,
};

export default {
  name: 'EditorButton',
  components: { ImgModal, TextArea },
  props: {
    editorObject: {
      type: Object,
    },
  },
  data() {
    return {
      buttonIcon: icons,
      modalActive: false,
      url: '',
    };
  },

  methods: {
    handleFS(size) {
      const range = window.getSelection().getRangeAt(0);

      const span = document.createElement('span');
      span.style.fontSize = size;

      range.surroundContents(span);
    },
    handleFS31() {
      this.handleFS('34px');
    },
    handleFS14() {
      this.handleFS('14px');
    },
    pasteImage(data) {
      const editor = this.$refs.textarea.$refs.editor;
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(editor);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);

      const img = document.createElement('img');
      img.src = `${data.url}`;
      img.style.width = '300px';
      img.style.display = 'block';

      range.surroundContents(img);
      this.modalActive = false;
    },
    copyHtml() {
      const el = this.$refs.textarea.$el;
      navigator.clipboard.writeText(el.innerHTML);
    },
    openModal() {
      this.modalActive = true;
    },
    cancelModal() {
      this.modalActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.EditorButton_buttonGroup {
  display: flex;
  flex-direction: row;
  column-gap: 12px;
}
.EditorButton__button-copyHtml {
  margin-left: 7px;
  color: #639eff;
}

button {
  background-color: rgba(255, 255, 255, 0);
  border: 0;
}
</style>
