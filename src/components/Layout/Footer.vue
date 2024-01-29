<template>
<footer>
  <div class="container">
    <h2>Свяжитесь со мной</h2>
    <p>Любым удобным для вас способом</p>
    <div class="social_btns">
      <icon-button
          v-for="link in socialLinks"
          :key="link.path"
          @on-click="redirectTo(link.path)"
      >
        <i :class="link.icon"></i>
      </icon-button>
    </div>
  </div>
</footer>
</template>

<script>
import IconButton from "../Buttons/IconButton.vue";

export default {
  name: "Footer",
  data() {
    return {
      socialLinks: [
        {icon: 'fa-brands fa-linkedin-in', path: 'https://www.linkedin.com/in/nuradil-adiletov-8132121b3/'},
        {icon: 'fa-brands fa-telegram', path: 'https://t.me/adiletov_adil'},
        {icon: 'fa-regular fa-envelope', path: 'mailto:nrdl777@gmail.com'},
      ]
    }
  },
  components: {
    IconButton
  },
  methods: {
    redirectTo(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.social_btns {
  display: flex;
  gap: 10px;
}

.social_btns i {
  font-size: 16px;
}
</style>
