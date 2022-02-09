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
      <div class="dropdown-2" style="border: none">
        <div class="add-icon"></div>
      </div>

      <div class="dropdown-2" @click="showTableForm = !showTableForm">
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
  name: "MisaSelect2",
  props: {
    label: {
      type: String,
      default: "",
    },
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
  },
  data() {
    return {
      showTableForm: false,
      selectValue: this.value,
      showValue: "",
      selectedItem: -1,
      filterList: [],
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },

  mounted() {
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
      this.$emit("handleClickRow", this.id, emitValue);
    },
    onSearchCbx(event) {
      this.showTableForm = true;
      this.filterList = [];
      for (let i = 0; i < this.comboboxList.length; i++) {
        var value = this.comboboxList[i][this.showProperty].toLowerCase();
        if (value.includes(event.target.value.toLowerCase()))
          this.filterList.push(this.comboboxList[i]);
      }
    },
  },
  watch: {
    value(newVal) {
      this.selectValue = newVal;
      for (var item of this.comboboxList) {
        if (item[this.selectProperty] == newVal) {
          this.showValue = item[this.showProperty];
        }
      }
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

.MISA-select-2 {
  border-radius: 2px;
  border: 1px solid #bbb;
  margin-top: 4px;
  outline: none;
  height: 32px;
  width: 100%;
  background-color: #fff;
  font-size: 13px;
  padding: 5px 10px;
  text-overflow: ellipsis;
}

.MISA-select-2:hover {
  border: 1px solid #019160;
}

.MISA-select-2:focus {
  border: 1px solid #019160;
}

.select-icon {
  position: absolute;
  bottom: 1px;
  right: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dropdown-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-left: 1px solid #e5e5e5;
  cursor: pointer;
}

.dropdown-2:hover {
  background: #ddd;
}

.add-icon {
  width: 16px;
  height: 16px;
  background: url("../../assets/img/Sprites.c70c309e.svg") no-repeat;
  cursor: pointer;
  background-position: -32px -312px;
}
.dropdown-icon {
  width: 16px;
  height: 16px;
  background: url("../../assets/img/Sprites.c70c309e.svg") no-repeat;
  cursor: pointer;
  background-position: -560px -359px;
}

.combobox-list-2 {
  position: absolute;
  top: 55px;
  left: 0;
  max-height: 200px;
  overflow: auto;
  width: 100%;
  border: 1px solid #bbb;
  border-radius: 3px;
  background-color: white;
  z-index: 10;
}

.combobox-list-2 table th {
  font-size: 11px;
  font-family: OpenSans-Bold;
  border: none;
  background-color: #ebebeb;
  text-transform: none;
}

.combobox-list-2 table td {
  height: 32px;
  border: none;
  cursor: pointer;
  background-color: #fff;
}

.combobox-list-2 table tr:hover td {
  background-color: #fff;
  color: #2ca01c;
}

.combobox-list-2 table .selectedTr td {
  background-color: #2ca01c;
  color: #fff;
}

.combobox-list-2 table .selectedTr:hover td {
  background-color: #2ca01c;
  color: #fff;
}
</style>
