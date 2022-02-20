<template>
  <div id="nav">
    <Sidebar />
  </div>
  <WavyAnim />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import WavyAnim from "./components/WavyAnim.vue";
import { sidebarWidth } from "./components/stateMng";
export default {
  components: { Sidebar, WavyAnim },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
}
</style>
