<script>
import { store } from "../store.js";

// Swiper JS
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/modules';
import 'swiper/css/bundle';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';


export default {
    name: "AppJumbo",
    components: {
        Swiper,
        SwiperSlide
    },

    data() {
        return {
            store,
            modules: [Autoplay, EffectFade, Pagination, Navigation],
        };
    },

    methods: {},

    mounted() { },
}
</script>


<template>
    <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :effect="'fade'" :centeredSlides="true"
        :autoplay="{ delay: 8000, disableOnInteraction: false }" :pagination="{ clickable: true }" :navigation="true"
        :modules="modules" class="mySwiper">
        <swiper-slide>
            <img src="../assets/img/slider-autocar-5.jpg" alt="">
            <div class="slideTxt d-flex flex-column align-items-start text-white">
                <p class="slideTitle fw-bold">Buy And Sell Your</p>
                <p class="slideTitle fw-bold">Car At Its Value</p>
                <p class="slideSub fw-bold">Find the right place and dealer.</p>
                <a href="#"><button class="btn bg-black text-white btn-lg">Learn more<i
                            class="fa fa-arrow-right ms-1"></i></button></a>
            </div>
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/img/slider-autocar-6.jpg" alt="">
            <div class="slideTxt d-flex flex-column align-items-start text-white">
                <p class="slideTitle fw-bold">The Easiest Way To</p>
                <p class="slideTitle fw-bold">Buy And Sell Vehicles</p>
                <p class="slideSub fw-bold">Find the right place and dealer.</p>
                <a href=""><button class="btn btn-dark">Learn more<i class="fa fa-arrow-right"></i></button></a>
            </div>
        </swiper-slide>
    </swiper>
</template>

<style scoped lang="scss">
html,
body {
    position: relative;
    height: 100%;
}

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper {
    width: 100%;
    height: 100vh;
}


.swiper-button-prev,
.swiper-button-next,
.swiper-button-disabled {
    color: white;
    background-color: black;
    border-radius: 4px;
    font-size: 0.7rem;
    height: 1.8rem;
    padding: 0.2rem;
}

.swiper-button-prev::after {
    color: white;
    background-color: black;
    border-radius: 4px;
    font-size: 0.7rem;
}

.swiper-button-next::after {
    color: white;
    background-color: black;
    border-radius: 4px;
    font-size: 0.7rem;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slideTxt {
    position: absolute;
    top: 7rem;
    left: 13rem;
}

.slideTitle {
    font-size: 4rem;
    line-height: 4rem;
}

.slideSub {
    font-size: 1.3rem;
}

.btn-dark {
    border-radius: none;
}
</style>
