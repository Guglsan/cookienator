<template>
    <div class="fcenter flex w100 h100 auth-window">
      <div class="auth-border">
        <div class="auth-form flex fcol">

          <span>Авторизация</span>

          <div class="flex">
            <div class="input-field fcol flex fcenter">
              <label for="auth-login">Логин</label>
              <input 
                :class="error ? 'error':''" 
                type="text" 
                id="auth-login"
                v-model="login" 
                @keyup.enter="auth()"
                @focus="error=false"/>
            </div>

            <div class="input-field fcol flex fcenter">
              <label for="auth-password">Пароль</label>
              <input 
                :class="error ? 'error':''" 
                type="password" 
                id="auth-password"
                v-model="password" 
                @keyup.enter="auth()"
                @focus="error=false"/>
            </div>
          </div>

          <btn @click="auth()">Вход</btn>

        </div>
     
      </div>
    </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      login: "",
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
  .auth-border {
    background-color: #ffffff8a;
    padding: 17px;
    border-radius: 20px;
  }
  .auth-form {
    background-color: #fff;
    min-height: 300px;
    width: 450px;
    border-radius: 5px;
    span {
      text-align: center;
      padding-top: 25px;
      font-size: 30px;
      border-bottom: 1px solid #dadada;
      padding-bottom: 25px;
      margin: 0 15px;
    }
    .flex {
      max-height: 110px;
      min-height: 110px;
    }
  }
}
.input-field {
  width: 50%;
  label {
    align-self: flex-start;
    padding-left: 27px;
    padding-bottom: 15px;
  }
  input {
    height: 25px;
    transition: border-color 0.4s;
    border: 1px solid #bdb9b9;
    outline: none;
    padding-left: 5px;
    padding-right: 5px;

    &:focus {
      border-color: #7c7982;
    }
  }
}

.error {
  border-color: crimson !important;
}

// Планшеты (Если под планшеты и мобильные одинаково, то в мобильные дублировать не нужно)
@media screen and (max-width: 1024px) {
}

// Мобильные
@media screen and (max-width: 600px) {
  .auth-window .auth-form {
    width: 100%;
    .flex {
      flex-direction: column;
      max-height: initial;
      min-height: 65px;
      .input-field {
        width: 100%;
        label {
          padding-bottom: 5px;
        }
        input {
          width: 90%;
        }
      }
    }
  }
  .auth-window .auth-border {
    border-radius: 0;
    width: 100%;
  }
  .experiment {
    margin-bottom: 15px !important;
  }
}
</style>