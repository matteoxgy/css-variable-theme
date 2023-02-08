<template>
  <div id="app">
    <button @click="toggleTheme">toggle</button>
    <div>
      <span>hello world</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
  },
  watch: {
    theme(newV) {
      this.$setTheme(newV);
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  background-color: var(--bg);
  color: var(--color);
}
</style>
