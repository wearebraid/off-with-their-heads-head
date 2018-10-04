<template>
  <staff-full-bio />
</template>

<script>
export default {
  mounted () {
    this.$store.commit('setModalVisible', true)
  },
  destroyed () {
    this.$store.commit('setModalVisible', false)
  }
}
</script>

<style lang="scss" scoped>

</style>
