<template>
<div class="container page" id="contact">
  <div class="page-title">
    <h2><span>04.</span>Контакты</h2>
  </div>
  <div class="content">
    <ul>
      <li v-for="contact in contacts">
        <span class="text-color">{{contact.label}}</span>
        <a :href="contact.path" target="_blank" class="light-color">{{contact.value}}</a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "Contact",
  computed: {
    contacts() {
      return [
        {label: 'Tel:', value: '+996707009090', path: 'tel:+996707009090'},
        {label: 'Gmail:', value: 'nrdl777@gmail.com', path: 'mailto:nrdl777@gmail.com'},
        {label: 'Telegramm:', value: '@adiletov_adil', path: 'https://t.me/adiletov_adil'},
        {label: 'Linkedin:', value: 'nuradil-adiletov', path: 'https://www.linkedin.com/in/nuradil-adiletov-8132121b3/'}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: end;
  ul li{
    text-align: right;
    list-style: none;
    margin-bottom: 10px;
    span {
      margin-right: 10px;
    }
  }
}
</style>
