<template>
  <div>
    <nuxt-link to="/">Home Page</nuxt-link>
    <form @submit="onSubmit" novalidate>
      <div class="input-field__container">
        <input type="text" autocomplete="off" v-model="form.name" required id="username" />
        <span>
          <label for="username">Username</label>
        </span>
      </div>
      <Error
        required_text="Username is required!"
        :submitted="isDataSubmitted"
        :value="form.name"
        minlength="3"
        maxlength="5"
        minlength_text="Name is too short!"
        maxlength_text="Name is too long!"
      />

      <div class="input-field__container">
        <input type="text" autocomplete="off" v-model="form.password" id="password" />
        <span>
          <label for="password">Password</label>
        </span>
      </div>

      <Error
        required_text="Password is required!"
        :submitted="isDataSubmitted"
        :value="form.password"
        minlength="3"
        maxlength="5"
        minlength_text="Password is too short!"
        maxlength_text="Password is too long!"
      />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import Error from "@/components/utils/Error.vue";

export default {
  components: {
    Error
  },
  data() {
    return {
      isDataSubmitted: false,
      form: {
        password: "",
        name: ""
      }
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      this.isDataSubmitted = true;
      // this.$auth.loginWith("local", {
      //   data: {
      //     username: this.form.username,
      //     password: this.form.password
      //   }
      // });

      // alert(JSON.stringify(this.form));
    }
  }
};
</script>

<style>
form {
  background-color: rgb(235, 235, 235);
  border: 1px solid #ccc;
  padding: 2.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
form input {
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 12px;
  padding: 6px 12px;
  transition: border 1s;
  letter-spacing: 2px;
}
::-webkit-validation-bubble-message {
  display: none;
}
form input:focus {
  border: 2px solid rgb(184, 45, 21);
  background-color: rgba(255, 199, 189, 0.418);

  border-radius: 4px;
  outline: none;
}
form input:focus + span label {
  top: -18px;
  font-size: 12px;
  letter-spacing: 3px;
  color: rgb(78, 78, 78);
}

/* form input::placeholder {
  padding-left: 5px;
  font-size: 14px;
} */
div.input-field__container {
  position: relative;
}
label[for="username"],
label[for="password"] {
  letter-spacing: 1px;
  font-size: 14px;
  color: rgb(151, 151, 151);
  position: absolute;
  top: 5px;
  left: 10px;
  transition: color 0.5s, letter-spacing 0.5s, font-size 0.5s, top 0.5s;
}
</style>