<template>
  <div class="input-form" :style="styleTemplate">
    <div style="display: flex">
      <label class="input-label" :for="id">{{ label }}</label>
      <span style="color: red; margin-left: 2px" v-show="rules == 'required'"
        >*</span
      >
    </div>

    <ValidationProvider
    v-show="!isReadonly"
      name="field"
      :rules="rules"
      :bails="false"
      v-slot="{ classes }"
    >
      <input
        class="MISA-input"
        :class="classes"
        :id="id"
        :style="styleInput"
        autocomplete="off"
        v-bind="$attrs"
        v-model="internalValue"
        v-on="inputListeners"
      />
    </ValidationProvider>

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
export default {
  name: "MisaInput",
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
    value: {
      type: [String, Number],
      default: "",
    },
    rules: {
      type: String,
      default: "",
    },
    isReadonly: {
      type: Boolean,
      default: false,
    }
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
        this.internalValue = newVal
      // },
    },
    
    // internalValue(newV, oldV) {
    //   this.$emit("input", newV, oldV);
    // },    
    
  },
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  }
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

.MISA-input {
  border-radius: 2px;
  background-color: white;
  border: 1px solid #bbb;
  margin-top: 4px;
  outline: none;
  height: 32px;
  width: 100%;
  font-size: 13px;
  padding: 5px 10px;
  text-overflow: ellipsis;
}

.MISA-input-readonly {
  border-radius: 2px;
  border: 1px solid #babec5;
  margin-top: 4px;
  outline: none;
  height: 32px;
  width: 100%;
  font-size: 13px;
  padding: 5px 10px;
  text-overflow: ellipsis;
  background-color: #eff0f2 !important;
}

.MISA-input::placeholder {
  font-family: OpenSans-Italic;
}

.MISA-input:hover {
  border: 1px solid #019160;
}

.MISA-input:focus {
  border: 1px solid #019160;
}

.is-invalid {
  border: 1px solid #eb0600;
}
</style>
