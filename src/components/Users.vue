<template>
  <b-container id="users">
    <h2>Our cheerful users</h2>
    <h5>Attention! Sorting users <br class="d-md-none"> by registration date</h5>
    <b-row class="users-wrapper">
      <b-col class="user" cols="12" sm="4" md="4" v-for="user of users" :key="user.id">
        <div class="user-photo">
          <img :src="(user.photo)" :alt="(user.name)" />
        </div>
        <div class="user-text">
          <h4
            v-tippy="{ placement: 'bottom', followCursor: 'initial', flip: true, distance: 10}"
            :content="user.name"
          >{{user.name}}</h4>
          <p>{{user.position}}</p>
          <p v-tippy="{ placement: 'bottom', followCursor: 'initial', flip: true, distance: 10}" :content="user.email">{{user.email}}</p>
          <p>{{user.phone}}</p>
        </div>
      </b-col>
    </b-row>
    <button @click="fetchUsers()" v-if="!isButtonDisabled">Show more</button>
  </b-container>
</template>

<script>
import ApiLanding from "@/api/landing";
import eventBus from "@/eventBus";

export default {
  mounted() {
    eventBus.$on("registration:newUser", this.onUserRegisred);
    this.fetchUsers();
  },

  beforeDestroyed() {
    eventBus.$off("registration:newUser", this.onUserRegisred);
  },

  data() {
    return {
      total_pages: 0,
      count: 6,
      page: 1,
      total_users: 0,
      users: {}
    };
  },

  computed: {
    isButtonDisabled() {
      return this.total_pages < this.page;
    }
  },

  methods: {
    onUserRegisred() {
      this.fetchUsers(true);
    },

    fetchUsers(clear) {
      if (clear) {
        this.page = 1;
        this.total_pages = 0;
      }

      ApiLanding.getUsers(this.page, this.count)
        .then(response => {
          if (this.page === 1) {
            this.users = response.data.users;
          } else {
            this.users.push(...response.data.users);
          }

          this.total_pages = response.data.total_pages;
          this.page += 1;
        })
        .catch(error => {
          /*eslint no-console: ["error", { allow: ["log", "error"] }] */
          console.log(error);
        });
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

#users {
  @include maxW;
  padding: $padding2k;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 140px;
  padding-bottom: 155px;

  h2 {
    @include h2;
    margin-bottom: 12px;
    text-align: center;
  }

  h5 {
    @include h5;
    margin-bottom: 57px;
    text-align: center;
  }

  .users-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .user {
      margin-bottom: 80px;
      display: flex;

      .user-photo {
        width: 70px;

        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          object-fit: cover;
        }

      }
      .user-text {
        width: calc(100% - 70px);
        padding: 25px 20px 0 10px;

        h4 {
          @include h4;
          @include cropText;   
    
          &:focus {
            outline: none;
          }

        }

        p {
          @include p3;
          @include cropText;
          cursor: pointer;   
    
          &:focus {
            outline: none;
          }

        }

      }

    }

  }
  button {
    @include fontSourceBold;
    margin: 0 auto;
    cursor: pointer;
    color: $primariColor;
    border: 2px solid $primariColor;
    border-radius: 4px;
    font-size: 20px;
    line-height: 36px;
    width: 290px;
    background-color: #ffffff;
    margin-top: -32px;


    &:hover {
      background-color: rgba($buttonHover, 0.2);
    }
    
    &:disabled {
      background-color: $buttonDisabled;
      color: $linkDisable;
      border: none;
    }

  }

}

// Mobile

@media only screen and (max-width: 992px) { 
  #users {
    padding: 115px 15px 136px 15px;

    h5 {
      margin-bottom: 40px;
    }

    .users-wrapper .user {
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;

      .user-text {
        width: 100%;
        text-align: center;
        padding: 0;
        padding-top: 10px;

        h4 {
          margin-bottom: 2px;
        }

      }

    }
    
    button {
      margin-top: 60px;
    }

  } 

}

@media only screen and (max-width: 767px) {
  #users {
    padding: 70px 15px;

    h2 {
      @include h3;
    }

    h5 {
      @include p2;
      margin-bottom: 32px;
      text-align: center;
    }

    .users-wrapper .user {
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;

      .user-text {
        width: 100%;
        text-align: center;
        padding: 0;
        padding-top: 10px;

        h4 {
          margin-bottom: 2px;
        }

      }

    }

  }
  
}
</style>
