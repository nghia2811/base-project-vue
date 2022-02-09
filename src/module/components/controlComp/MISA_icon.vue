<template>
  <div :id="id" class="MISA-icon" v-bind:style="styleTemplate">
  </div>
</template>

<script>
export default {
  name: "MisaIcon",
  props: {
    styleTemplate: {
      type: Object,
      default: function(){
        return {}
      }
    },
    id: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>

.MISA-icon {
  width: 24px;
  height: 24px;
  background: url("../../assets/img/Sprites.c70c309e.svg") no-repeat;
  cursor: pointer;
}

</style>
