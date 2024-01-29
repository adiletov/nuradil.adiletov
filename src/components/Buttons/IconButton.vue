<template>
<button
    class="btn"
    :class="type"
    @click="$emit('onClick')"
>
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "IconButton",
  props: {
    type: {
      type: String,
      default: 'circle'
    }
  }
}
</script>

<style scoped>
.btn{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
}
.circle {
  border-radius: 50%;
}
</style>
