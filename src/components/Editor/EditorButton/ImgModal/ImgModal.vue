<template>
  <div class="imgModal" v-if="isActive">
    <div class="imgModalContent">
      <div class="imgDownloadIsUrl">
        <label>Вставьте Url: </label>
        <input type="url" class="imgDownloadIsUrl__input-url" v-model="url" />
      </div>
      <div class="imgDownloadIsFile" v-if="!url">
        <label>Выберите файл: </label>
        <input type="file" class="imgDownloadIsFile__input-file" />
      </div>
      <div class="imgButtons">
        <button class="imgButton imgButtons__ok" @click="emitDataToParent">
          Ok
        </button>
        <button class="imgButton imgButtons__cancel" @click="cancelModal">
          Отмена
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgModal",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      url: "",
    };
  },
  methods: {
    cancelModal() {
      this.$emit("cancelModal");
    },
    emitDataToParent() {
      this.$emit("custom-event", { url: this.url });
    },
  },
};
</script>

<style lang="scss" scoped>
.imgModal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgModalContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  row-gap: 20px;
  background-color: #fefefe;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
.imgDownloadIsUrl {
  display: flex;
  align-items: center;
  column-gap: 45px;
  transition: 0.5s;
}
.imgDownloadIsUrl__input-url {
  padding: 10px 58px;
  border-radius: 5px;
  border: 1px solid #639eff;
  background-color: #f2f2f2;
  font-size: 16px;
  color: #333;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
}

.imgDownloadIsUrl__input-url:focus {
  outline: none;
  box-shadow: 0 0 10px #639eff;
}

.imgDownloadIsFile {
  display: flex;
  align-items: center;
  column-gap: 20px;
  transition: 0.5s;
}
.imgDownloadIsFile__input-file {
  cursor: pointer;
  font-size: 14px;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #639eff;
  background-color: #639eff;
  line-height: 22px;
  padding: 10px 20px;
  transition: 0.5s;
}

.imgDownloadIsFile__input-file:hover {
  color: #639eff;
  background-color: #fff;
  border: 1px solid #639eff;
}
.imgDownloadIsFile__input-file::-webkit-file-upload-button {
  display: none;
}

.imgButtons {
  display: flex;
  column-gap: 10px;
}
.imgButton {
  cursor: pointer;
  font-size: 14px;
  color: #639eff;
  text-align: center;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #639eff;
  line-height: 22px;
  padding: 10px 20px;
  transition: 0.5s;
}

.imgButton:hover {
  color: #fff;
  background-color: #639eff;
  border: 1px solid #639eff;
}
</style>
