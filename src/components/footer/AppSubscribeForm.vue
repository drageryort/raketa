<template>
  <div class="form-block">
    <h5 class="form-title">
      Newsletter
    </h5>
    <form>
      <div class="form-field-el field-input">
        <input
            class="email"
            type="text"
            placeholder="Enter your email"
            v-model="v$.email.$model"
        >
        <span class="error-field" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </span>
        <button class="btn-iconed-submit submit-btn" type="submit" :disabled="v$.$invalid">
          <img src="@/assets/images/svg/common/send-button.svg" alt="send icon">
        </button>
      </div>
      <div class="form-field-el field-checkbox">
        <label>
          <input
              class="checkbox"
              type="checkbox"
              v-model="v$.agreement.$model"
          >
          <span class="icon"></span>
          <span class="text">I agree to receive newsletter in accordance with the Privacy Policy</span>
        </label>
      </div>
    </form>
  </div>
</template>

<script setup>
import {ref} from "vue"
import {useVuelidate} from "@vuelidate/core";
import {email, helpers, required, sameAs} from "@vuelidate/validators";

const formData = ref({
  email: "",
  agreement: false
})
const rules = {
  agreement: {
    sameAs: sameAs(true )
  },
  email: {
    email: helpers.withMessage("emailError", email),
    required: helpers.withMessage("requiredError", required),
  },
};

const v$ = useVuelidate(rules, formData.value);

</script>

<style lang="scss" scoped>
.form-block {
  margin: 90px 0 0;
  width: 460px;

  .form-title {
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: var(--color-gray);
  }

  form {
    .field-input {
      display: flex;
      flex-direction: column;
      margin: 14px 0 0;

      input {
        padding: 13px 60px 15px 15px;
      }

      .error-field {
      }
    }

    .field-checkbox {
      margin: 18px 0 0;

      input {
        display: none;
      }

      label {
        display: flex;
        column-gap: 15px;
        cursor: pointer;

        .icon {
        }

        .text {
          font-family: "TT Norms", sans-serif;
          font-size: 16px;
          line-height: 22px;
          font-feature-settings: 'liga' off;
          color: var(--color-white);
        }
      }
    }

    .btn-iconed-submit {
      position: absolute;
      top: 4px;
      right: 4px;
      z-index: 1;

      img {
      }
    }
  }
}
</style>