// Centralized Data Store for The Gulab Ganj Restaurant
// Persists menu items, contact details, reviews, and admin replies using localStorage.

(function () {
    const DEFAULT_CATEGORIES = [
        { id: "tandoor-special", name: "Tandoor Special" },
        { id: "chaap-special", name: "Chaap Special" },
        { id: "snacks", name: "Snacks" },
        { id: "chinese-special", name: "Chinese Special" },
        { id: "momos-special", name: "Momos Special" },
        { id: "pizza-special", name: "Pizza Special" },
        { id: "pasta", name: "Pasta" },
        { id: "paneer-special", name: "Paneer Special" },
        { id: "dal-special", name: "Dal Special" },
        { id: "indian-bread", name: "Indian Bread" },
        { id: "rice-special", name: "Rice Special" },
        { id: "combo-special", name: "Combo Special" },
        { id: "beverages", name: "Beverages" },
        { id: "mocktails-shakes", name: "Mocktails & Shakes" },
        { id: "nashta-special", name: "Nashta Special" },
        { id: "tandoori-paratha-special", name: "Tandoori Paratha Special" },
        { id: "sandwich-burger", name: "Sandwich & Burger" },
        { id: "soup-special", name: "Soup Special" },
        { id: "maggie", name: "Maggie" },
        { id: "premium-thalis", name: "Premium Thalis" },
        { id: "raita-salad", name: "Raita & Salad" },
        { id: "papad", name: "Papad" },
        { id: "sweet-dish", name: "Sweet Dish" },
        { id: "ice-cream", name: "Ice Cream" }
    ];

    const DEFAULT_MENU_ITEMS = [
        // Tandoor Special
        { id: "paneer-tikka", name: "Paneer Tikka", category: "tandoor-special", price: 180, description: "Spiced cottage cheese cubes marinated and grilled in clay oven." },
        { id: "paneer-achari-tikka", name: "Paneer Achari Tikka", category: "tandoor-special", price: 200, description: "Cottage cheese marinated with tangy pickle spices." },
        { id: "paneer-malai-tikka", name: "Paneer Malai Tikka", category: "tandoor-special", price: 220, description: "Cottage cheese marinated in cream, cashew paste, and mild spices." },
        { id: "paneer-afghani-tikka", name: "Paneer Afghani Tikka", category: "tandoor-special", price: 210, description: "Afghan style marinated cottage cheese, creamy and mild." },
        { id: "paneer-stuff-tikka", name: "Paneer Stuff Tikka", category: "tandoor-special", price: 250, description: "Cottage cheese slots stuffed with spiced dry fruits and cheese." },
        { id: "mushroom-tikka", name: "Mushroom Tikka", category: "tandoor-special", price: 200, description: "Fresh mushrooms marinated in tandoori spices and roasted." },
        { id: "mushroom-malai-tikka", name: "Mushroom Malai Tikka", category: "tandoor-special", price: 220, description: "Fresh mushrooms marinated in a rich creamy paste." },
        { id: "mushroom-stuff-tikka", name: "Mushroom Stuff Tikka", category: "tandoor-special", price: 250, description: "Stuffed fresh mushrooms grilled to perfection." },

        // Chaap Special
        { id: "tandoori-chaap", name: "Tandoori Chaap", category: "chaap-special", price: 180, description: "Soyabean chaap marinated in yogurt and traditional spices." },
        { id: "malai-chaap", name: "Malai Chaap", category: "chaap-special", price: 200, description: "Chaap marinated in cream, cardamom, and cashew paste." },
        { id: "achari-chaap", name: "Achari Chaap", category: "chaap-special", price: 190, description: "Chaap infused with tangy pickle marination." },
        { id: "afghani-chaap", name: "Afghani Chaap", category: "chaap-special", price: 200, description: "Mildly spiced creamy Afghani style roasted chaap." },
        { id: "tawa-chaap-gravy", name: "Tawa Chaap (Gravy)", category: "chaap-special", price: 200, description: "Chaap chunks cooked in a rich onion-tomato gravy on tawa." },
        { id: "angara-chaap-gravy", name: "Angara Chaap (Gravy)", category: "chaap-special", price: 230, description: "Spicy and smoky red gravy chaap preparation." },
        { id: "shahi-chaap-gravy", name: "Shahi Chaap (Gravy)", category: "chaap-special", price: 250, description: "Royal style rich cashew and cream gravy chaap." },

        // Snacks
        { id: "mix-pakoda", name: "Mix Pakoda", category: "snacks", price: 120, description: "Assorted vegetable fritters fried to crisp perfection." },
        { id: "paneer-pakoda", name: "Paneer Pakoda", category: "snacks", price: 180, description: "Spiced paneer slabs batter-fried." },
        { id: "dahi-ke-sholey", name: "Dahi Ke Sholey", category: "snacks", price: 260, description: "Crispy bread rolls stuffed with spiced hung curd." },
        { id: "dahi-kabab", name: "Dahi Kabab", category: "snacks", price: 230, description: "Melt in mouth patties made with hung curd and spices." },
        { id: "hara-bhara-kabab", name: "Hara Bhara Kabab", category: "snacks", price: 240, description: "Spinach, green peas, and potato patties, shallow fried." },
        { id: "french-fries", name: "French Fries", category: "snacks", price: 80, description: "Classic salted potato fingers." },
        { id: "peri-peri-fries", name: "Peri-Peri Fries", category: "snacks", price: 100, description: "Potato fries tossed in spicy peri-peri seasoning." },
        { id: "sweet-corn", name: "Sweet Corn", category: "snacks", price: 90, description: "Steamed sweet corn kernels served with butter and spices." },
        { id: "crispy-corn", name: "Crispy Corn", category: "snacks", price: 200, description: "Crisp fried corn kernels tossed with onions and spices." },
        { id: "cheese-finger", name: "Cheese Finger", category: "snacks", price: 190, description: "Crispy breaded cheese sticks fried golden." },

        // Chinese Special
        { id: "veg-noodles", name: "Veg Noodles", category: "chinese-special", price: 120, description: "Stir-fried noodles with crisp vegetables." },
        { id: "hakka-noodles", name: "Hakka Noodles", category: "chinese-special", price: 140, description: "Classic Indo-Chinese style stir-fried noodles." },
        { id: "singapuri-noodles", name: "Singapuri Noodles", category: "chinese-special", price: 160, description: "Spicy noodles flavored with curry powder and fresh veggies." },
        { id: "butter-garlic-noodles", name: "Butter Garlic Noodles", category: "chinese-special", price: 190, description: "Rich buttery noodles with strong garlic notes." },
        { id: "veg-fried-rice", name: "Veg Fried Rice", category: "chinese-special", price: 120, description: "Fluffy rice stir-fried with mixed vegetables." },
        { id: "paneer-fried-rice", name: "Paneer Fried Rice", category: "chinese-special", price: 150, description: "Fried rice with chunks of soft paneer." },
        { id: "veg-manchurian-dry", name: "Veg Manchurian Dry", category: "chinese-special", price: 150, description: "Crisp veg balls tossed in tangy Manchurian sauce." },
        { id: "veg-manchurian-gravy", name: "Veg Manchurian Gravy", category: "chinese-special", price: 170, description: "Veg Manchurian balls in a thick savory gravy." },
        { id: "chilli-potato", name: "Chilli Potato", category: "chinese-special", price: 160, description: "Crispy potato fingers tossed in chilli sauce." },
        { id: "honey-chilli-potato", name: "Honey Chilli Potato", category: "chinese-special", price: 180, description: "Crispy potatoes tossed in sweet honey and spicy chilli sauce." },
        { id: "chilli-paneer-dry", name: "Chilli Paneer Dry", category: "chinese-special", price: 220, description: "Paneer cubes tossed with bell peppers and onions in soy-chilli." },
        { id: "chilli-paneer-gravy", name: "Chilli Paneer Gravy", category: "chinese-special", price: 220, description: "Chilli paneer served in a thick hot gravy." },
        { id: "chilli-mushroom-dry", name: "Chilli Mushroom Dry", category: "chinese-special", price: 200, description: "Crisp mushrooms tossed in hot chilli sauce." },
        { id: "chilli-mushroom-gravy", name: "Chilli Mushroom Gravy", category: "chinese-special", price: 220, description: "Mushrooms cooked in a thick spicy Chinese gravy." },
        { id: "veg-spring-roll", name: "Veg Spring Roll", category: "chinese-special", price: 130, description: "Crispy wrapper filled with seasoned stir-fried vegetables." },

        // Momos Special
        { id: "veg-steam-momos", name: "Veg Steam Momos", category: "momos-special", price: 120, description: "Steamed dumplings stuffed with mixed vegetables." },
        { id: "paneer-steam-momos", name: "Paneer Steam Momos", category: "momos-special", price: 140, description: "Steamed dumplings stuffed with spiced cottage cheese." },
        { id: "veg-fried-momos", name: "Veg Fried Momos", category: "momos-special", price: 130, description: "Golden fried vegetable dumplings." },
        { id: "paneer-fried-momos", name: "Paneer Fried Momos", category: "momos-special", price: 150, description: "Golden fried paneer dumplings." },
        { id: "veg-kurkure-momos", name: "Veg Kurkure Momos", category: "momos-special", price: 160, description: "Crunchy batter-coated and fried vegetable dumplings." },
        { id: "paneer-kurkure-momos", name: "Paneer Kurkure Momos", category: "momos-special", price: 180, description: "Crunchy coated and fried cottage cheese dumplings." },

        // Pizza Special
        { id: "onion-capsicum-pizza", name: "Onion Capsicum Pizza", category: "pizza-special", price: 140, description: "Fresh onions and green capsicum with cheese." },
        { id: "corn-cheese-pizza", name: "Corn Cheese Pizza", category: "pizza-special", price: 160, description: "Sweet corn kernels loaded with fresh mozzarella." },
        { id: "mix-veg-pizza", name: "Mix Veg Pizza", category: "pizza-special", price: 180, description: "Assorted seasonal vegetables with cheese." },
        { id: "paneer-tikka-pizza", name: "Paneer Tikka Pizza", category: "pizza-special", price: 200, description: "Spiced paneer tikka chunks topped with cheese." },

        // Pasta
        { id: "red-sauce-pasta", name: "Red Sauce Pasta", category: "pasta", price: 140, description: "Pasta cooked in tangy spiced tomato marinara sauce." },
        { id: "white-sauce-pasta", name: "White Sauce Pasta", category: "pasta", price: 160, description: "Pasta in a rich, creamy cheese sauce." },
        { id: "mix-sauce-pasta", name: "Mix Sauce Pasta", category: "pasta", price: 180, description: "Pasta in a blend of creamy white and tangy red sauce." },

        // Paneer Special
        { id: "shahi-paneer", name: "Shahi Paneer", category: "paneer-special", price: 250, halfPrice: 160, fullPrice: 250, description: "Cottage cheese in a rich, creamy royal gravy." },
        { id: "matar-paneer", name: "Matar Paneer", category: "paneer-special", price: 240, halfPrice: 150, fullPrice: 240, description: "Paneer and green peas cooked in a spiced tomato gravy." },
        { id: "kadhai-paneer", name: "Kadhai Paneer", category: "paneer-special", price: 280, halfPrice: 180, fullPrice: 280, description: "Paneer tossed with bell peppers and freshly ground kadhai spice." },
        { id: "paneer-butter-masala", name: "Paneer Butter Masala", category: "paneer-special", price: 280, halfPrice: 180, fullPrice: 280, tag: "Signature", description: "Paneer chunks simmered in a velvety buttery tomato gravy." },
        { id: "paneer-lababdar", name: "Paneer Lababdar", category: "paneer-special", price: 280, halfPrice: 180, fullPrice: 280, description: "Cottage cheese in a chunkier, flavorful gravy." },
        { id: "paneer-do-pyaza", name: "Paneer Do Pyaza", category: "paneer-special", price: 290, halfPrice: 190, fullPrice: 290, description: "Paneer cooked with twice the onions, rich and sweet-spiced." },
        { id: "palak-paneer", name: "Palak Paneer", category: "paneer-special", price: 250, halfPrice: null, fullPrice: 250, description: "Paneer cubes in a healthy spiced spinach puree." },
        { id: "paneer-tikka-masala", name: "Paneer Tikka Masala", category: "paneer-special", price: 299, halfPrice: null, fullPrice: 299, description: "Tandoori paneer tikka cooked in a spicy masala gravy." },
        { id: "handi-paneer", name: "Handi Paneer", category: "paneer-special", price: 320, halfPrice: null, fullPrice: 320, description: "Paneer cooked slow in a traditional clay handi." },
        { id: "paneer-bhurji", name: "Paneer Bhurji", category: "paneer-special", price: 299, halfPrice: null, fullPrice: 299, description: "Scrambled spiced cottage cheese cooked with herbs." },

        // Dal Special
        { id: "dal-fry", name: "Dal Fry", category: "dal-special", price: 120, halfPrice: 80, fullPrice: 120, description: "Yellow lentils cooked and seasoned with spices." },
        { id: "dal-tadka", name: "Dal Tadka", category: "dal-special", price: 140, halfPrice: 100, fullPrice: 140, description: "Yellow lentils tempered with ghee, garlic, and red chillies." },
        { id: "dal-makhani", name: "Dal Makhani", category: "dal-special", price: 199, halfPrice: 130, fullPrice: 199, tag: "Signature", description: "Black lentils slow cooked overnight and enriched with cream." },
        { id: "chana-masala", name: "Chana Masala", category: "dal-special", price: 250, halfPrice: 160, fullPrice: 250, description: "Spicy white chickpeas cooked in a Punjabi masala." },

        // Indian Bread
        { id: "tandoori-plain-roti", name: "Tandoori Plain Roti", category: "indian-bread", price: 12, description: "Whole wheat flatbread baked in clay oven." },
        { id: "tandoori-butter-roti", name: "Tandoori Butter Roti", category: "indian-bread", price: 15, description: "Clay oven flatbread layered with fresh butter." },
        { id: "missi-roti", name: "Missi Roti", category: "indian-bread", price: 25, description: "Flatbread made from gram flour and wheat flour with spices." },
        { id: "onion-missi-roti", name: "Onion Missi Roti", category: "indian-bread", price: 30, description: "Spiced gram flour flatbread with finely chopped onions." },
        { id: "onion-roti", name: "Onion Roti", category: "indian-bread", price: 26, description: "Whole wheat flatbread stuffed with onions." },
        { id: "plain-naan", name: "Plain Naan", category: "indian-bread", price: 45, description: "Classic refined flour bread baked in tandoor." },
        { id: "butter-naan", name: "Butter Naan", category: "indian-bread", price: 50, description: "Leavened flatbread glazed with butter." },
        { id: "stuffed-naan", name: "Stuffed Naan", category: "indian-bread", price: 65, description: "Naan stuffed with spiced potato and paneer." },
        { id: "garlic-naan", name: "Garlic Naan", category: "indian-bread", price: 60, description: "Tandoor baked bread flavored with fresh minced garlic." },
        { id: "paneer-naan", name: "Paneer Naan", category: "indian-bread", price: 75, description: "Leavened bread stuffed with spiced scrambled paneer." },
        { id: "laccha-parantha", name: "Laccha Parantha", category: "indian-bread", price: 45, description: "Layered whole wheat bread with butter." },
        { id: "onion-kulcha", name: "Onion Kulcha", category: "indian-bread", price: 60, description: "Soft bread stuffed with spiced onions and herbs." },
        { id: "gg-special-chur-chur-naan", name: "Gulab Ganj Special Chur Chur Naan", category: "indian-bread", price: 99, tag: "Signature", description: "Flaky, crushed stuffed naan served with butter." },

        // Rice Special
        { id: "plain-rice", name: "Plain Rice", category: "rice-special", price: 110, description: "Steamed premium basmati rice." },
        { id: "jeera-rice", name: "Jeera Rice", category: "rice-special", price: 120, description: "Basmati rice tempered with cumin seeds." },
        { id: "veg-pulao", name: "Veg Pulao", category: "rice-special", price: 140, description: "Basmati rice cooked with mixed vegetables and spices." },
        { id: "matar-pulao", name: "Matar Pulao", category: "rice-special", price: 150, description: "Mild basmati rice cooked with fresh sweet green peas." },
        { id: "paneer-pulao", name: "Paneer Pulao", category: "rice-special", price: 220, description: "Aromatic basmati rice cooked with pan-fried paneer cubes." },
        { id: "veg-hyderabadi-biryani", name: "Veg Hyderabadi Biryani", category: "rice-special", price: 250, description: "Layered spiced rice cooked dum-style with vegetables." },
        { id: "kashmiri-rice", name: "Kashmiri Rice", category: "rice-special", price: 270, description: "Sweet and aromatic rice cooked with dry fruits and saffron." },

        // Combo Special
        { id: "shahi-paneer-rice", name: "Shahi Paneer Rice", category: "combo-special", price: 239, description: "Served with a portion of Shahi Paneer and Steamed Rice." },
        { id: "chola-rice", name: "Chola Rice", category: "combo-special", price: 195, description: "Traditional spiced chickpeas served with Steamed Rice." },
        { id: "dal-makhani-rice", name: "Dal Makhani Rice", category: "combo-special", price: 209, description: "Slow-cooked black lentils served with Basmati Rice." },

        // Beverages
        { id: "special-kulhad-tea", name: "Special Kulhad Tea", category: "beverages", price: 20, halfPrice: 15, fullPrice: 20, description: "Traditional milk tea served hot in a clay cup." },
        { id: "hot-coffee", name: "Hot Coffee", category: "beverages", price: 30, halfPrice: 30, fullPrice: null, description: "Rich aromatic hot brewed coffee." },
        { id: "black-coffee", name: "Black Coffee", category: "beverages", price: 30, halfPrice: 30, fullPrice: null, description: "Strong black coffee without milk." },
        { id: "green-tea", name: "Green Tea", category: "beverages", price: 30, halfPrice: 30, fullPrice: null, description: "Healthy antioxidant green tea." },
        { id: "cold-coffee", name: "Cold Coffee", category: "beverages", price: 99, halfPrice: 99, fullPrice: null, description: "Chilled milk and coffee blend." },
        { id: "gg-special-gulab-lassi", name: "Gulab Ganj Special Gulab Lassi", category: "beverages", price: 99, halfPrice: 99, fullPrice: null, tag: "Signature", description: "Yogurt blended with sweet rose syrup, almonds, and petals." },
        { id: "sweet-lassi", name: "Sweet Lassi", category: "beverages", price: 70, halfPrice: 70, fullPrice: null, description: "Traditional sweet churned yogurt drink." },
        { id: "salted-lassi", name: "Salted Lassi", category: "beverages", price: 60, halfPrice: 60, fullPrice: null, description: "Chilled yogurt drink flavored with roasted cumin and salt." },

        // Mocktails & Shakes
        { id: "virgin-mojito", name: "Virgin Mojito", category: "mocktails-shakes", price: 90, description: "Refreshing mint and lemon mocktail." },
        { id: "blue-lagoon", name: "Blue Lagoon", category: "mocktails-shakes", price: 90, description: "Curacao syrup mocktail with lemon." },
        { id: "vanilla-shake", name: "Vanilla Shake", category: "mocktails-shakes", price: 99, description: "Classic cold milkshake with premium vanilla beans." },
        { id: "butterscotch-shake", name: "Butterscotch Shake", category: "mocktails-shakes", price: 120, description: "Sweet milkshake blended with butterscotch crunch." },
        { id: "strawberry-shake", name: "Strawberry Shake", category: "mocktails-shakes", price: 99, description: "Smooth milkshake flavored with strawberries." },
        { id: "chocolate-shake", name: "Chocolate Shake", category: "mocktails-shakes", price: 120, description: "Rich, creamy chocolate milkshake." },
        { id: "mango-shake", name: "Mango Shake", category: "mocktails-shakes", price: 120, description: "Thick shake made with sweet mango pulp." },
        { id: "gg-special-khajoor-shake", name: "Gulab Ganj Special Khajoor Shake", category: "mocktails-shakes", price: 150, tag: "Signature", description: "Healthy shake made with premium dates and dry fruits." },
        { id: "oreo-shake", name: "Oreo Shake", category: "mocktails-shakes", price: 130, description: "Thick milkshake blended with Oreo cookies." },
        { id: "kit-kat-shake", name: "Kit Kat Shake", category: "mocktails-shakes", price: 140, description: "Milkshake blended with crunchy Kit Kat bars." },
        { id: "gg-special-kesar-pista-shake", name: "Gulab Ganj Special Kesar Pista Shake", category: "mocktails-shakes", price: 150, tag: "Signature", description: "Creamy shake flavored with premium saffron and pistachios." },

        // Nashta Special
        { id: "choley-bhature", name: "Choley Bhature (2 pcs)", category: "nashta-special", price: 120, description: "Spiced chickpea curry served with two fluffy fried leavened breads." },
        { id: "poori-bhaji", name: "Poori Bhaji (4 pcs)", category: "nashta-special", price: 100, description: "Fried whole wheat puffed bread served with tangy potato curry." },
        { id: "extra-poori", name: "Extra Poori (2 pcs)", category: "nashta-special", price: 40, description: "Two additional pieces of hot fried pooris." },
        { id: "extra-bhature", name: "Extra Bhature (1 pc)", category: "nashta-special", price: 40, description: "One additional piece of fluffy hot bhatura." },
        { id: "pav-bhaji", name: "Pav Bhaji", category: "nashta-special", price: 120, description: "Thick mashed vegetable curry served with buttered soft bread rolls." },
        { id: "extra-pav", name: "Extra Pav (1 pc)", category: "nashta-special", price: 40, description: "One additional piece of buttered soft bread roll." },

        // Tandoori Paratha Special
        { id: "onion-paratha", name: "Onion Paratha", category: "tandoori-paratha-special", price: 70, description: "Clay-oven baked flatbread stuffed with spiced onions." },
        { id: "gobhi-paratha", name: "Gobhi Paratha", category: "tandoori-paratha-special", price: 70, description: "Baked flatbread stuffed with grated seasoned cauliflower." },
        { id: "aloo-paratha", name: "Aloo Paratha", category: "tandoori-paratha-special", price: 70, description: "Clay-oven baked flatbread stuffed with spiced mashed potatoes." },
        { id: "mix-paratha", name: "Mix Paratha", category: "tandoori-paratha-special", price: 80, description: "Tandoori flatbread stuffed with assorted seasoned vegetables." },
        { id: "paneer-paratha", name: "Paneer Paratha", category: "tandoori-paratha-special", price: 90, description: "Delicious flatbread stuffed with seasoned scrambled paneer." },

        // Sandwich & Burger
        { id: "bread-toast", name: "Bread Toast", category: "sandwich-burger", price: 40, description: "Simple buttered toasted bread slices." },
        { id: "veg-sandwich", name: "Veg Sandwich", category: "sandwich-burger", price: 80, description: "Fresh sliced vegetables sandwich with herb spread." },
        { id: "veg-grilled-sandwich", name: "Veg Grilled Sandwich", category: "sandwich-burger", price: 100, description: "Grilled sandwich stuffed with seasoned mixed vegetables." },
        { id: "corn-cheese-grilled-sandwich", name: "Corn Cheese Grilled Sandwich", category: "sandwich-burger", price: 120, description: "Sweet corn and loaded cheese grilled sandwich." },
        { id: "tandoori-paneer-grilled-sandwich", name: "Tandoori Paneer Grilled Sandwich", category: "sandwich-burger", price: 140, description: "Spiced paneer tikka chunks grilled sandwich." },
        { id: "aloo-tikki-burger", name: "Aloo Tikki Burger", category: "sandwich-burger", price: 50, description: "Crispy potato patty burger with onion and tomato slices." },
        { id: "cheese-burger", name: "Cheese Burger", category: "sandwich-burger", price: 80, description: "Potato patty burger layered with a melt-in-the-mouth cheese slice." },
        { id: "spicy-crispy-burger", name: "Spicy Crispy Burger", category: "sandwich-burger", price: 70, description: "Crisp vegetable patty burger with spicy herb sauce." },
        { id: "paneer-burger", name: "Paneer Burger", category: "sandwich-burger", price: 90, description: "Burger with a thick crisp paneer patty and fresh greens." },
        { id: "maharaja-burger", name: "Maharaja Burger", category: "sandwich-burger", price: 110, description: "Double decker burger with double patties and rich dressings." },
        { id: "paneer-maharaja-burger", name: "Paneer Maharaja Burger", category: "sandwich-burger", price: 150, description: "Grand double decker burger with double paneer patties." },

        // Soup Special
        { id: "tomato-soup", name: "Tomato Soup", category: "soup-special", price: 99, description: "Creamy traditional soup made from ripe tomatoes and herbs." },
        { id: "sweet-corn-soup", name: "Sweet Corn Soup", category: "soup-special", price: 90, description: "Comforting thick soup filled with sweet corn kernels." },
        { id: "hot-sour-soup", name: "Hot & Sour Soup", category: "soup-special", price: 90, description: "Spicy and tangy Chinese style vegetable soup." },
        { id: "veg-manchow-soup", name: "Veg Manchow Soup", category: "soup-special", price: 99, description: "Spicy ginger-garlic flavored soup topped with crispy noodles." },

        // Maggie
        { id: "masala-maggie", name: "Masala Maggie", category: "maggie", price: 70, description: "Quick noodles cooked in standard Maggie masala." },
        { id: "veg-maggie", name: "Veg Maggie", category: "maggie", price: 90, description: "Maggie noodles tossed with sweet peas, carrots, and onions." },
        { id: "tandoori-cheese-maggie", name: "Tandoori Cheese Maggie", category: "maggie", price: 130, description: "Maggie cooked with tandoori spices and loaded with cheese." },
        { id: "maggie-special", name: "Maggie", category: "maggie", price: 130, description: "Rich double masala Maggie noodles." },

        // Premium Thalis
        { id: "special-thali", name: "Special Thali", category: "premium-thalis", price: 299, tag: "Most Popular", description: "Paneer Lababdar, Dal Makhani, Mix Veg, Mix Raita, Gulab Jamun, Papad, Rice, Salad, 1 Laccha Paratha, 1 Butter Naan" },
        { id: "sadabahar-thali", name: "Sadabahar Thali", category: "premium-thalis", price: 189, tag: "Best Value", description: "Paneer Butter Masala, Dal Makhani, Boondi Raita, Salad, Rice, 1 Mini Naan, 1 Butter Roti" },

        // Raita & Salad
        { id: "plain-dahi", name: "Plain Dahi", category: "raita-salad", price: 99, description: "Fresh set homemade yogurt." },
        { id: "boondi-raita", name: "Boondi Raita", category: "raita-salad", price: 110, description: "Yogurt blended with tiny fried gram flour balls." },
        { id: "mix-raita", name: "Mix Raita", category: "raita-salad", price: 120, description: "Yogurt blended with cucumber, onion, tomato, and spices." },
        { id: "pineapple-raita", name: "Pineapple Raita", category: "raita-salad", price: 150, description: "Creamy sweet yogurt blended with pineapple chunks." },
        { id: "green-salad", name: "Green Salad", category: "raita-salad", price: 70, description: "Fresh sliced cucumber, tomato, onion, and carrots." },
        { id: "kachumber-salad", name: "Kachumber Salad", category: "raita-salad", price: 80, description: "Finely chopped mixed vegetables tossed in lemon dressing." },

        // Papad
        { id: "tandoori-papad", name: "Tandoori Papad", category: "papad", price: 20, description: "Lentil wafer roasted in clay oven." },
        { id: "fry-papad", name: "Fry Papad", category: "papad", price: 30, description: "Golden deep-fried crisp lentil wafer." },
        { id: "masala-papad", name: "Masala Papad (2 pcs)", category: "papad", price: 60, description: "Wafer topped with spicy chopped onions, tomatoes, and herbs." },

        // Sweet Dish
        { id: "gulab-jamun-2pcs", name: "Gulab Jamun (2 pcs)", category: "sweet-dish", price: 60, description: "Hot milk-solid dumplings soaked in sugar syrup." },
        { id: "sponge-rasgulla-2pcs", name: "Sponge Rasgulla (2 pcs)", category: "sweet-dish", price: 60, description: "Soft spongy cottage cheese balls soaked in light sugar syrup." },
        { id: "gajar-halwa", name: "Gajar Halwa (Seasonal)", category: "sweet-dish", price: 99, description: "Traditional carrot pudding slow-cooked in milk and Desi Ghee." },

        // Ice Cream
        { id: "vanilla-icecream", name: "Vanilla", category: "ice-cream", price: 60, description: "Classic cold sweet vanilla scoop." },
        { id: "chocolate-icecream", name: "Chocolate", category: "ice-cream", price: 80, description: "Rich creamy chocolate flavored scoop." },
        { id: "butterscotch-icecream", name: "Butterscotch", category: "ice-cream", price: 80, description: "Scoop with caramelized butterscotch crunch." },
        { id: "strawberry-icecream", name: "Strawberry", category: "ice-cream", price: 60, description: "Refreshing sweet strawberry flavored scoop." },
        { id: "gg-special-icecream", name: "Gulab Ganj Special", category: "ice-cream", price: 99, description: "Signature heritage rich dried fruit flavored kulfi-style scoop." }
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
            return getStoredData("gg_menu_items_v4", DEFAULT_MENU_ITEMS);
        },
        saveMenuItems: function (items) {
            localStorage.setItem("gg_menu_items_v4", JSON.stringify(items));
            window.dispatchEvent(new Event("gg_store_updated"));
        },
        getCategories: function () {
            return getStoredData("gg_menu_categories_v4", DEFAULT_CATEGORIES);
        },
        saveCategories: function (categories) {
            localStorage.setItem("gg_menu_categories_v4", JSON.stringify(categories));
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
