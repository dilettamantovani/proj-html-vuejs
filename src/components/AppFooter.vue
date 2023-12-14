<script>
import { store } from "../store.js";

export default {
    name: "AppFooter",

    data() {
        return {
            store,
            footerLinks: [
                {
                    title: "My Account",
                    link: ["My Account", "Checkout", "Cart", "Package", "Add Car"]
                },

                {
                    title: "Quick Links",
                    link: ["Home", "About Us", "Blog", "Contact", "Refund & Returns"]
                },
            ]

        }
    },

    methods: {},

    mounted() { },
}
</script>


<template>
    <div v-for="link in footerLinks">
        <div>{{ link.title }}</div>
        <div v-for="element in link.link">{{ element }}</div>
    </div>
</template>

<style scoped lang="scss"></style>