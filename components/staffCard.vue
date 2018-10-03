<template>
  <div class="staff-card col-md-6">
    <div class="staff-inner single-product">
      <div class="thumb">
        <img src="https://placehold.it/128x128">
      </div>
      <div class="details">
        <h4>Staff Member Name</h4>
        <p><strong>Position, <em>Department</em></strong></p>
        <p>
          "Member quote goes here, they're normally not too long, but not too short either."
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
