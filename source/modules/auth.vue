<template>
    <div>
      <p ref="page">Автоизация</p>

      <i class="pe-7s-menu"></i>
      <!-- ПРИВЯЗКА ЗНАЧЕНИЯ -->
      <input 
        :class="error ? 'error':''" 
        type="text" 
        v-model="login" 
        @keyup.enter="auth()"
        @focus="error=false"/>

      <!-- ПРОВЕРИТЬ -->
      <a @click="auth()">Вход</a>
    </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      login: "test",
      password: "",
      error: false
    };
  },
  methods: {
    auth() {
      // this.$refs.page.innerHTML = "Привет мир";
      this.error = false;
      if (this.login.length > 0 && this.password.length > 0) {
        console.log("АВТОРИЗИРУЕМ");
        this.$emit("authed");
      } else {
        this.error = "Не введен логн или пароль";
        console.log("Ошибка ввода");
      }
    }
  }
};
</script>

<style lang="less" scoped>
input {
  &:focus {
  }

  &:blur {
  }
}

.error {
  background-color: crimson;
}
</style>