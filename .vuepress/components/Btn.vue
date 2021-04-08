<template lang="pug">
  a.btn.btn-main(:href="uri" target="_blank") {{ title }}
</template>

<script>
  export default {
    data: () => {
      return {}
    },
    props: ['title', 'uri']
  }
</script>

<style scoped lang="stylus">
  .btn-main
    display inline-block
    background-color: transparent
    border: 1px solid #0088cc
    color: #0088cc
    &:hover
      background-color: #0088cc
      color: #FFF
</style>