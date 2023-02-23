<template>
  <div class="EditorButton">
    <div class="EditorButton_buttonGroup">
      <button
        type="button"
        class="EditorButton__button-undo"
        @click="undo"
        :disabled="index === 0"
      >
        <img :src="buttonIcon.ButtonUndo" alt="" />
      </button>
      <button type="button" class="EditorButton__button-redo" @click="redo">
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
        @click="handleFS15"
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
      @url="pasteImage"
      @cancelModal="cancelModal"
    />
    <TextArea @onInput="onInput" ref="textarea" content="content" />
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

const icons = {
  ButtonUndo: undo,
  ButtonRedo: redo,
  ButtonParagraphText: paragraphText,
  ButtonImageDownload: imageDownload,
  ButtonHeaderText: headerText,
};

export default {
  name: "EditorButton",
  components: { ImgModal, TextArea },
  data() {
    return {
      buttonIcon: icons,
      modalActive: false,
      url: "",
      content: "",
      changes: [],
      index: 0,
    };
  },

  methods: {
    onInput() {
      const newContent = this.$refs.textarea.$el.children[0].innerHTML;
      if (newContent !== this.content) {
        this.content = newContent;
        this.changes = this.changes.slice(0, this.index);
        this.changes.push(this.content);
        this.index++;
      }
    },
    undo() {
      if (this.index > 0) {
        this.index--;
        this.content = this.changes[this.index];
        this.$refs.textarea.$el.children[0].innerHTML = this.content;
      }
    },
    redo() {
      if (this.index < this.changes.length - 1) {
        this.index++;
        this.content = this.changes[this.index];
        this.$refs.textarea.$el.children[0].innerHTML = this.content;
      }
    },
    handleFS(size, teg, weight) {
      const range = window.getSelection().getRangeAt(0);

      const tegs = document.createElement(teg);
      tegs.style.fontSize = size;
      tegs.style.display = "inline";
      tegs.style.fontWeight = weight;

      range.surroundContents(tegs);
    },
    handleFS31() {
      this.handleFS("31px", "h1");
    },
    handleFS15() {
      this.handleFS("15px", "span", 400);
    },
    pasteImage(data) {
      const editor = this.$refs.textarea.$refs.editor;
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(editor);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);

      const img = document.createElement("img");
      img.src = `${data.url}`;
      img.style.maxWidth = "100%";
      img.style.maxHeight = "100%";
      img.style.display = "block";
      img.style.borderRadius = "10px";
      img.style.resize = "both";

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
  padding: 10px;
  display: flex;
  flex-direction: row;
  column-gap: 12px;
}

@media (max-width: 660px) {
  .EditorButton_buttonGroup {
    flex-wrap: wrap;
    padding: 0 50px;
  }
}

.EditorButton__button-undo {
  transition: 0.3s;
}
.EditorButton__button-undo:hover {
  transform: rotate(-10deg);
}

.EditorButton__button-redo {
  transition: 0.3s;
}
.EditorButton__button-redo:hover {
  transform: rotate(10deg);
}
.EditorButton__button-headerText {
  transition: 0.3s;
}
.EditorButton__button-headerText:hover {
  transform: scale(1.3);
}
.EditorButton__button-paragraphText {
  transition: 0.3s;
}
.EditorButton__button-paragraphText:hover {
  transform: scale(0.7);
}
.EditorButton__button-imageDownload {
  transition: 0.3s;
}
.EditorButton__button-imageDownload:hover {
  box-shadow: 1px 1px 2px 1px #639eff;
}
.EditorButton__button-copyHtml {
  margin-left: 7px;
  color: #639eff;
  transition: 0.3s;
  padding: 5px;
}
.EditorButton__button-copyHtml:hover {
  border: 1px solid #639eff;
  border-radius: 10px;
}

button {
  background-color: rgba(255, 255, 255, 0);
  border: 0;
}
</style>
