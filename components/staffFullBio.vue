<template>
  <div class="staff-full-bio">
    <div class="headshot">
      <img src="https://placehold.it/128x128">
    </div>
    <div class="meta">
      <h3>Staff Member Name</h3>
      <p><strong>Position, <em>Department</em></strong></p>
      <p>
        <strong>Email:</strong> <a href="mailto:email@domain.com">email@domain.com</a><br>
        <strong>Phone:</strong> <a href="tel:1234567890">123-456-7890</a><br>
        <strong>LinkedIn:</strong> <a href="http://linkedin.com/">http://linkedin.com</a>
      </p>
    </div>
    <div
      class="bio"
      v-html="'<p>Bio goes here.</p>'"
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
