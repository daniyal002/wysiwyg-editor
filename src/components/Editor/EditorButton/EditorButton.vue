<template>
  <div class="EditorButton">
    <button type="button" class="EditorButton__button-undo">
      <img :src="buttonIcon.ButtonUndo" alt="" />
    </button>
    <button type="button" class="EditorButton__button-redo">
      <img :src="buttonIcon.ButtonRedo" alt="" />
    </button>
    <button
      type="button"
      class="EditorButton__button-headerText"
      @click="selectHeaderText"
    >
      <img :src="buttonIcon.ButtonHeaderText" alt="" />
    </button>
    <button type="button" class="EditorButton__button-paragraphText">
      <img :src="buttonIcon.ButtonParagraphText" alt="" />
    </button>
    <button type="button" class="EditorButton__button-imageDownload">
      <img :src="buttonIcon.ButtonImageDownload" alt="" />
    </button>

    <button type="button" class="EditorButton__button-copyHtml">
      Скопировать-HTML
    </button>
  </div>
</template>

<script>
import undo from "../../../assets/buttonIcon/undo.svg";
import redo from "../../../assets/buttonIcon/redo.svg";
import paragraphText from "../../../assets/buttonIcon/paragraphText.svg";
import imageDownload from "../../../assets/buttonIcon/imageDownload.svg";
import headerText from "../../../assets/buttonIcon/headerText.svg";

export default {
  name: "EditorButton",
  data() {
    return {
      buttonIcon: {
        ButtonUndo: undo,
        ButtonRedo: redo,
        ButtonParagraphText: paragraphText,
        ButtonImageDownload: imageDownload,
        ButtonHeaderText: headerText,
      },
    };
  },
  methods: {
    selectHeaderText() {},
  },
};
</script>

<style lang="scss" scoped>
.EditorButton {
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
