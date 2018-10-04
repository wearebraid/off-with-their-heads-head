<template>
  <div class="staff-full-bio">
    <div class="headshot">
      <img :src="staffData.headshot">
    </div>
    <div class="meta">
      <h3>{{ name }}</h3>
      <p><strong>{{ staffData.job_title }}, <em>{{ staffData.department }}</em></strong></p>
      <p>
        <strong>Email:</strong> <a :href="`mailto:${staffData.email}`">{{ staffData.email }}</a><br>
        <strong>Phone:</strong> <a :href="`tel:${staffData.phone}`">{{ staffData.phone }}</a><br>
        <strong>LinkedIn:</strong> <a :href="staffData.linkedin">{{ staffData.linkedin }}</a>
      </p>
    </div>
    <div
      class="bio"
      v-html="staffData.bio"
    />
  </div>
</template>

<script>
export default {
  props: {
    staffData: {
      type: Object,
      required: true
    }
  },
  computed: {
    name () {
      return `${this.staffData.first_name} ${this.staffData.last_name}`
    }
  }
}
</script>

<style lang="scss" scoped>
.staff-full-bio {
  @include medium-up {
    display: flex;
    flex-wrap: wrap;
  }
}
.headshot {
  margin-bottom: 1em;

  @include medium-up {
  }
}
.meta {
  @include medium-up {
    padding-left: 1em;
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
