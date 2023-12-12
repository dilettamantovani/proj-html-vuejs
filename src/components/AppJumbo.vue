<script>
import { store } from "../store.js";

// Swiper JS
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/modules';
import 'swiper/css/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default {
    name: "AppJumbo",
    components: {
        Swiper,
        SwiperSlide
    },

    data() {
        return {
            store,
            modules: [Autoplay, Pagination, Navigation],
        };
    },

    methods: {},

    mounted() { },
}
</script>


<template>
    <swiper :spaceBetween="30" :effect="'fade'" :centeredSlides="true"
        :autoplay="{ delay: 8000, disableOnInteraction: false }" :pagination="{ clickable: true }" :navigation="true"
        :modules="modules" class="mySwiper">
        <swiper-slide><img src="../assets/img/slider-autocar-5.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/slider-autocar-6.jpg" alt=""></swiper-slide>
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
</style>
