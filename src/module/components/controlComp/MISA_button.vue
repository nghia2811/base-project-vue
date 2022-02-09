<template>
  <div>
    <button class="MISA-button" v-bind:style="styleButton">
        {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "MisaButton",
  props: {
    text: {
      type: String,
      default: "",
    },
    styleButton: {
      type: Object,
      default: function(){
        return {}
      }
    },
  },
};
</script>

<style>

.MISA-button {
  border-radius: 3px;
  border: 1px solid #999;
  font-family: OpenSans-Bold;
  outline: none;
}

.MISA-button:hover {
  background: #e5e5e5;
}
</style>
