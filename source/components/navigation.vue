<template>
    <div>
        <p>Меню</p>
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

</style>