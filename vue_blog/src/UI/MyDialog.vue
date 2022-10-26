<template>
  <div 
    class="dialog"
    v-if="show"
    @click.stop="closeDialog"
  >
    <div 
      class="content"
      @click.stop
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-dialog',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeDialog() {
      this.$emit('update:show', false);
    },
  },
}
</script>

<style scoped>
  .dialog {
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    background-color: rgba(0, 0, 0, 0.558);
  }

  .content {
    margin: auto;
    min-width: 330px;
    min-height: 120px;
    border-radius: 12px;
    background-color: aliceblue;
    padding: 20px;
  }
</style>