<template>
  <div id="app">
    <EditorWYSIWYG />
  </div>
</template>

<script>
import EditorWYSIWYG from "./components/Editor/EditorWYSIWYG.vue";
export default {
  name: "App",
  components: { EditorWYSIWYG },
};
</script>

<style>
body {
  background: #1e1e1e;
}
* {
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, Roboto;
}
#app {
  max-width: 738px;
  padding: 77px 117px 107px 107px;
  margin: 0 auto;
}
@media (max-width: 660px) {
  #app {
    padding: 77px 80px;
  }
}
@media (max-width: 500px) {
  #app {
    padding: 77px 50px;
  }
}
@media (max-width: 400px) {
  #app {
    padding: 77px 30px;
  }
}
</style>
