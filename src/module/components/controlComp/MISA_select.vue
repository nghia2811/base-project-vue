<template>
  <div
    class="select-form"
    v-bind:style="styleTemplate"
    v-click-outside="onClickOutside"
  >
    <div style="display: flex">
      <label class="select-label" v-bind:for="id">{{ label }}</label>
      <span style="color: red; margin-left: 2px" v-show="required">*</span>
    </div>
    <input
      v-show="!isReadonly"
      class="MISA-select"
      :id="id"
      :style="styleSelect"
      v-model="selectedValue"
      readonly
    />
    <input
      v-show="isReadonly"
      class="MISA-input-readonly"
      :style="styleSelect"
      v-model="selectedValue"
      readonly
    />
    <div class="dropdown" @click="showForm = !showForm" :style="styleDropdown">
      <div class="dropdown-icon"></div>
    </div>
    <div class="combobox-list" v-show="showForm" :style="styleCombobox">
      <div
        class="combobox-item"
        v-for="(item, index) in comboboxList"
        :key="index"
        :class="{ comboboxSelected: selectedItem == index }"
        @click="handleClickTr(item.value, index)"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside";

export default {
  name: "MisaSelect",
  props: {
    label: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    styleTemplate: {
      type: Object,
      default: function () {
        return {};
      },
    },
    styleSelect: {
      type: Object,
      default: function () {
        return {};
      },
    },
    styleDropdown: {
      type: Object,
      default: function () {
        return {};
      },
    },
    styleCombobox: {
      type: Object,
      default: function () {
        return {};
      },
    },
    comboboxList: {
      type: Array,
      default: function () {
        return [];
      },
    },
    isReadonly: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showForm: false,
      selectedValue: this.comboboxList[0],
      selectedItem: 0,
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  mounted() {
    if (this.comboboxList.length != 0) {
      this.selectedValue = this.comboboxList[this.selectedItem].value;
      this.$emit("input", this.selectedValue, this.selectedValue);
    }
  },
  methods: {
    onClickOutside(event) {
      this.showForm = false;
    },
    handleClickTr(value, index) {
      this.selectedValue = value;
      this.selectedItem = index;
      this.showForm = false;
    },
  },
  watch: {
    selectedValue: function (newVal, oldVal) {
      // watch it
      this.$emit("input", newVal, oldVal);
    },
  },
};
</script>

<style>
/* style cho tất cả input form */
.select-form {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px 5px;
}

.select-form label {
  font-size: 12px;
  font-family: OpenSans-Bold;
}

.MISA-select {
  border-radius: 2px;
  width: 100%;
  border: 1px solid #bbb;
  background-color: white;
  margin-top: 4px;
  outline: none;
  height: 32px;
  font-size: 13px;
  padding: 5px 10px;
  padding-right: unset;
  text-overflow: ellipsis;
}

.MISA-select:hover {
  border: 1px solid #019160;
}

.MISA-select:focus {
  border: 1px solid #019160;
}

.dropdown {
  position: absolute;
  bottom: 1px;
  right: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
}

.dropdown:hover {
  background: #ddd;
}

.dropdown-icon {
  width: 16px;
  height: 16px;
  background: url("../../assets/img/Sprites.c70c309e.svg") no-repeat;
  cursor: pointer;
  background-position: -560px -359px;
}

.combobox-list {
  position: absolute;
  top: 38px;
  left: 0;
  width: 100%;
  padding: 5px 0;
  border: 1px solid #bbb;
  border-radius: 3px;
  background-color: white;
  z-index: 10;
  overflow: auto;
}

.combobox-item {
  padding: 8px;
  cursor: pointer;
}

.combobox-item:hover {
  padding: 8px;
  color: #2ca01c;
  background-color: #eee;
}

.comboboxSelected {
  background-color: #2ca01c;
  color: #fff;
}

.comboboxSelected:hover {
  background-color: #2ca01c;
  color: #fff;
}
</style>
