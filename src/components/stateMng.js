import { ref, computed } from "vue";

// defining a boolean value for the sidebar state
export const sbCollapse = ref(false);
// we are basically reversing the boolean value from false to true and true to false depending on what user click
export const sbToggleBtn = () => (sbCollapse.value = !sbCollapse.value);

// giving the sidebar width a value when its collapsed, and when its not. and when in sidebarWidth we are telling it that if the sidebar is collapsed then set the width value to 40.
export const sbWidth = 240;
export const sbWidthOnCollapse = 70;
export const sidebarWidth = computed(
  () => `${sbCollapse.value ? sbWidthOnCollapse : sbWidth}px`
);
