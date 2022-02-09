<template>
  <div
    class="select-form"
    v-bind:style="styleTemplate"
    v-click-outside="onClickOutside"
  >
    <label class="select-label" v-bind:for="id">{{ label }}</label>
    <input
      v-show="!isReadonly"
      class="MISA-select-2"
      :id="id"
      :style="styleSelect"
      autocomplete="off"
      v-bind="$attrs"
      v-model="showValue"
      @keyup="onSearchCbx($event)"
    />

    <input
      v-show="isReadonly"
      class="MISA-input-readonly"
      :style="styleSelect"
      v-model="showValue"
      readonly
    />
    <div class="select-icon">
      <div
        class="dropdown-2"
        style="width: 25px"
        @click="showTableForm = !showTableForm"
      >
        <div class="dropdown-icon"></div>
      </div>
    </div>

    <div class="combobox-list-2" :style="styleCombobox" v-show="showTableForm">
      <table>
        <thead>
          <tr>
            <th
              v-for="(item, index) in tableTh"
              :key="index"
              :class="[item.class]"
            >
              {{ item.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in filterList"
            :key="index"
            :class="{ selectedTr: selectedItem == index }"
            @click="
              onClickTr(
                item[selectProperty],
                item[showProperty],
                item[emitProperty],
                index
              )
            "
          >
            <td
              v-for="(itemTd, index) in tableTh"
              :key="index"
              :class="[itemTd.class]"
            >
              {{ item[itemTd.fieldName] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside";

export default {
  name: "MisaSelect1",
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
    styleCombobox: {
      type: Object,
      default: function () {
        return {};
      },
    },
    tableTh: {
      type: Array,
      default: function () {
        return [];
      },
    },
    comboboxList: {
      type: Array,
      default: function () {
        return [];
      },
    },
    showProperty: {
      type: String,
      default: "",
    },
    selectProperty: {
      type: String,
      default: "",
    },
    emitProperty: {
      type: String,
      default: "",
    },
    isReadonly: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: "",
    },
    indexParent: {
      type: [Number, Int8Array],
      default: 0,
    },
    defaultItem: {
      type: [Number, Int8Array],
      default: -1,
    },
  },
  data() {
    return {
      showTableForm: false,
      selectValue: "",
      showValue: this.value,
      selectedItem: -1,
      filterList: [],
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  created() {
    this.filterList = this.comboboxList;
  },
  methods: {
    onClickOutside(event) {
      this.showTableForm = false;
    },
    onClickTr(value, showValue, emitValue, index) {
      this.selectValue = value;
      this.showValue = showValue;
      this.selectedItem = index;
      this.showTableForm = false;
      this.$emit("handleClickRow", this.id, this.indexParent, emitValue);
    },
    onSearchCbx(event) {
      this.showTableForm = true;
      this.filterList = [];
      for (let i = 0; i < this.comboboxList.length; i++) {
        var value = this.comboboxList[i][this.selectProperty].toLowerCase();
        if (value.includes(event.target.value.toLowerCase()))
          this.filterList.push(this.comboboxList[i]);
      }
    },
  },
  watch: {
    value(newVal) {
      // immediate: true,
      // handler (newVal) {
      this.showValue = newVal;
      // },
    },
    selectValue(newV, oldV) {
      this.$emit("input", newV, oldV);
    },
    comboboxList: function (newVal, oldVal) {
      this.filterList = newVal;
    },
  },
};
</script>

<style>
</style>
