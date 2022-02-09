<template>
  <div class="navbar">
    <div class="logo-container">
      <div class="logo"></div>
      <div class="img-icon"/>
      <h2>HUST</h2>
    </div>
    <div class="menu-item-list">
      <div
        class="nav-item"
        v-on:click="setActiveTab(0)"
        v-bind:class="{ active: tabActive == 0 }"
      >
        <div class="nav-item-icon icon-dashboard"></div>
        <div class="nav-item-text">Tổng quan</div>
      </div>
      <div
        class="nav-item"
        v-on:click="setActiveTab(1)"
        v-bind:class="{ active: tabActive == 1 }"
      >
        <div class="nav-item-icon icon-ca"></div>
        <div class="nav-item-text">Thông tin</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      tabActive: 0
    };
  },
  mounted() {
    this.tabActive = localStorage.getItem("navSelect");
    this.$bus.$on("unactive-navbar", ($event) => {
      this.tabActive = -1;
    });
  },
  methods: {
    /**
     * Bắt sự kiện chọn tab trên navbar, tab được chọn chuyển màu xanh
     * Author:Nguyễn Trung Nghĩa(10/11/2020)
     */
    setActiveTab(index) {
      this.tabActive = index;
      switch (index) {
        case 0:
          this.$router.push({ name: "dashboard" }).catch(()=>{});;
          break;
        case 1:
          this.$router.push({ name: "caProcess" }).catch(()=>{});;
          localStorage.setItem("tabSelect", 0);
          break;
      }
    },
  },
};
</script>

<style>
.navbar {
  z-index: 1;
  float: left;
  width: 164px;
  height: 100vh;
  background-color: #393a3d;
  color: #fff;
}

.navbar .logo-container {
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: center;
}

.navbar .logo-container .img-icon {
  height: 32px;
  width: 30px;
  background-image: url("../assets/img/Logo_Hust.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.navbar .logo {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  background-image: url("../assets/img/Sprites.c70c309e.svg");
  background-position: -424px -86px;
}

.navbar .menu-item-list {
  width: 100%;
  margin-top: 14px;
}

.navbar .menu-item-list .nav-item {
  line-height: 42px;
  height: 42px;
  border-left: 6px solid transparent;
  padding-left: 8px;
  color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.navbar .menu-item-list .nav-item:hover {
  background-color: #747474;
}

.menu-item-list .nav-item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 7px;
  background-image: url("../assets/img/Sprites.c70c309e.svg");
}

.icon-dashboard {
  background-position: -30px -1628px !important;
}

.icon-ca {
  background-position: -378px -1628px !important;
}

.active {
  background-color: #747474;
  border-left: 6px solid #2ca01c !important;
  font-family: OpenSans-Bold;
}

.active .icon-dashboard {
  background-position: -30px -1585px !important;
}

.active .icon-ca {
  background-position: -378px -1585px !important;
}
</style>
