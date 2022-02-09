<template>
  <div class="header-misa">
    <p class="left-header">{{ companyName }}</p>
    <MisaIcon
      v-bind:styleTemplate="{
        width: '16px',
        height: '16px',
        backgroundPosition: '-80px -360px',
        transform: 'rotate(90deg)',
      }"
    />

    <div class="right-header">
      <MisaSearch style="margin-right: 20px" :id="'headerSearch'" />
      <div class="header-icon" style="background-position: -568px -30px"></div>
      <div class="header-icon" style="background-position: -675px -30px"></div>
      <div class="header-icon" style="background-position: -899px -30px"></div>
      <div class="header-icon" style="background-position: -731px -30px"></div>
      <div class="header-icon" style="background-position: -788px -30px"></div>
      <div class="avatar"></div>
      <p>{{ userName }}</p>
        <MisaIcon
          v-bind:styleTemplate="{
            width: '16px',
            height: '16px',
            backgroundPosition: '-1076px -32px',
          }"
        />
      
    </div>
  </div>
</template>

<script>
import MisaSearch from "./controlComp/MISA_search";
import MisaIcon from "./controlComp/MISA_icon";

export default {
  name: "header-misa",
  components: {
    MisaSearch,
    MisaIcon,
  },
  data() {
    return {
      companyName: "Project",
      userName: "Nguyễn Trung Nghĩa",
    };
  },
};
</script>

<style>
.header-misa {
  z-index: 1;
  float: left;
  display: flex;
  width: calc(100% - 164px);
  height: 48px;
  border-bottom: 1px solid #e5e5e5;
  align-items: center;
  /* box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2); */
  background: white;
}

.header-misa .left-header {
  font-size: 14px;
  font-weight: 600;
  margin-left: 15px;
  margin-right: 10px;
  user-select: none;
}

.header-misa .right-header {
  position: absolute;
  display: flex;
  align-items: center;
  right: 20px;
}

.header-misa .header-icon {
  width: 24px;
  height: 24px;
  margin-right: 20px;
  background: url("../assets/img/Sprites.c70c309e.svg") no-repeat;
  cursor: pointer;
}

.header-misa .right-header .avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 16px;
  background-image: url("../assets/logo.svg");
  background-size: cover;
  background-repeat: no-repeat;
}

.header-misa p {
  margin-right: 10px;
  font-weight: 700;
  user-select: none;
}

.header-misa i {
  cursor: pointer;
}
</style>
