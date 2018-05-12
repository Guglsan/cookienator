<template>
    <div>

      <div class="auth-window fcenter flex">

      </div>
      <p ref="page">Авторизация</p>
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
        this.error = "Не введен логин или пароль";
        console.log("Ошибка ввода");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.auth-window {
  background-color: #333;
  min-width: 270px;
  max-width: 500px;
  height: 70vh;
}
// input {
//   &:focus {
//   }

//   &:blur {
//   }
// }

.error {
  background-color: crimson;
}
</style>