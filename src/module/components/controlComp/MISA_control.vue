<template>
<div>
  <div class="control-button ahead" v-if="type==1">
  </div>
  <div class="control-button right" v-if="type==2">
  </div>
  <div class="control-button left" v-if="type==3">
  </div>
  <div class="control-button back" v-if="type==4">
  </div>
</div>
</template>

<script>
export default {
  name: "MisaControl",
  props: {
    type: {
      type: Number,
      default: 1,
    }
  },
};
</script>

<style>
.control-button{
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: cover;
}

.right{
  margin-left: 100px;
    background-image: url("../../assets/img/1200px-Arrow_icon.svg.png");
}
.back{
  margin-left: 100px;

    background-image: url("../../assets/img/back.svg.png");
}
.ahead{
  margin-left: 100px;

    background-image: url("../../assets/img/ahead.svg.png");
}
.left{
    background-image: url("../../assets/img/left.svg.png");
}

</style>
