<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="sbCollapse">
        <div>V</div>
      </span>
      <span v-else>Vue</span>
    </h1>

    <SidebarLink to="/" icon="fas fa-2x fa-home">Home</SidebarLink>
    <SidebarLink to="/f" icon="fas fa-2x fa-columns">Dashboard</SidebarLink>
    <SidebarLink to="/g" icon="fas fa-2x fa-chart-bar">Analytics</SidebarLink>
    <SidebarLink to="/h" icon="fas fa-2x fa-users">Friends</SidebarLink>
    <SidebarLink to="/j" icon="fas fa-2x fa-image">Images</SidebarLink>
    <span
      @click="sbToggleBtn"
      class="collapse-icon"
      :class="{ 'rotate-180': sbCollapse }"
    >
      <span class="material-icons"> keyboard_double_arrow_left </span>
    </span>
  </div>
</template>

<script>
import { sbCollapse, sbToggleBtn, sidebarWidth } from "./stateMng";
import SidebarLink from "./SidebarLink.vue";
export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { sbCollapse, sbToggleBtn, sidebarWidth };
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: #4c72f7;
  --sidebar-item-hover: #ffffff38;
  --sidebar-item-active: #ffffff38;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  user-select: none;
}
.sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
  cursor: pointer;
  user-select: none;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
