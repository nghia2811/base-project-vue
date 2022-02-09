<template>
  <div class="input-form" :style="styleTemplate">
    <div style="display: flex">
      <label class="input-label" :for="id">{{ label }}</label>
      <span style="color: red; margin-left: 2px" v-show="rules == 'required'"
        >*</span
      >
    </div>

    <input
      v-show="!isReadonly"
      class="MISA-input"
      :id="id"
      :style="styleInput"
      autocomplete="off"
      v-bind="$attrs"
      v-model="internalValue"
    />

    <input
      v-show="isReadonly"
      class="MISA-input-readonly"
      :style="styleInput"
      v-model="internalValue"
      readonly
    />
  </div>
</template>

<script>
import AutoNumeric from "autonumeric";

export default {
  name: "MisaNumeric",
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
    styleInput: {
      type: Object,
      default: function () {
        return {};
      },
    },
    isReadonly: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: "",
    },
    rules: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      internalValue: this.value,
      anElement: null,
    };
  },
  mounted() {
    var input = document.getElementById(this.id);
    // The options are...optional :)
    const autoNumericOptionsEuro = {
      digitGroupSeparator: ".",
      decimalCharacter: ",",
      decimalCharacterAlternative: ".",
      decimalPlaces: 0,
      currencySymbolPlacement:
        AutoNumeric.options.currencySymbolPlacement.suffix,
      roundingMethod: AutoNumeric.options.roundingMethod.halfUpSymmetric,
    };

    // Initialization
    this.anElement = new AutoNumeric(input, autoNumericOptionsEuro);
    
    input.addEventListener('keydown', function(e) {
    if (e.which === 38 || e.which === 40) {
        e.preventDefault();
    }
});
  },
  watch: {
    internalValue(newV) {
      this.$emit("input", this.anElement.rawValue);
    },
  },
};
</script>

<style>
</style>
