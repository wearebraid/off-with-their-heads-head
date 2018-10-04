<template>
  <div class="staff-full-bio">
    <div class="headshot">
      <img :src="activeStaffProfile.headshot">
    </div>
    <div class="meta">
      <h3>{{ name }}</h3>
      <p><strong>{{ activeStaffProfile.job_title }}, <em>{{ activeStaffProfile.department }}</em></strong></p>
      <p>
        <strong>Email:</strong> <a :href="`mailto:${activeStaffProfile.email}`">{{ activeStaffProfile.email }}</a><br>
        <strong>Phone:</strong> <a :href="`tel:${activeStaffProfile.phone}`">{{ activeStaffProfile.phone }}</a><br>
        <strong>LinkedIn:</strong> <a :href="activeStaffProfile.linkedin">{{ activeStaffProfile.linkedin }}</a>
      </p>
    </div>
    <div
      class="bio"
      v-html="activeStaffProfile.bio"
    />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'activeStaffProfile'
    ]),
    name () {
      return `${this.activeStaffProfile.first_name} ${this.activeStaffProfile.last_name}`
    }
  }
}
</script>

<style lang="scss" scoped>
.staff-full-bio {
  @include medium-up {
    padding: 1em;
    display: flex;
    flex-wrap: wrap;
  }
}
.headshot {
  margin-top: .15em;
  margin-bottom: 1em;

  img {
    border-radius: 5px;
  }
}
.meta {
  @include medium-up {
    padding-left: 1.5em;
    flex: 1;
  }
}
.bio {
  @include medium-up {
    min-width: 100%;
    margin-top: 1em;
    padding-top: 1em;
    border-top: 1px solid #eee;
  }
}
</style>
