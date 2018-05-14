<template>
    <div class="nav">
      <div class="top">
        <span>Меню</span>
        <div class="burger"></div>
      </div>
      <div class="menu">
        <div class="element-border flex fcenter">
          <div class="element flex fcenter fcol">
            <span>Список покупок</span>
            <img src="img/icon-256.png" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      // Переменные
    };
  },
  methods: {
    setPage(page) {
      window.setPage(page);
    },
    getPage() {
      return window.getPage();
    }
    // Функции
  },
  mounted() {
    // Как только создался делать что-то
  }
};
</script>

<style lang="less" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  .top {
    height: 60px;
    background-color: indianred;
  }
  .menu {
    position: fixed;
    top: 60px;
    left: 0;
    z-index: 2;
    right: 0;
    bottom: 0;
    background-color: #333;
    height: 100%;
    .element-border {
      width: 210px;
      height: 230px;
      background-color: rgba(255, 255, 255, 0.28);
      padding: 0 10px;
      border-radius: 150px;
      margin: 15px;
      .element {
        background-color: #fff;
        border-radius: 150px;
        min-width: 210px;
        min-height: 210px;
        img {
          height: 85px;
        }
        span {
          font-size: 23px;
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>