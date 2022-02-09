<template>
  <div class="search-form" v-bind:style="styleTemplate">
    <input class="MISA-search" v-bind:id="id" v-bind:style="styleInput" placeholder="Nhập từ khóa tìm kiếm"/>
    <div class="search-icon"></div>
  </div>
</template>

<script>
export default {
  name: "MisaSearch",
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
      default: function(){
        return {}
      },
    },
    styleInput: {
      type: Object,
      default: function(){
        return {}
      }
    },
  },
};
</script>

<style>
/* style cho tất cả input form */
.search-form {
  position: relative;
}

.search-form .search-icon {
  position: absolute;
  top: 7px;
  right: 5px;
  width: 24px;
  height: 24px;
  background: url("../../assets/img/Sprites.c70c309e.svg") no-repeat;
  background-position: -992px -360px;
  cursor: pointer;
}

.MISA-search {
  border-radius: 2px;
  border: 1px solid #bbb;
  outline: none;
  height: 30px;
  width: 100%;
  font-size: 13px;
  padding: 5px 10px;
  padding-right: 30px;
  margin-right: 5px;
  text-overflow: ellipsis;
}

.MISA-search:hover {
  border: 2px solid #aaa;
}

.MISA-search:focus {
  border: 1px solid #019160;
}

.MISA-search::placeholder {
  font-size: 12px;
  font-family: OpenSans-Italic;
}
</style>
