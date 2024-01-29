<template>
<header>
  <div class="container">
    <div class="navigation-list">
      <a
          v-for="(nav, index) in navigationList"
          :href="`#${nav.path}`"
          :class="{'active': currentPath === nav.path}"
      ><span>0{{index+1}}.</span>{{nav.name}}</a>
    </div>
  </div>
</header>
</template>

<script>
import IconButton from "../Buttons/IconButton.vue";

export default {
  name: "Header",
  components: {
    IconButton
  },
  computed: {
    navigationList() {
      return [
          {name: 'Обо мне', path: ''},
          {name: 'Опыт', path: 'experience'},
          {name: 'Навыки', path: 'work'},
          {name: 'Контакты', path: 'contact'},
      ]
    },
    currentPath() {
      const {hash} = this.$route;
      if (hash.length){
        return hash.substring(1,hash.length)
      }
      return hash;
    }
  },
  methods: {
    menuHandler(){
      console.log('Click menu btn')
    }
  }
}
</script>

