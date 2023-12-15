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
            modules: [Pagination],
            reviewLinks: [
                {
                    text: "A fast and reliable vehicle selling site. Rare quality website with hundreds of model vehicles.",
                    img: "testimonial4-1.png",
                    name: "Elizabeth"
                },

                {
                    text: "We are a gallery vehicle dealer. Before we met this site, our sales were sluggish.",
                    img: "man1.png",
                    name: "Adam"
                },

                {
                    text: "One of the quality websites I apply to rent a car. There are hundreds of different tools.",
                    img: "testimonial2-1.png",
                    name: "Cristian"
                },

                {
                    text: "I was trying to sell my car. And I put it here and sold it for more than it was worth.",
                    img: "man2.png",
                    name: "Robert"
                },
            ],
        };
    },

    methods: {
        getImagePath(img) {
            return new URL(`../assets/img/${img}`, import.meta.url).href
        },
    },

    mounted() { },
}
</script>


<template>
    <div class="wrapper py-3">
        <div class="row">
            <div class="col-12 text-center">
                <img class="mb-2" id="thumbsUp" src="../assets/icons/recommended.svg" alt="">
                <h2 class="fw-bold text-white">What Do Our Customers Say About us?</h2>
                <p class="text-white">Opinions from our happy customers.</p>
            </div>
        </div>

        <swiper :slidesPerView="4" :centeredSlides="true" :spaceBetween="30" :grabCursor="true" :pagination="{
            clickable: true,
        }" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(card, i) in  reviewLinks ">
                <p>{{ card.text }}</p>
                <img :src="getImagePath(card.img)">
                <p>{{ card.name }}</p>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style scoped lang="scss">
html,
body {
    position: relative;
    height: 100%;
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.wrapper {
    background-image: url(comment-bg-autocar.jpg);
    object-fit: cover;
}

#thumbsUp {
    height: 7rem;
    background-color: white;
    filter: invert(1);
    padding: 1rem;
    border-radius: 50%;
}

.swiper {
    width: 100%;
    height: 100%;
    padding: 2rem;
}

.swiper-slide {
    text-align: center;
    background: #fff;
    border-radius: 8px;
    padding: 2rem;
}
</style>



 