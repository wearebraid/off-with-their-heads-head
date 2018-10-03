<template>
  <section>
    <banner-area />
    <cards-area>
      <staff-card
        v-for="staff in staffList"
        :key="staff.id"
      />
    </cards-area>
  </section>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState ({
      staffList: state => state.staff
    })
  }
}
</script>

<style>

</style>
