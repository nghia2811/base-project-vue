<template>
  <div
    class="checkbox-form"
    :style="styleTemplate"
    @click="changeCheck"
    :class="{ checked: checked == true }"
  >
    <MisaIcon
      v-show="checked == true"
      :styleTemplate="{
        width: '16px',
        height: '16px',
        backgroundPosition: '-1224px -360px',
      }"
    />
  </div>
</template>

<script>
import MisaIcon from "../controlComp/MISA_icon";
export default {
  name: "MisaCheckbox",
  components: {
    MisaIcon,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
    styleTemplate: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    changeCheck() {
      this.checked = !this.checked;
      this.$emit('changeCheck', this.checked);
    },
  },
};
</script>

<style>
/* style cho tất cả input form */
.checkbox-form {
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 1px solid #bbb;
  border-radius: 2px;
  cursor: pointer;
}

.checked {
  border: 1px solid #2ca01c;
}
</style>
