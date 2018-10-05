<template>
  <div :class="{'modal-open': modalVisible}">
    <div
      class="modal"
      tabindex="-1"
      @click="closeModal()"
    >
      <div
        class="modal-dialog"
        @click.stop
      >
        <div class="modal-content">
          <div class="modal-body">
            <slot />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="closeModal()"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      modalVisible: state => state.modalVisible
    })
  },
  methods: {
    closeModal () {
      this.$store.commit('setModalVisible', false)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-open {
  .modal {
    display: flex;
    opacity: 1;
  }
}

.modal {
  opacity: 0;
  transition: opacity 1s;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2em;
  background: rgba(#000, .5);

  .modal-dialog {
    min-width: 300px;
    width: 100%;
    max-width: 600px;
    margin: auto;
  }
}
</style>
