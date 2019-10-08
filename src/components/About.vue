<template>
    <b-container id="about">
        <h2>Let's get acquainted</h2>
        <b-row class="about-wrapper">
            <b-col class="wrapper-left" cols="12" md="4">
                <img src="@/assets/imgs/man-mobile.svg" srcset="@/assets/imgs/man-mobile.svg" alt="man-mobile">
            </b-col>  
            <b-col class="wrapper-right" cols="12" md="8">
                <div class="text-wrapper">
                    <h3>I am cool frontend <br class="d-md-none"> developer</h3>
                    <p>When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.</p>
                    <p class="mb-2">Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.</p>
                    <a href="#" v-scroll-to="'#singup'">Sign Up</a>
                </div>
            </b-col>
        </b-row> 
    </b-container>
</template>

<script>
export default {
  name: 'About',

}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

    #about {
        @include maxW;
        padding-top: 140px; 
        flex-direction: column;
        align-items: center;     

        h2 {
            @include h2;
            padding-bottom: 30px;
        }

        .about-wrapper {
            display: flex;

            .wrapper-left {
                display: flex;
                justify-content: center;

                img {
                    max-width: 290px;
                    width: 100%;
                }
            }    

            .wrapper-right {

                .text-wrapper {

                    h3 {
                        @include h3;
                        margin-bottom: 8px;
                    }

                    p {
                        @include p2;
                        color: #4c4b4b;
                        margin-bottom: 23px;
                    }

                    a {
                        text-decoration: none;
                        font-size: 22px;
                        @include fontSourceBold;
                        color: $primariColor;
                        cursor: pointer;

                        &:hover {
                            color: $buttonHover;
                        }

                    }

                }

            }

        }

    }

// Mobile style


@media only screen and (max-width: 992px) { 
    #about {
        padding-top: 114px;

        h2 {
            padding-bottom: 34px;
        }

        a {
            display: block;
            margin-top: 20px;
        }
    }
}

@media only screen and (max-width: 767px) {
    #about {
        padding-top: 120px;

        .about-wrapper {
            .wrapper-left {
                margin-bottom: 27px;

                img {
                    max-width: 220px;
                }

            }

            .wrapper-right {
                .text-wrapper {
                    margin-left: 0;

                    h3 {
                        @include h4;
                        text-align: center;
                        margin-bottom: 14px;
                    }

                    p {
                        text-align: center;
                        margin-bottom: 25px;
                    }

                    a {
                        display: block;
                        text-align: center;
                        margin-top: 13px;
                    }

                }

            }

        }


    }
    
}

@media only screen and (max-width: 540px) {
    #about {
        padding-top: 67px;

        h2 {
            @include h3;
            padding-bottom: 18px;
        }

    }

}

</style>