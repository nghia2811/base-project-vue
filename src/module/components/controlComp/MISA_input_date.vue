<template>
  <div class="input-form" v-bind:style="styleTemplate">
    <label class="input-label" v-bind:for="id">{{ label }}</label>
    <input
      v-show="!isReadonly"
      class="MISA-input-date"
      type="date"
      :id="id"
      :style="styleInput"
      v-model="internalValue"
      formatType="Dob"
      v-format
      v-on="inputListeners"
    />

    <input
      v-show="isReadonly"
      class="MISA-input-readonly"
      type="date"
      :style="styleInput"
      v-model="internalValue"
      formatType="Dob"
      v-format
      readonly
    />
  </div>
</template>

<script>
export default {
  name: "MisaInputDate",
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
      type: [String, Date],
      default: "",
    },
  },

  data() {
    return {
      internalValue: this.value,
    };
  },
  watch: {
    value(newVal) {
      // immediate: true,
      // handler (newVal) {
      this.internalValue = newVal;
      // },
    },

    // internalValue(newV, oldV) {
    //   this.$emit("input", newV, oldV);
    // },
  },
  computed: {
    inputListeners: function () {
      var vm = this;
      // `Object.assign` merges objects together to form a new object
      return Object.assign(
        {},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            vm.$emit("input", event.target.value);
          },
        }
      );
    },
  },
};
</script>

<style>
/* style cho tất cả input form */
.input-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px 5px;
}

.input-form label {
  font-size: 12px;
  font-family: OpenSans-Bold;
}

.MISA-input-date {
  border-radius: 2px;
  border: 1px solid #bbb;
  margin-top: 4px;
  outline: none;
  height: 32px;
  font-size: 13px;
  padding: 5px 10px;
  padding-right: unset;
  text-overflow: ellipsis;
}

.MISA-input-date:hover {
  border: 1px solid #019160;
}

.MISA-input-date:focus {
  border: 1px solid #019160;
}
</style>
