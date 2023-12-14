<script>
import { store } from "../store.js";

export default {
    name: "AppFooter",
    props: ["footerArray"],
    data() {
        return {
            store
        }
    },

    methods: {},

    mounted() { },
}
</script>


<template>
    <footer class="text-light">
        <div class="row justify-content-between">
            <div class="col-2">
                <img id="footerLogo" src="../assets/img/logo-footer-autocar11.png" alt="">
                <div class="mt-3">
                    <div class="d-flex align-items-center">
                        <img class="contactIcons" src="../assets/icons/location.svg" alt="">
                        <p class="align-self-end">New Jersey, USA</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <img class="contactIcons" src="../assets/icons/email.svg" alt="">
                        <p class="align-self-end">example@example.com</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <img class="contactIcons" src="../assets/icons/phone.svg" alt="">
                        <p class="align-self-end">+1 (234) 567 89 10</p>
                    </div>
                </div>
                <!-- social -->
                <div id="social" class="d-flex align-items-center">
                    <a href="#"><img class="socialIcon mx-3" src="../assets/icons/facebook.svg" alt=""></a>
                    <a href="#"><img class="socialIcon mx-3" src="../assets/icons/instagram.svg" alt=""></a>
                    <a href="#"><img class="socialIcon mx-3" src="../assets/icons/twitter.svg" alt=""></a>
                </div>
            </div>

            <div class="col-4">
                <div>
                    <h3>Join Our Newsletter</h3>
                    <p>Subscribe to be informed about our services and products.</p>
                    <div class="d-flex flex-column">
                        <input id="mailInput" type="email" class="form-control rounded-1" placeholder="Your Email Address">
                        <button id="newsletterSub" class="btn btn-light text-secondary rounded-1" type="button">Subscribe <i
                                class="fa fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="col-2" v-for="link in footerArray">
                <h3>{{ link.title }}</h3>
                <ul>
                    <li class="my-3" v-for="element in link.link">{{ element }}</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <p class="text-center">© 2023 Autocar - All Rights Reserved.</p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    background-color: black;
    padding: 2rem 3.4rem 1rem;
}

.noPad {
    padding: 0;
}

#footerLogo {
    height: 4.7rem;
    margin: 0.1rem 0 0;
}

.contactIcons {
    width: 3.8rem;
    border-radius: 4px;
    padding: 0.8rem;
    filter: invert(1);
}

.socialIcon {
    height: 2.6rem;
    margin: 1rem;
    border-radius: 4px;
    padding: 0.5rem;
    filter: invert(1);
}

#mailInput,
#newsletterSub {
    height: 4rem;
}

ul {
    list-style: none;
}

li:before {
    content: '-';
    position: absolute;
    text-indent: -1.5rem;

}
</style>