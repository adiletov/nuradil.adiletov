<template>
  <MainLayout>
    <MainPage/>
    <Experience/>
    <Work/>
    <Contact/>
  </MainLayout>
</template>

<script>
import MainLayout from "./components/Layout/MainLayout.vue";
import {Contact, Experience, MainPage, Work} from "./pages/pages";

export default {
  name: 'App',
  components: {
    MainLayout,
    MainPage,
    Experience,
    Work,
    Contact,
  }
}
</script>

