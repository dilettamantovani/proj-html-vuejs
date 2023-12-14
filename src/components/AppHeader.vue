<script>
import { store } from "../store.js";

export default {
    name: "AppHeader",
    data() {
        return {
            store,
            headerLinks: [
                {
                    text: "Home",
                    url: "#"
                },

                {
                    text: "About Us",
                    url: "#"
                },
                {
                    text: "Vehicles",
                    url: "#"
                },
                {
                    text: "Dealers",
                    url: "#"
                },
                {
                    text: "Packages",
                    url: "#"
                },
                {
                    text: "Blog",
                    url: "#"
                },
                {
                    text: "Contact",
                    url: "#"
                }
            ]
        }
    },

    methods: {},

    mounted() { },
}
</script>


<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-light noPad justify-content-evenly">

                <!-- logo -->
                <div id="logo">
                    <a href="#"><img id="logo" src="../assets/img/logo-autocar11.png" alt="Autocar Logo"></a>
                </div>

                <!-- menuLinks -->
                <div id="nav-menu">
                    <a class="text-decoration-none text-dark fw-semibold mx-2" v-for="link in headerLinks"
                        :href="link.url">{{
                            link.text
                        }}</a>
                </div>

                <!-- buttons -->
                <div id="navBtns" class="d-flex justify-content-between align-items-center">
                    <a class="btn bg-black text-white mx-1 d-flex align-items-center" href="#">
                        <img class="navIcon me-1" src="../assets/icons/padlock.png" alt="">
                        <p class="mt-3 mx-1 fw-semibold">My Account</p>
                    </a>
                    <a class="btn bg-black text-white mx-1 d-flex align-items-center" href="#">
                        <img class="navIcon me-1" src="../assets/icons/add.png" alt="">
                        <p class="mt-3 mx-1 fw-semibold">Add Car</p>
                    </a>

                    <!-- offcanvas -->
                    <button id="offCanvasToggle" class="btn bg-white" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <img src="../assets/icons/burgermenu.svg" alt="">
                    </button>

                    <div class="offcanvas offcanvas-start p-2" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
                        id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-body">
                            <div class="d-flex justify-content-center">
                                <img id="offCanvasLogo" src="../assets/img/loader-autocar.png" alt="">
                            </div>
                            <h2 class="offcanvas-title text-center fw-bold" id="offcanvasExampleLabel">Contact Information
                            </h2>
                            <!-- contacts -->
                            <div class="my-4">
                                <div class="text-center">
                                    <img class="contactIcons m-3" src="../assets/icons/phone.svg" alt="">
                                    <p>+1 (234) 567 89 10</p>
                                </div>
                                <div class="text-center">
                                    <img class="contactIcons m-3" src="../assets/icons/email.svg" alt="">
                                    <p>example@example.com</p>
                                </div>
                                <div class="text-center">
                                    <img class="contactIcons m-3" src="../assets/icons/location.svg" alt="">
                                    <p>New Jersey, USA</p>
                                </div>
                            </div>
                            <!-- social -->
                            <div id="social" class="d-flex justify-content-center align-items-center">
                                <a href="#"><img class="socialIcon m-1" src="../assets/icons/facebook.svg" alt=""></a>
                                <a href="#"><img class="socialIcon m-1" src="../assets/icons/instagram.svg" alt=""></a>
                                <a href="#"><img class="socialIcon m-1" src="../assets/icons/twitter.svg" alt=""></a>
                            </div>

                            <!-- cpoyright -->
                            <div class="text-center mt-5">© 2023 Autocar - All Rights Reserved.</div>
                        </div>
                    </div>

                    <a class="btn bg-black text-white mx-1 d-flex align-items-center" href="#">
                        <img class="navIcon me-1" src="../assets/icons/headphones.png" alt="">
                        <p class="mt-3 mx-1 fw-semibold">+1 (234) 567 89 10</p>
                    </a>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
a #logo {
    height: 4.7rem;
    margin: 0.1rem 0 0;
}

.noPad {
    padding: 0;
}

#offCanvasToggle img {
    height: 2rem;
}

#offCanvasToggle:focus {
    border: none;
}

.navIcon {
    height: 2.5rem;
    filter: invert(1);
}

.contactIcons {
    width: 4.3rem;
    border-radius: 4px;
    padding: 0.8rem;
    filter: invert(1);
    background-color: white;
}

.socialIcon {
    height: 3rem;
    margin: 1rem;
    border: solid 2px black;
    border-radius: 4px;
    padding: 0.5rem;
}

.socialIcon:hover {
    border: solid 1px black;
}
</style>