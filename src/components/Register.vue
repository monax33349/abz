<template>
  <b-container id="singup">
    <h2>Register to get a work</h2>
    <h5>Attention! After successful registration and alert, <br class="d-lg-none" > update the list of users in the block from the top</h5>
    <b-form v-on:submit.prevent="onSubmits">
      <b-row class="row-form">
        <b-col cols="12" md="4" class="input-wrap">
          <label 
            for="name"
            :class="{error:errors.has('name')}"
            >Name</label>
          <b-form-input
            v-model="name"
            type="text"
            id="name"
            v-validate="'required'"
            data-vv-validate-on="blur|change"
            data-vv-name="name"
            :class="{error:errors.has('name')}"
            :state="errors.has('name') ? false : null"
            placeholder="Name"
          />
            <b-form-invalid-feedback :state="errors.has('name')">{{errors.first('name')}}</b-form-invalid-feedback>
        </b-col>

        <b-col cols="12" md="4" class="input-wrap">
          <label 
            for="email"
            :class="{error:errors.has('email')}"
          >Email</label>
          <b-form-input
            v-model="email"
            type="email"
            id="email"
            v-validate="'required|email'"
            data-vv-validate-on="blur|change"
            data-vv-name="email"
            :class="{error:errors.has('email')}"
            :state="errors.has('email') ? false : null"
            placeholder="Email"
          />
            <b-form-invalid-feedback :state="errors.has('email')">{{errors.first('email')}}</b-form-invalid-feedback>
        </b-col>

        <b-col cols="12" md="4" class="input-wrap">
          <label 
            for="phone"
            :class="{error:errors.has('phone')}"
          >Phone</label>
          <b-form-input
            v-model="phone"
            id="phone"
            type="tel"
            v-validate="{required: true, regex: /^((\+38)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/}"
            data-vv-validate-on="blur|change"
            data-vv-name="phone"
            :class="{error:errors.has('phone')}"
            :state="errors.has('phone') ? false : null"
            placeholder="+38 (___)  ___ __ __"
          />
            <b-form-invalid-feedback :state="errors.has('phone')">{{errors.first('phone')}}</b-form-invalid-feedback>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" md="6" class="input-wrap">
          <b-form-select
            v-validate="'required'"
            data-vv-name="Position"
            data-vv-as="selected"
            :state="errors.has('Position') ? false : null"
            :class="{error:errors.has('Position')}"
            class="custom-select-arrow" 
            v-model="selectedPosition">
            <template v-slot:first>
              <option :value="null" disabled>Select your position</option>
            </template>
            <option
              :value="position.id"
              v-for="(position, id) of positions"
              :key="id"
            >{{position.name}}</option>
          </b-form-select>
          <b-form-invalid-feedback :state="errors.has('Position')">{{errors.first('Position')}}</b-form-invalid-feedback>
        </b-col>

        <b-col cols="12" md="6" class="input-wrap last-input">
          <b-form-file
            id="file-large"
            size="lg"
            type="file"
            data-vv-name="file"
            v-validate="{ required: true, mimes: ['image/jpeg', 'image/jpg'] }"
            v-model="selectedFile"
            :state="errors.has('file') ? false : null"
            @change="onFileSelected"
            :class="{error:errors.has('file')}"
            placeholder="Upload your photo"
            browse-text="Upload"
          ></b-form-file>
          <b-form-invalid-feedback :state="errors.has('selectedFile')">{{errors.first('file')}}</b-form-invalid-feedback>
          <p id="input-feedback-custom">File format jpg up to 5 MB, the minimum size of 70x70px</p>
        </b-col>
      </b-row>
      <button class="custom-btn" type="submit" :disabled="!isFormValid">Sign up</button> 
    </b-form>
  </b-container>
</template>

<script>
import ApiLanding from "@/api/landing";
import eventBus from "@/eventBus";

