<template>
  <div>
    <b-container class="header-wrapper" fluid>
      <b-row class="top-header">
        <b-col class="logo" cols="8" lg="2">
          <a href="/">
            <img src="@/assets/logo/logo.svg" alt="logo" />
          </a>
        </b-col>
        <b-col cols="12" lg="7" class="d-lg-flex d-none justify-content-center">
          <b-nav>
            <b-nav-item v-for="(nav, i) in navs" :key="i" v-scroll-to="`#${i}`">{{ nav }}</b-nav-item>
          </b-nav>
        </b-col>
        <b-col class="header-profile d-none d-lg-flex" lg="3">
          <div class="profile-data">
            <div class="profile-name">{{user.name}}</div>
            <div class="profile-email">{{user.email}}</div>
          </div>
          <div class="profile-photo">
            <img v-if="user.photo" :src="(user.photo)" :alt="(user.name)" />
            <img v-else src="@/assets/imgs/no-avatar.jpg" alt="no-avatar" />
          </div>
          <div class="profile-icon">
            <svg
              width="24px"
              height="20px"
              viewBox="0 0 24 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>sign-out</title>
              <desc>Created with Sketch.</desc>
              <defs />
              <g class="Page-1" stroke-width="1" fill-rule="evenodd">
                <g id="sign-out" transform="translate(-1.000000, 0.000000)" fill-rule="nonzero">
                  <path
                    d="M10.8,18.12 C10.777904,18.0551642 10.777904,17.9848358 10.8,17.92 C10.8,17.86 10.8,17.81 10.69,17.78 C10.58,17.75 10.57,17.71 10.57,17.69 C10.57,17.67 10.51,17.69 10.39,17.69 L10.21,17.69 L5.41,17.69 C4.75845014,17.7002355 4.13190144,17.4394753 3.68,16.97 C3.20950293,16.496921 2.9622806,15.8461445 3,15.18 L3,4.41 C2.98976453,3.75845014 3.25052469,3.13190144 3.72,2.68 C4.1689932,2.23532929 4.77815242,1.99022381 5.41,2 L10.31,2 C10.4221952,2.00654693 10.5327795,1.97087459 10.62,1.9 C10.7044485,1.82129123 10.7577021,1.71478409 10.77,1.6 C10.7951089,1.48132462 10.811817,1.3610262 10.82,1.24 C10.82,1.13 10.82,1 10.82,0.84 C10.82,0.68 10.82,0.57 10.82,0.53 C10.8288509,0.383160805 10.7653717,0.241265929 10.65,0.15 C10.5628056,0.0544088005 10.4393852,-4.1366484e-05 10.31,1.41542594e-16 L5.41,1.41542594e-16 C4.23694711,-0.0168652328 3.10862792,0.449651354 2.29,1.29 C1.44965135,2.10862792 0.983134767,3.23694711 1,4.41 L1,15.18 C0.980749809,16.3535074 1.44764176,17.4827345 2.29,18.3 C3.10862792,19.1403486 4.23694711,19.6068652 5.41,19.59 L10.31,19.59 C10.4221952,19.5965469 10.5327795,19.5608746 10.62,19.49 C10.7085477,19.4144273 10.7626705,19.3061818 10.77,19.19 C10.7951089,19.0713246 10.811817,18.9510262 10.82,18.83 C10.82,18.73 10.82,18.59 10.82,18.43 C10.82,18.27 10.8,18.16 10.8,18.12 Z"
                    class="Shape"
                  />
                  <path
                    d="M24.71,9.11 L16.38,0.78 C15.9937017,0.411745823 15.3862983,0.411745823 15,0.78 C14.8062225,0.956726196 14.6970803,1.20775326 14.7,1.47 L14.7,5.88 L7.86,5.88 C7.30771525,5.88 6.86,6.32771525 6.86,6.88 L6.86,12.75 C6.86,13.3022847 7.30771525,13.75 7.86,13.75 L14.71,13.75 L14.71,18.16 C14.7070803,18.4222467 14.8162225,18.6732738 15.01,18.85 C15.39495,19.2119426 15.99505,19.2119426 16.38,18.85 L24.71,10.52 C25.0719426,10.13505 25.0719426,9.53495001 24.71,9.15 L24.71,9.11 Z"
                    class="Shape"
                  />
                </g>
              </g>
            </svg>
          </div>
        </b-col>
        <b-col class="d-lg-none d-flex pr-0" cols="4">
          <div class="mobile-menu-control">
            <div v-on:click="showMenu = !showMenu" class="menu-control">
              <svg
                width="23px"
                height="22px"
                viewBox="0 0 23 22"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>line-menu</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g class="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g
                    id="line-menu"
                    transform="translate(-1.000000, 0.000000)"
                    fill="#283593"
                    fill-rule="nonzero"
                  >
                    <path
                      d="M2.9,3.85 C2.4007447,3.86349835 1.91724177,3.6745636 1.55940901,3.3261475 C1.20157626,2.9777314 0.999817556,2.49943771 1,2 C0.972540222,1.47899689 1.1605289,0.969625434 1.51986758,0.591374197 C1.87920625,0.213122961 2.37827425,-0.000723140068 2.9,1.11022302e-16 L22.05,1.11022302e-16 C23.1349951,0.0271333055 24.0003392,0.914665715 24,2 C24.0001776,2.51269524 23.7931506,3.00370229 23.4259431,3.36149423 C23.0587356,3.71928617 22.5625177,3.91349201 22.05,3.9 L2.9,3.85 Z"
                      class="Shape"
                    />
                    <path
                      d="M22.05,8.57 C23.1158588,8.59632945 23.9736706,9.45414122 24,10.52 C24.0001776,11.0326952 23.7931506,11.5237023 23.4259431,11.8814942 C23.0587356,12.2392862 22.5625177,12.433492 22.05,12.42 L2.9,12.42 C2.39194706,12.4339272 1.90054037,12.2382249 1.54115774,11.8788423 C1.18177511,11.5194596 0.986072825,11.0280529 1,10.52 C0.986507989,10.0074823 1.18071383,9.51126442 1.53850577,9.1440569 C1.89629771,8.77684939 2.38730476,8.56982244 2.9,8.57 L22.05,8.57 Z"
                      class="Shape"
                    />
                    <path
                      d="M22.05,17.2 C22.5607875,17.1865474 23.055465,17.3793951 23.4223722,17.7350128 C23.7892794,18.0906305 23.9974878,18.5790415 24,19.09 C24.0003392,20.1753343 23.1349951,21.0628667 22.05,21.09 L2.9,21.09 C2.37827425,21.0907231 1.87920625,20.876877 1.51986758,20.4986258 C1.1605289,20.1203746 0.972540222,19.6110031 1,19.09 C0.988861135,18.5836606 1.18579474,18.094894 1.54486108,17.7377175 C1.90392743,17.380541 2.39372639,17.1861893 2.9,17.2 L22.05,17.2 Z"
                      class="Shape"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="banner" fluid>
      <b-row>
        <div class="banner-wrapper">
          <b-col class="wrapper-left" cols="12" md="7" lg="6" xl="6">
            <h1>Test assignment for Frontend Developer position</h1>
            <p>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!</p>
            <button v-scroll-to="'#singup'">Sign Up</button>
          </b-col>
        </div>
      </b-row>
    </b-container>

    <transition name="fade">
      <div v-if="showMenu" class="mobile-overlay" @click="showMenu = !showMenu"></div>
    </transition>
    <transition name="slide">
      <div class="mobile-menu-wrap" v-if="showMenu">
        <div class="mobile-menu">
          <div class="mobile-menu-header">
            <div class="profile-photo">
              <img v-if="user.photo" :src="(user.photo)" :alt="(user.name)" />
              <img v-else src="@/assets/imgs/no-avatar.jpg" alt="no-avatar" />
            </div>
            <div class="profile-data">
              <div class="profile-name">{{user.name}}</div>
              <div class="profile-email">{{user.email}}</div>
            </div>
          </div>
          <div class="mobile-menu-center">
            <b-nav>
              <b-nav-item v-for="(nav, i) in navs" :key="i" v-scroll-to="`#${i}`">{{ nav }}</b-nav-item>
              <li class="nav-item">
                <a href="#" class="nav-link">Sing Out</a>
              </li>
            </b-nav>
          </div>
          <div class="mobile-menu-footer"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ApiLanding from "@/api/landing";

