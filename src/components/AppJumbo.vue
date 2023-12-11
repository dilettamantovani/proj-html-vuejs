<script>
import { store } from "../store.js";

// Swiper JS
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/modules';
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper();

export default {
    name: "AppJumbo",
    components: {
        Swiper,
        SwiperSlide
    },

    data() {
        return {
            store
        }
    },

    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },

    methods: {},

    mounted() { },
}
</script>


<template>
    <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide></swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
    </swiper>
</template>

<style scoped lang="scss"></style>