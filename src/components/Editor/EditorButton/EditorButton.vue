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

      <button type="button" class="EditorButton__button-copyHtml">
        Скопировать-HTML
      </button>
    </div>

    <ImgModal
      :isActive="modalActive"
      @custom-event="pasteImage"
      @cancelModal="cancelModal"
    />
    <TextArea ref="textarea" />
  </div>
</template>

<script>
import TextArea from "../TextArea/TextArea.vue";
import ImgModal from "./ImgModal/ImgModal.vue";
import undo from "../../../assets/buttonIcon/undo.svg";
import redo from "../../../assets/buttonIcon/redo.svg";
import paragraphText from "../../../assets/buttonIcon/paragraphText.svg";
import imageDownload from "../../../assets/buttonIcon/imageDownload.svg";
import headerText from "../../../assets/buttonIcon/headerText.svg";

export default {
  name: "EditorButton",
  components: { ImgModal, TextArea },
  props: {
    editorObject: {
      type: Object,
    },
  },
  data() {
    return {
      buttonIcon: {
        ButtonUndo: undo,
        ButtonRedo: redo,
        ButtonParagraphText: paragraphText,
        ButtonImageDownload: imageDownload,
        ButtonHeaderText: headerText,
      },
      modalActive: false,
      url: "",
    };
  },

  methods: {
    handleFS31() {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);

      const span = document.createElement("span");
      span.style.fontSize = "31px";

      range.surroundContents(span);
    },
    handleFS14() {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);

      const span = document.createElement("span");
      span.style.fontSize = "14px";

      range.surroundContents(span);
    },
    pasteImage(data) {
      const editor = this.$refs.textarea.$el.children[0];
      console.log(editor);
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(editor);
      //   selection.removeAllRanges();
      selection.addRange(range);

      const img = document.createElement("img");
      img.src = data.url;
      img.style.width = "300px";
      img.style.display = "block";

      range.surroundContents(img);
      //   this.modalActive = false;
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
