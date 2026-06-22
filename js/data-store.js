// Centralized Data Store for The Gulab Ganj Restaurant
// Persists menu items, contact details, reviews, and admin replies using localStorage.

(function () {
    const DEFAULT_MENU_ITEMS = [
        {
            id: "paneer-makhani",
            name: "Paneer Makhani",
            category: "curries",
            price: 650,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_DoPiLSeag4Do3eCtj_-rkvbV94KuU9GiRtZ3edTlMCwSYJzrTjX7vc-IQuzPgJTasTsuRwx7XmjBt82iSQmTWDvKYCIum_NykP1DzdM7IIlYLIbgZib2UD4tfWHo5IVZmuV9la2UdKCldLIykuNiXi9ATXZ4rakh_AmpUWFgK3imZm9H6uSzLoKpcyDwxWqfcM-d82dq_uFLZf6eFlNeo4desnpW2_6ORWw8aEtT-2IHW8yCZYAu3uMcrTN6WaVoppkD91XruZ8",
            tag: "Signature",
            description: "Tender paneer cubes simmered in a velvety tomato and cashew gravy, finished with fresh white butter and cardamoms."
        },
        {
            id: "dal-makhani",
            name: "Dal Makhani",
            category: "curries",
            price: 550,
            image: "",
            tag: "",
            description: "Black lentils slow-cooked overnight on charcoal embers, enriched with fresh dairy cream and home-churned butter."
        },
        {
            id: "paneer-lababdar",
            name: "Paneer Lababdar",
            category: "curries",
            price: 600,
            image: "",
            tag: "",
            description: "Spiced cottage cheese cooked in a rich, chunkier gravy of tomatoes, onions, and bell peppers."
        },
        {
            id: "malai-kofta",
            name: "Malai Kofta",
            category: "curries",
            price: 580,
            image: "",
            tag: "",
            description: "Soft melt-in-the-mouth paneer dumplings stuffed with dry fruits, served in a creamy saffron-infused gravy."
        },
        {
            id: "tandoori-soya-chaap",
            name: "Tandoori Soya Chaap",
            category: "tandoor",
            price: 500,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMNRWw_fhuNa7NDPXqRKONtqmNcCjZg2NBkBAXurviVmfQTbpY3EmrvLwc9kZLkUzDHBUEnaA82OOAtckkGE6TO8d9FpD-sYR4Vvme9w8X1q2g3V7lgr-e7cYiIo92MOd3sWFYYLX3sqYt3n7VuROCG5LpelbAb3LtMM9bKttlrKEZO0khUsJamQw5TB2lFEqTPQLPCgN_RnTRELqQe8dtl9lvYxrzDrqH8hBw7kycYP1vQW0dYujQ2hbajoqPzZatg6zX_6FaJtQ",
            tag: "Clay Oven Special",
            description: "Soya chaap chunks marinated in rich spiced yogurt and roasted over charcoal in our traditional clay oven."
        },
        {
            id: "bharwan-paneer-tikka",
            name: "Bharwan Paneer Tikka",
            category: "tandoor",
            price: 600,
            image: "",
            tag: "",
            description: "Charcoal-grilled cottage cheese slabs filled with spiced dry fruits and homemade mint chutney."
        },
        {
            id: "mushroom-tikka",
            name: "Mushroom Tikka",
            category: "tandoor",
            price: 520,
            image: "",
            tag: "",
            description: "Whole fresh mushrooms marinated in tandoori paste and cooked in the clay oven."
        },
        {
            id: "butter-naan",
            name: "Butter Naan",
            category: "tandoor",
            price: 120,
            image: "",
            tag: "",
            description: "Leavened refined flour flatbread baked in the tandoor and layered with butter."
        },
        {
            id: "tandoori-roti",
            name: "Tandoori Roti",
            category: "tandoor",
            price: 80,
            image: "",
            tag: "",
            description: "Whole wheat flatbread baked against the walls of the traditional clay oven."
        },
        {
            id: "kesari-phirni",
            name: "Kesari Phirni",
            category: "desserts",
            price: 420,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEPwsuOu9vJvpcW_RImJDul7AaW9Ddq864hoiy4sFWLQg_8ZFABdmEwtl0CjSUImmwRdCL2p1H9bI575rKCDBxZyIUf4Bb0LGbyXhqvYjo6u-B7hvaoGLn_Lak4H6pNfDfbmU_9ORp23F8c_FJZ7o1tTnqycNtea7ra070m10D7ueG-iYWJjhrFlvF_vS6P3KeBmcfXODXufMbCRXN5F6FJjapo3rDN-DW8i415cMA5DbjSU4fSLGKER34Jkfoh5V6N12Buc5XzoQ",
            tag: "Chef's Special",
            description: "Slow-cooked ground rice pudding flavored with premium saffron threads and cardamom, set in clay pots."
        },
        {
            id: "gulab-lassi",
            name: "Gulab Lassi",
            category: "desserts",
            price: 220,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0nX0DyNId2ZDXHZsCKj77h__lJU4kfRwa04Mmn-bDT1r2olNixHbOCd8LX_Ev0yGC1Zn7yvFuQK6UCTqukRhgCeXPTOW56BB5EHUCb_6WIVYE0cHgO1pfgtFvz4rSqhqcMfgXwuCQvVIVVQL2lOiDnwziyFqmFGVBMfsgt_uhv9Y4kmU-vMcSMIQg7OvWAgE55iY4iJrJA8sdS-UMpyUhfKgA59SEgUetmV5h8OKLkflxP4rRxvE396FlqulxcmB3oj_q5QeeobE",
            tag: "Signature",
            description: "Creamy yogurt drink churned with rose syrup and cardamoms, topped with chopped almonds and rose petals."
        },
        {
            id: "moong-dal-halwa",
            name: "Moong Dal Halwa",
            category: "desserts",
            price: 380,
            image: "",
            tag: "",
            description: "Rich traditional dessert made of yellow moong dal roasted slowly in Desi Ghee and finished with nuts."
        },
        {
            id: "kesari-rasmalai",
            name: "Kesari Rasmalai",
            category: "desserts",
            price: 320,
            image: "",
            tag: "",
            description: "Soft cottage cheese balls poached and soaked in saffron sweetened cardamomy milk."
        }
    ];

    const DEFAULT_CATEGORIES = [
        { id: "curries", name: "North Indian Curries" },
        { id: "tandoor", name: "From the Tandoor" },
        { id: "desserts", name: "Royal Desserts & Drinks" }
    ];

    const DEFAULT_CONTACT_INFO = {
        phone: "+91 98765 43210",
        email: "info@gulabganjrewari.com",
        hours: "Daily: 11:00 AM - 11:00 PM",
        address: "Circular Road, Near Railway Station (Opposite SBI Main Branch), Rewari, Haryana 123401"
    };

    const DEFAULT_REVIEWS = [
        {
            id: 1,
            name: "Rajesh Sharma",
            rating: 5,
            comment: "Excellent taste! The Paneer Makhani was incredibly soft, and the Dal Makhani is by far the best in Rewari. True heritage style vegetarian dining.",
            date: "2026-06-15",
            reply: "Thank you Rajesh ji! We slow-cook our Dal Makhani overnight on charcoal embers to achieve that rich heritage taste. Hope to serve you again soon!"
        },
        {
            id: 2,
            name: "Preeti Yadav",
            rating: 4,
            comment: "Loved the traditional vibe and beautiful presentation. The Butter Naan was super soft, and Kesari Rasmalai was very fresh. Staff is extremely polite.",
            date: "2026-06-18",
            reply: "Thank you for the warm words, Preeti! We are delighted that you enjoyed our breads and desserts."
        },
        {
            id: 3,
            name: "Amit Verma",
            rating: 5,
            comment: "Best family restaurant near the Rewari railway station. Moong Dal Halwa is an absolute must-try! 100% pure vegetarian makes it my first choice.",
            date: "2026-06-20",
            reply: ""
        }
    ];

    // Helper to read localStorage
    function getStoredData(key, fallback) {
        const stored = localStorage.getItem(key);
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                console.error("Error parsing storage key " + key, e);
            }
        }
        // Initialize storage
        localStorage.setItem(key, JSON.stringify(fallback));
        return fallback;
    }

    // Initialize Store
    const store = {
        getMenuItems: function () {
            return getStoredData("gg_menu_items_royale", DEFAULT_MENU_ITEMS);
        },
        saveMenuItems: function (items) {
            localStorage.setItem("gg_menu_items_royale", JSON.stringify(items));
            window.dispatchEvent(new Event("gg_store_updated"));
        },
        getCategories: function () {
            return getStoredData("gg_menu_categories_royale", DEFAULT_CATEGORIES);
        },
        saveCategories: function (categories) {
            localStorage.setItem("gg_menu_categories_royale", JSON.stringify(categories));
            window.dispatchEvent(new Event("gg_store_updated"));
        },
        addCategory: function (name) {
            const categories = this.getCategories();
            const id = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
            if (!id || categories.find(c => c.id === id)) {
                return false;
            }
            categories.push({ id, name });
            this.saveCategories(categories);
            return true;
        },
        deleteCategory: function (id) {
            let categories = this.getCategories();
            categories = categories.filter(c => c.id !== id);
            this.saveCategories(categories);
        },
        updateCategory: function (id, newName) {
            const categories = this.getCategories();
            const cat = categories.find(c => c.id === id);
            if (cat) {
                cat.name = newName;
                this.saveCategories(categories);
            }
        },
        getContactInfo: function () {
            return getStoredData("gg_contact_info_royale", DEFAULT_CONTACT_INFO);
        },
        saveContactInfo: function (info) {
            localStorage.setItem("gg_contact_info_royale", JSON.stringify(info));
            window.dispatchEvent(new Event("gg_store_updated"));
        },
        getReviews: function () {
            return getStoredData("gg_reviews_royale", DEFAULT_REVIEWS);
        },
        saveReviews: function (reviews) {
            localStorage.setItem("gg_reviews_royale", JSON.stringify(reviews));
            window.dispatchEvent(new Event("gg_store_updated"));
        },
        addReview: function (name, rating, comment) {
            const reviews = this.getReviews();
            const newReview = {
                id: Date.now(),
                name: name,
                rating: parseInt(rating) || 5,
                comment: comment,
                date: new Date().toISOString().split("T")[0],
                reply: ""
            };
            reviews.unshift(newReview); // Newest first
            this.saveReviews(reviews);
            return newReview;
        },
        deleteReview: function (id) {
            let reviews = this.getReviews();
            reviews = reviews.filter(r => r.id != id);
            this.saveReviews(reviews);
        },
        addReply: function (id, replyText) {
            const reviews = this.getReviews();
            const review = reviews.find(r => r.id == id);
            if (review) {
                review.reply = replyText;
                this.saveReviews(reviews);
            }
        }
    };

    // Expose store globally
    window.GulabGanjStore = store;

    // Auto-populate dynamic contact info in footers and headers on DOM ready
    document.addEventListener("DOMContentLoaded", function () {
        // Update contact selectors
        function updateDOM() {
            const info = store.getContactInfo();
            
            document.querySelectorAll(".gg-dynamic-phone").forEach(el => el.textContent = info.phone);
            document.querySelectorAll(".gg-dynamic-email").forEach(el => el.textContent = info.email);
            document.querySelectorAll(".gg-dynamic-hours").forEach(el => el.textContent = info.hours);
            document.querySelectorAll(".gg-dynamic-address").forEach(el => el.textContent = info.address);

            document.querySelectorAll(".gg-dynamic-phone-link").forEach(el => {
                el.setAttribute("href", "tel:" + info.phone.replace(/\s+/g, ""));
            });
            document.querySelectorAll(".gg-dynamic-email-link").forEach(el => {
                el.setAttribute("href", "mailto:" + info.email);
            });
        }

        updateDOM();
        window.addEventListener("gg_store_updated", updateDOM);
    });
})();