export default {
  name: "Header",
  created() {
      ApiLanding.getUsersOne()
      .then(response => (this.user = response.data.user))
      .catch(error => {
        /*eslint no-console: ["error", { allow: ["log"] }] */
        console.log(error);
      });
  },

  data() {
    return {
      navs: {
        about: "About me",
        relationships: "Relationships",
        requrements: "Requrements",
        users: "Users",
        singup: "Sing up"
      },
      user: {
        name: "Superstar",
        email: "Superstar@gmail.com",
        photo: null
      },
      showMenu: false
    };
  }
};

</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

// Header and Logo

.header-wrapper {
  background: #fff;
  box-shadow: 0px 0px 15px 0px rgba(161, 161, 161, 0.5);
  width: 100%;
  height: 60px;
  z-index: 999;
  position: fixed;

  .top-header {
    @include maxW;
    height: 100%;
    margin: 0 auto;
  }

}

.logo {
  padding-left: 15px;
  display: flex;
  align-items: center;

  img {
    width: 130px;
  }

}

// Menu style
.nav {
  display: flex;
  align-items: center;

  li a {
    @include fontSource;
    font-size: 16px;
    color: #000;
    cursor: pointer;

    &:active {
      color: $secondaryColor;
    }

    &:hover {
      color: $linkHover;
      cursor: pointer;
    }

  }

}

