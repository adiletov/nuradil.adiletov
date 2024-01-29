<template>
  <div class="layout">
    <Header/>
    <slot></slot>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "MainLayout",
  components: {
    Header,
    Footer,
  },

}
</script>



