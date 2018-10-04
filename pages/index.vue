<template>
  <section>
    <banner-area />
    <cards-area>
      <template slot="grid-content">
        <staff-card
          v-for="staff in staffList"
          :key="staff.id"
          :staff-data="staff"
        />
      </template>
      <template
        v-if="activeStaffProfile"
        slot="modal-content"
      >
        <staff-full-bio :staff-data="activeStaffProfile" />
      </template>
    </cards-area>
  </section>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  computed: {
    ...mapState ({
      staffList: state => state.staff
    }),
    ...mapGetters ([
      'activeStaffProfile'
    ])
  }
}
</script>

<style>

</style>
