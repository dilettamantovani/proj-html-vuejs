import { reactive } from 'vue'

export const store = reactive({
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
})