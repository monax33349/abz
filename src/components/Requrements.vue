<template>
    <div id="requrements">
        <b-container class="requrements-wrapper">
            <h2>General requirements for the test task</h2>
            <b-row class="text-wrapper">
                <b-col class="wrapper-left" cols="12" md="6">
                    <div class="text-wrapper">
                        <p> Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.</p>
                        <p>If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.</p>
                        <p>Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.</p>
                    </div>
                </b-col>
                <b-col class="wrapper-right" cols="12" md="6">
                    <img v-if="small" src="@/assets/imgs/man-laptop-v1.svg" alt="man-laptop">
                    <img v-else src="@/assets/imgs/man-laptop-v2.svg" alt="man-laptop2">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            small: false
        }
    },

    created() {
        window.addEventListener('resize', this.onResize);
        this.onResize();
    },

    destroyed() {
        window.removeEventListener('resize', this.onResize)
    },

    methods: {
        onResize() {
            if (window.innerWidth > 991) {
                this.small = true
            }

            else if (window.innerWidth < 768) {
                this.small = true
            }

            else {
                this.small = false
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';
    #requrements {
        background-image: url('../assets/imgs/third-block-bg/third-block-bg-2560x692.jpg');
        min-height: 690px;
        display: flex;
        padding-top: 135px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        .requrements-wrapper {
            @include maxW;
            flex-direction: column;
            align-items: center;

            h2 {
                @include h2;
                color: #fff;
                margin-bottom: 60px;
            }

            .text-wrapper { 

                .wrapper-left {

                    .text-wrapper p {
                        @include p2;
                        color: #fff;
                        margin-bottom: 20px;
                    }
                }

                .wrapper-right {
                    display: flex;
                    justify-content: center;

                    img {
                        max-width: 420px;
                        width: 100%;
                    }
                }
            }
        }
    }

// Mobile style


@media only screen and (max-width: 1024px) {
    #requrements {
        background-image: url('../assets/imgs/third-block-bg/third-block-bg-1024x755.jpg');
  }
}

@media only screen and (max-width: 991px) {
    #requrements {
        background-image: url('../assets/imgs/third-block-bg/third-block-bg-768x878.jpg');
        padding: 120px 9px 93px;
        
        .requrements-wrapper {

            h2 {
                text-align: center;
                margin-bottom: 30px;

            }

            .text-wrapper {
                .wrapper-left .text-wrapper p {
                    margin-bottom: 27px;
                }

                img {
                    height: fit-content;
                }

            }

        }

    }
}

@media only screen and (max-width: 767px) {
    #requrements {
        text-align: center;
        padding: 66px 15px 50px 15px;
        background-image: url('../assets/imgs/third-block-bg/third-block-bg-320x1031.jpg');

        .requrements-wrapper {
            h2 {
                text-align: center;
                @include h3;
                margin-bottom: 26px;

            }

            .wrapper-left {
                order: 2;
                padding: 0;

                p {
                    margin-bottom: 23px !important;
                }
            }

            .wrapper-right {
                order: 1;
                margin-bottom: 20px;

                img {
                    height: 220px;
                }
            }
        }
    }
}

</style>