// Profile style
.header-profile {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .profile-data {
    text-align: right;
    overflow: hidden;

    .profile-name {
      @include fontSource;
      font-size: 14px;
      color: #000;
    }

    .profile-email {
      @include fontSource;
      font-size: 12px;
      color: $linkDisable;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

  }

  .profile-photo {
    margin-left: 9px;
    margin-right: 16px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .profile-icon svg {
    width: 24px;
    height: 20px;
    stroke: #283593;
    fill: #283593;
    cursor: pointer;

    &:hover {
      stroke: #2638bb;
      fill: #2638bb;
    }

  }

}

// Mobile menu

.mobile-menu-control {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  .menu-control {
    cursor: pointer;
  }
}

.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
}

.mobile-menu-wrap {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: #fff;
  z-index: 99999;
  overflow: auto;

  .mobile-menu {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    background: #fff;
    z-index: 99999;
    overflow: auto;
  }

}

.mobile-menu-header {
  position: relative;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.mobile-menu-center {
  flex: 1 1 auto;
  overflow-y: auto;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

}

.mobile-menu-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.mobile-menu-contact-wrapper {
  padding: 4px 10px;
}

.profile-name {
  @include fontSource;
  font-size: 14px;
  color: #000;
}

.profile-email {
  @include fontSource;
  font-size: 12px;
  color: $linkDisable;
}

// Banner
.banner {
  background-image: url("../assets/imgs/banner-bg/banner-bg-2560x676.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  .banner-wrapper {
    @include maxW;
    display: flex;
    margin: 0 auto;
    min-height: 675px;
    padding-top: 60px;
  }

  .wrapper-left {
    display: flex;
    flex-direction: column;
    color: #fff;
    padding-top: 135px;
    padding-bottom: 145px;
  }

  h1 {
    @include h1;
    text-align: left;
  }

  p {
    @include fontSource;
    font-size: 20px;
    text-align: left;
  }

  button {
    margin-top: 20px;
    border-radius: 4px;
    background-color: rgb(239, 108, 0);
    width: 290px;
    height: 40px;
    border: none;
    font-size: 20px;
    @include fontSourceBold;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: $buttonHover;
    }

  }

}

// Mobile profile style

.mobile-menu-header {
  padding: 30px 15px 25px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .profile-photo {
    margin-bottom: 15px;

    img {
      border-radius: 50%;
      width: 67px;
      height: 67px;
    }

  }

}

// Mobile style

@media only screen and (max-width: 1200px) {
  .banner {
    background-image: url("../assets/imgs/banner-bg/banner-bg-1204x723.jpg");
  }
}

@media only screen and (max-width: 991px) {
  .logo {
    padding-left: 0;
  }

  .mobile-menu-control .menu-control {
      margin-right: 18px;
  }

  .banner {
    background-image: url("../assets/imgs/banner-bg/banner-bg-768x622.jpg");

      .wrapper-left {
        padding: 115px 15px 121px;

        h1 {
          @include h2;
          margin-bottom: 21px;
        }

        p {
          @include p2;
        }

        button {
          margin-top: 68px;
        }

      }
  }

}

@media only screen and (max-width: 767px) {
  .banner {
    background-image: url("../assets/imgs/banner-bg/banner-bg-320x393.jpg");

    .banner-wrapper {
      min-height: 455px;

      h1 {
        @include fontOverpass;
        font-size: 30px;
        line-height: 34px;
        text-align: center;
      }

      p {
        text-align: center;
      }

      button {
        margin: 20px auto 0 auto;
      }

      .wrapper-left {
        padding: 70px 15px;
      }

    }

  }

}
</style>
