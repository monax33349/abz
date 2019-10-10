<template>
  <b-container id="relationships">
    <h2>
      About my relationships with
      <br v-if="small" />web-development
    </h2>
    <b-row>
      <div class="skills-wrapper">
        <b-col class="skill" cols="12" lg="4">
          <img src="@/assets/imgs/html.svg" srcset="@/assets/imgs/html.svg" alt="html" />
          <div class="skill-info">
            <h3>I'm in love with HTML</h3>
            <p>Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.</p>
          </div>
        </b-col>
        <b-col class="skill" cols="12" lg="4">
          <img src="@/assets/imgs/css.svg" srcset="@/assets/imgs/css.svg" alt="css" />
          <div class="skill-info">
            <h3>CSS is my best friend</h3>
            <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</p>
          </div>
        </b-col>
        <b-col class="skill" cols="12" lg="4">
          <img
            src="@/assets/imgs/javascript.svg"
            srcset="@/assets/imgs/javascript.svg"
            alt="javascript"
          />
          <div class="skill-info">
            <h3>JavaScript is my passion</h3>
            <p>JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.</p>
          </div>
        </b-col>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Relationships",
  data() {
    return {
      small: false
    };
  },
  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.small = window.innerWidth >= 576;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
#relationships {
  @include maxW;
  display: flex;
  padding: $padding2k;
  flex-direction: column;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 94px;

  h2 {
    @include h2;
    text-align: center;
    margin-bottom: 50px;
  }

  .skills-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .skill {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 50px;

      img {
        margin-bottom: 20px;
      }

      h3 {
        @include h3;
        margin-bottom: 7px;
      }

      p {
        @include p2;
      }
    }
  }
}

// Mobile style

@media only screen and (max-width: 992px) {
  #relationships {
    padding-top: 132px;
    padding-bottom: 72px;

    h2 {
      margin-bottom: 42px;
    }

    .skills-wrapper .skill {
      align-items: flex-start;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 31px;

      img {
        margin-bottom: 20px;
        max-width: 88px;
      }

      .skill-info {
        padding-left: 30px;
        width: 69%;

        h3 {
          margin-bottom: 10px;
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  #relationships {
    padding-top: 65px;
    padding-bottom: 43px;

    h2 {
      @include h3;
      margin-bottom: 30px;
    }

    .skills-wrapper .skill {
      flex-direction: column;
      align-items: center;
      margin-bottom: 32px;

      img {
        max-width: 88px;
        margin-bottom: 12px;
      }

      .skill-info {
        width: 100%;
        padding-left: 0;

        h3 {
          @include h4;
          text-align: center;
          margin-bottom: 1px;
        }

        p {
          text-align: center;
        }
      }
    }
  }
}
</style>