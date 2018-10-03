<template>
  <div class="staff-card col-md-6">
    <div class="staff-inner single-product">
      <div class="thumb">
        <img :src="staffData.headshot">
      </div>
      <div class="details">
        <h4>{{ name }}</h4>
        <p><strong>{{ staffData.job_title }}, <em>{{ staffData.department }}</em></strong></p>
        <p>
          "{{ staffData.quote }}"
        </p>
        <a
          href="#"
          class="primary-btn text-uppercase">View Details</a>
      </div>
    </div>
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
.staff-card {
  margin-bottom: 2em;
  transition: transform .5s;

  &:hover {
    transform: translateY(-1.5%);
  }

  .staff-inner {
    display: flex;
    flex-direction: column;

    @include large-up {
      flex-direction: row;
    }
  }

  .thumb {
    display: flex;

    img {
      margin: auto;
    }
  }

  .details {
    flex: 1;

    h4 {
      margin-bottom: .25em;
    }
  }
}

.primary-btn {
    color: $title-color !important;

    .staff-card:hover & {
      color: $primary-color !important;
      border: 1px solid $primary-color !important;
    }
  }
</style>
