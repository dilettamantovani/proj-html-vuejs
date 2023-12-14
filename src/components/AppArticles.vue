<script>
import { store } from "../store.js";

export default {
    name: "AppArticles",
    data() {
        return {
            store,
            articlesLinks: [
                {
                    img: "../assets/img/news-autocar-1-600x359.jpg",
                    title: "Why is BMW loved?",
                    text: "BMWs have a different line with their designs and almost [...] "
                },
                {
                    img: "../assets/img/news-autocar-2-600x359.jpg",
                    title: "How solid is Audi?",
                    text: "According to Euro NCAP data with different test organizations, there []..."
                },
                {
                    img: "../assets/img/news-autocar-6-600x359.jpg",
                    title: "What brand is Skoda?",
                    text: "Skoda is one of the leading automotive manufacturers on the [...] "
                },
                {
                    img: "../assets/img/news-autocar-5-600x359.jpg",
                    title: "Is the Auris diesel?",
                    text: "You will have a quieter vehicle that burns less than a diesel."
                }
            ]
        }
    },

    methods: {
        getImagePath(img) {
            return new URL(`${img}`, import.meta.url).href
        },

        mounted() { },
    },
}

</script>


<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-12 text-center">
                <img class="mb-2" id="thumbsUp" src="../assets/icons/recommended.svg" alt="">
                <h2 class="fw-bold">Recent Articles</h2>
                <p>Useful informations about cars.</p>
            </div>
        </div>

        <div class="row justify-content-evenly pb-5">
            <div class="card m-1" v-for="article in articlesLinks">
                <img :src="getImagePath(article.img)" class="mt-2 mx-1" alt="">
                <p class="text-center">06.07.2022 - Auto Car</p>
                <div class="card-body text-center">
                    <h5 class="card-title">{{ article.title }}</h5>
                    <p class="card-text">{{ article.text }}</p>
                    <a href="#" class="btn bg-black text-white">More</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    width: calc(100% / 4 - 4rem);
}

#thumbsUp {
    height: 7rem;
    background-color: white;
    filter: invert(1);
    padding: 1rem;
    border-radius: 50%;
}
</style>