<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
@import "@/assets/scss/variables.scss";


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.container {
  max-width: 1170px;
}

button:focus {
  outline: none;
}

form > input:focus,
form > label:focus,
.custom-file-input:focus ~ .custom-file-label {
  outline: none;
  border: none;
  box-shadow: none;
}

#app {
  position: relative;
}

// Input file custom style
#file-large,
.b-custom-control-lg.custom-file {
  height: 55px;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: none;
    border: 1px solid $buttonDisabled;
  }
}

#file-large:focus,
label.custom-file-label:focus {
  outline: none;
  box-shadow: none;
  border: 1px solid $buttonDisabled;
}

.custom-file-input:focus ~ .custom-file-label {
  border: 2px solid $buttonDisabled;

  &:after {
    height: 55px;
    top: -2px;
    right: -2px;
    border-left-width: 2px;
    border-color: $buttonDisabled;
    line-height: 48px;
  }

}

.b-custom-control-lg > label.custom-file-label {
  height: 55px;
  @include p2;
  line-height: 55px;
  padding: 0 10px;
  color: $linkDisable;

  &:after {
    padding: 0 32px;
    line-height: 55px;
    top: -1px;
    right: -1px;
    height: 55px;
    @include fontSourceBold;
    color: $primariColor;
    font-size: 20px;
    background-color: #fff;
    border-radius: 0 4px 4px 0;
    border: 1px solid $primariColor;
  }
}

.custom-file-input.is-invalid:focus ~ .custom-file-label {
  box-shadow: none;
  outline: none;
  border: 2px solid $error;

  &:after {
    height: 55px;
    top: -2px;
    right: 0;
    border-left-width: 2px;
    line-height: 48px;
  }

}

.custom-file-input.is-invalid ~ .custom-file-label {
  border-color: $error;
}

.is-invalid.b-custom-control-lg > .custom-file-label:after {
  border: 1px solid $error;
}


// Modal custom style

.modal-content .modal-header {
  padding-bottom: 0 !important;
}

.custom-modal-btn button.btn-success {
  background: none;
  border: none;
  color: $primariColor;
  font-weight: bold;
}

.custom-modal-btn .btn-success:not(:disabled):not(.disabled):active,
.custom-modal-btn .btn-success:not(:disabled):not(.disabled).active,
.custom-modal-btn .show > .btn-success.dropdown-toggle,
.custom-modal-btn .btn-success:focus {
  background-color: transparent;
  box-shadow: none;
  color: $primariColor;
  background: none;
}

// Mobile

@media only screen and (max-width: 767px) {
  .b-custom-control-lg > label.custom-file-label:after {
    font-size: 0;
    padding: 0;
    width: 56px;
    background: url("~@/assets/icons/upload.svg") no-repeat;
    background-position: center;
    border: 2px solid #ef6c00;
  }

}
</style>
