<template>
    <div class="experiment" @click="click">
        <i><slot></slot></i>
        <div></div>
    </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="less" scoped>
.experiment {
  justify-content: center;
  align-items: center;
  display: flex;
  width: 150px;
  height: 50px;
  margin: auto;
  margin-bottom: 35px;
  color: #fff;
  font-family: Segoe UI;
  font-size: 19px;
  border-radius: 0 5px;
  position: relative;
  border: 3px solid #a064ac;
  overflow: hidden;
  transition: border-radius 0.4s;
  cursor: pointer;

  i {
    font-style: normal;
    position: absolute;
    z-index: 2;
  }
  div {
    position: absolute;
    background-color: #a064ac;
    content: "";
    width: 150px;
    height: 50px;
    transform: skewX(35deg);
    transition: transform 0.4s, width 0.4s;
  }
  &:hover {
    border-radius: 5px;
    div {
      transform: skewX(0deg);
      width: 120px;
    }
  }
  &:active {
    div {
      width: 150px;
    }
  }
}
</style>