export default {
  $_veeValidate: {
    events: ''
  },

  data() {
    return {
      name: "",
      email: "",
      phone: "",
      selectedPosition: null,
      selectedFile: null,
      positions: {}
    };
  },
  mounted() {
    ApiLanding.getPositions()
      .then(resp => (this.positions = resp.data.positions))
      .catch(console.log);
  },

  computed: {
    isFormValid() {
      return Object.keys(this.fields).every(field => this.fields[field].valid);
    }
  },

  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },

    onSubmits() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          ApiLanding.getToken().then(resp => {
            const form = {
              position_id: this.selectedPosition,
              name: this.name,
              email: this.email,
              phone: this.phone,
              photo: this.selectedFile
            };

            const formData = new FormData();
            for (const key in form) {
              formData.append(key, form[key]);
            }

            ApiLanding.registerUser(formData, resp.data.token)
              .then(() => {
                eventBus.$emit("registration:newUser");
                this.$bvModal.msgBoxOk("You have successfully passed the registration", {
                  title: 'Congratulations',
                  size: 'sm',
                  buttonSize: 'sm',
                  okVariant: 'success',
                  headerClass: 'p-4 border-bottom-0',
                  footerClass: 'p-4 border-top-0 custom-modal-btn',
                  centered: true
                });

                  this.name = "",
                  this.email = "",
                  this.phone = "",
                  this.selectedPosition = null,
                  this.selectedFile= null
              })
              .catch(error => console.log(error));
          });
          return;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

#singup {
  @include maxW;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;

  h2 {
    @include h2;
    margin-bottom: 13px;
    color: #000; 
  }

  h5 {
    @include h5;
    margin-bottom: 63px;
    color: #000;
  }

}

//  Form

form {
  width: 100%;
}

.row-form {
  margin-bottom: 37px;

  input {
    position: relative;
    height: 55px;
    border: 1px solid #b7b7b7;
    border-radius: 4px;
    width: 100%;

    &::placeholder {
      @include p2;
      color: #8d8c8c;
      line-height: 38px;
    }

    &:focus {
      box-shadow: none;
      border-width: 2px;
    }

  }

  label {
    position: absolute;
    top: -9px;
    left: 24px;
    z-index: 99;
    color: #8d8c8c;
    background: #fff;
    padding: 0 5px;
    font-size: 12px;
  }
}

.form-control.is-invalid {
  background-image: none;
}

//  Select style

.custom-select-arrow {
  background: url("../assets/icons/caret-down.svg") 98% / 15% no-repeat #fff;
  background-size: 16px;
  border: 1px solid #b7b7b7;
  height: 55px;
  width: 100%;

  &:focus {
    box-shadow: none;
    border-width: 2px;
  }
}

//  Input file style

.custom-btn {
    @include fontSourceBold;
    display: block;
    width: 290px;
    height: 40px;
    border: none;
    font-size: 20px;
    margin: 34px auto 0;
    border-radius: 4px;
    background-color: #ef6c00;
    color: #fff;
    cursor: pointer;
    
    &:hover {
      background-color: $buttonHover;
    }
    
    &:disabled {
      background-color: #d7d7d7;
      color: $linkDisable;
    }

}


p#input-feedback-custom {
  padding-left: 10px;
  font-size: 12px;
  color: $linkDisable;
}

// Error style

select.is-invalid,
input.error {
  border: 1px solid $error;

  &:focus {
    border: 2px solid $error;
  }

}

label.error {
  color: $error;
}

.error-invalid {
  padding-left: 0.75rem;
  font-size: 12px;
  color: $error;
}

.invalid-feedback {
  padding-left: 10px;
}

// Mobile

@media only screen and (max-width: 992px) { 
  #singup {
    padding: 0 24px 120px 24px;

    h2 {
      margin-bottom: 20px;
    }

    h5 {
      text-align: center;
      margin-bottom: 56px;
    }

  } 

}


@media only screen and (max-width: 767px) {
  #singup {
    padding-bottom: 70px;

    .row-form{
        margin-bottom: 0;
    }

    .input-wrap {
      margin-bottom: 32px; 
    }

    .input-wrap.last-input {
      margin-bottom: 13px;
    }

    h2 {
      @include h3;
      margin-bottom: 10px;
    }

    h5 {
      @include p2;
      text-align: center;
    }

    form {
      width: auto;

      .custom-select-arrow {
        background: url("../assets/icons/caret-down.svg") 96% / 15% no-repeat #fff;
      }

    }

    .custom-btn {
      margin-top: 0;
    }

  }

}

</style>
