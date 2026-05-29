// All recipes for Tam's Treats. Keyed by slug.
// Each recipe has: title, color, category, optional tag, optional subcategory (savory only),
// optional link {href, text}, optional intro (paragraph), sections [{heading, type, items}],
// or customBodyHtml to override section rendering.

const RECIPES = {

	// ==================== BREAD ====================
	'cream-cheese-milk-bun': {
		title: 'Cream Cheese Milk Bun',
		color: 'color_orange',
		category: 'bread',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'310 grams bread flour + 41',
				'30 (45) grams sugar',
				'3 grams salt',
				'4 grams yeast',
				'170 grams milk',
				'50 grams cream cheese',
				'20 grams butter',
				'1 egg',
			]},
			{ heading: 'Instructions', type: 'ol', items: [
				'Melt cream cheese in a pot and once melted slowly add milk in and whisk until lukewarm.',
				'In a big bowl whisk flour, sugar, salt, and yeast.',
				'Add the cream cheese milk mixture and eggs in the dry ingredients and mix.',
				"Then once it's almost mixed completely, add butter.",
				'Knead until it no longer sticks on your hands (20-40 minutes by hand).',
				'Proof in a bowl coated in oil for 1 hour.',
				'After one hour, knead the dough until air bubbles are out and divide into 8 sections (about 74 grams) or 9 sections (about 65 grams).',
				'Knead the divided dough into balls and let them rest for 15 minutes.',
				'Get rid of air bubbles and roll into a ball.',
				'Place dough balls in an oiled cake pan and proof for 40 minutes.',
				'Sprinkle some flour on top and bake for 20-23 minutes at 200°C.',
				'Eat :p',
			]},
		],
	},

	'coffee-buns': {
		title: 'Coffee Buns',
		tag: 'Makes 4 buns',
		color: 'color_brown',
		category: 'bread',
		sections: [
			{ heading: 'Ingredients (Dough)', type: 'ul', items: [
				'180g bread flour',
				'20g sugar',
				'2g salt',
				'4g dry yeast',
				'110g warm milk',
				'30g unsalted butter',
			]},
			{ heading: 'Ingredients (Topping)', type: 'ul', items: [
				'5g warm water',
				'3g instant coffee powder',
				'30g unsalted butter',
				'25g sugar',
				'25g egg',
				'35g cake flour',
			]},
			{ heading: 'Instructions', type: 'ol', items: [
				'In a stand mixer bowl combine flour, sugar, salt, and yeast.',
				'Add warm milk and knead for 5 mins.',
				'Add melted butter and knead for 10-20 mins. (Kneading more = softer.)',
				'Proof bread for about an hour.',
				'Divide into 4 pieces and knead into a ball and add dark chocolate into the middle of the bun.',
				'Proof for 15-20 mins.',
				'Make coffee mixture (coffee powder and water).',
				'Cream sugar and butter.',
				'Add egg then the coffee mixture.',
				'Add cake flour and if loose add more to thicken.',
				'Pipe it onto bread.',
				'Bake at 275°F for about 20-25 mins.',
			]},
		],
	},

	'pizza-dough-garlic-knots': {
		title: 'Pizza Dough / Garlic Knots',
		tag: 'Makes 2 pizzas + 11 knots',
		color: 'color_yellow',
		category: 'bread',
		sections: [
			{ heading: 'Ingredients (Dough)', type: 'ul', items: [
				'1 1/4 cups (600 ml) warm water',
				'1/2 teaspoon sugar',
				'1 teaspoon active dried yeast',
				'3 1/2 cups all-purpose flour',
				'3 tablespoons extra virgin olive oil',
				'3/4 tablespoon kosher salt',
				'2 tablespoons semolina flour',
			]},
			{ heading: 'Garlic Knots', type: 'ul', items: [
				'2.5 tablespoons melted butter',
				'1/4 teaspoon garlic powder',
				'1/2 teaspoon oregano',
				'1/4 teaspoon basil',
			]},
		],
	},

	'cinnamon-rolls': {
		title: 'Cinnamon Rolls',
		color: 'color_pink',
		category: 'bread',
		sections: [
			{ heading: 'Ingredients (Dough)', type: 'ul', items: [
				'4 cups (580g) all-purpose flour',
				'1/2 cup (107g) granulated sugar',
				'3/4 tsp (6g) fine sea salt',
				'1/3 cup (84g) butter',
				'1 cup (235g) lukewarm whole milk',
				'2 1/4 tsp (7g) instant yeast',
				'2 eggs + 1 egg yolk',
			]},
			{ heading: 'Ingredients (Filling)', type: 'ul', items: [
				'1 cup (225g) brown sugar',
				'2.5 Tbsp (17g) cinnamon',
				'1/3 cup (84g) butter',
			]},
			{ heading: 'Instructions', type: 'ol', items: [
				'Whisk together flour, sugar, and salt. Blend in butter with two forks.',
				'Whisk lukewarm milk and instant yeast separately.',
				'Using dough hook, add yeast mixture, eggs, and egg yolk. Mix 2-3 minutes.',
				'Knead on floured surface 30-60 seconds. Rise in greased bowl 90 minutes.',
				'Mix brown sugar and cinnamon for filling.',
				'Flatten dough into rectangle, spread butter, sprinkle cinnamon sugar.',
				'Tightly roll and slice into 2" segments.',
				'Place in greased 9x13 dish. Rise 30-45 minutes.',
				'Bake at 375°F for 15-20 minutes.',
				'Glaze: beat cream cheese + powdered sugar + milk + vanilla bean. Drizzle on top.',
			]},
		],
	},

	'banana-bread': {
		title: 'Banana Bread',
		tag: '2 versions',
		color: 'color_blue',
		category: 'bread',
		sections: [
			{ heading: 'Version 1', type: 'ul', items: [
				'3 ripe bananas, mashed',
				'1/2 cup white sugar',
				'1 large egg',
				'1/3 cup oil',
				'1/3 cup milk',
				'1 cup all-purpose flour, sifted',
				'1 teaspoon baking soda',
			]},
			{ heading: 'Version 2 (4/29/2026)', type: 'ul', items: [
				'3 bananas',
				'1 stick butter',
				'1 tsp vanilla extract',
				'1 3/4 cup flour (215g) (fluffy)',
				'1 tsp kosher salt',
				'1/2 tsp cinnamon',
				'1 tsp baking soda',
				'3/4 cup brown sugar (packed)',
				'2 eggs',
			]},
		],
	},

	'salt-bread': {
		title: 'Salt Bread (Shio Pan)',
		tag: 'Makes 12 rolls',
		color: 'color_yellow',
		category: 'bread',
		link: { href: 'https://erinscozykitchen.com/recipe/salt-bread-shiopan/', text: "Erin's Cozy Kitchen recipe" },
		images: [
			'breads/img/salt_bread_left.heic',
			'breads/img/salt_bread_middle.heic',
			'breads/img/salt_bread_right.heic',
		],
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'400g bread flour',
				'120g cake flour',
				'365g ice water',
				'26g sugar',
				'10g salt',
				'30g non-fat milk powder',
				'40g cold unsalted butter (straight from fridge)',
				'7g instant dry yeast',
				'12 x 15g cold butter chunks (~1.5 sticks, cut into 8 per stick)',
				'Pretzel salt for topping',
			]},
			{ heading: 'Make the Dough', type: 'ol', items: [
				'In a stand mixer bowl combine bread flour, cake flour, sugar, salt, milk powder, yeast, and cold water.',
				'Mix with dough hook on low speed until a shaggy, cohesive dough forms.',
				'Add the fridge-cold unsalted butter and increase to medium speed.',
				"Knead 15-25 minutes until smooth, elastic, and passes the windowpane test. Dough will be very sticky at first — don't add flour.",
			]},
			{ heading: 'First Rise (Bulk Fermentation)', type: 'ol', items: [
				'Shape dough into a smooth ball by rolling it taut.',
				'Place in a bowl, cover, and let rise until doubled. (For cold proof, place in fridge before the first rise.)',
				"Test: poke with a floured finger — if the hole stays without springing back, it's ready. Don't overproof.",
				'While rising, cut cold butter into 12 even ~15g chunks. Keep refrigerated and only take out a few at a time while shaping.',
			]},
			{ heading: 'Portion and Bench Rest', type: 'ol', items: [
				'Degas the dough and divide into 80g portions.',
				"Roll each into a smooth ball. Start a 15-minute timer once you finish the first ball — by the time you've rolled all 12, the first will be ready.",
				"Cover all balls. You're relaxing gluten, not proofing further.",
			]},
			{ heading: 'Shape the Rolls', type: 'ol', items: [
				'Smear a very thin layer of softened butter on your work surface to prevent sticking without adding flour.',
				'Working one ball at a time, roll each into a long teardrop shape.',
				'Flatten the narrow bottom half with a rolling pin while gently pulling downward.',
				'Do the same for the upper half — flatten the wide end into a triangle base about the width of your butter stick.',
				'Place a cold butter chunk at the wide end and roll down toward the point, gently tugging for tension.',
			]},
			{ heading: 'Final Proof', type: 'ol', items: [
				'Place rolls on a non-stick baking tray (no parchment) with space between them.',
				'Cover and let rise until doubled — rolls should look puffed and feel light and airy.',
				'Poke test: indentation should spring back slowly and partially. Quick spring back = needs more time. No spring back = overproofed.',
			]},
			{ heading: 'Bake', type: 'ol', items: [
				'Preheat oven to 450°F (232°C). Time it so oven is hot right when rolls finish proofing (usually turn on ~40 min into the final proof).',
				'Spray rolls lightly with water and sprinkle pretzel salt on top.',
				'Just before baking, spray each roll generously (15-20 pumps) for added steam.',
				'Lower oven to 400°F (204°C) and bake 12-15 minutes, rotating halfway if needed.',
				'Enjoy hot — crisp buttery bottoms, fluffy soft insides.',
			]},
		],
	},

	// ==================== DESSERT ====================
	'italian-macarons': {
		title: 'Italian Macarons',
		tag: 'Scalable recipe',
		color: 'color_purple',
		category: 'dessert',
		intro: 'Italian method macarons using a sugar syrup meringue for stable, consistent shells every time.',
		scalable: true,
		sections: [
			{ heading: 'Instructions', type: 'ol', items: [
				'Combine egg whites with sifted powder sugar and almond flour to form the macaron paste.',
				'In a separate bowl, whip egg whites to soft peak, slowly adding the sugar from the bowl.',
				'In a pot, heat the water and syrup sugar up to 118°C (244.4°F).',
				'Pour sugar syrup into the meringue and whip to stiff peak.',
				'Combine meringue into egg white paste in 1/3 increments (macaronage).',
				'Pipe onto parchment-lined baking sheets.',
				'Let rest until the shells are matte and dry to the touch.',
				'Bake (preheated) at 275°F (149°C) for 10-16 minutes.',
				'Adjust time and temperature depending on how they work for your macaron.',
			]},
		],
	},

	'french-macarons': {
		title: 'Macarons (French Method)',
		color: 'color_purple',
		category: 'dessert',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'65g almond flour',
				'65g powdered sugar',
				'1/8 tsp cream of tartar',
				'45g sugar',
				'50g egg white',
				'Blue food coloring',
				'20g heavy whipping cream',
				'20g dark chocolate',
				'Cookie Crisp',
				'White and black royal icing',
			]},
			{ heading: 'Steps', type: 'ol', items: [
				'In a food processor blend almond flour and powdered sugar.',
				'Beat egg white + cream of tartar until soft peaks.',
				'Add sugar and beat 4-5 mins on high until very stiff peaks.',
				'Sift in half dry ingredients. Fold 7-10 times.',
				'Sift in other half. Fold 30-40 times until smooth when piped and tapped.',
				'Pipe and let sit 45 min to 1 hour.',
				'Bake at 300°F for 10-13 mins. Let cool.',
				'Pipe royal icing eyes.',
				'Microwave cream, add chocolate, mix smooth. Let set.',
				'Pipe ganache filling + cookie crisp on edge. Sandwich shells.',
				'Refrigerate 4 hours to 1 day. Enjoy!',
			]},
		],
	},

	'vanilla-sponge-cake': {
		title: 'Vanilla Sponge Cake',
		tag: 'By Catherine Zhang',
		color: 'color_pink',
		category: 'dessert',
		intro: 'Makes 2 six inch cakes — double for 2 eight inch cakes.',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'4 large egg yolks',
				'1 1/2 tbsp hot water',
				'2 tsp vanilla essence',
				'2 tbsp vegetable oil',
				'65g granulated sugar (I) — can reduce to 50g',
				'40g all purpose flour (1/3 cup)',
				'60g cornstarch (1/2 cup)',
				'1/4 tsp baking powder',
				'Pinch of salt',
				'4 egg whites',
				'65g granulated sugar (II) — can reduce to 50g',
			]},
			{ heading: 'Directions', type: 'ol', items: [
				'Preheat oven to 160°C (320°F). Line two 6-inch cake tins.',
				'Combine hot water and 65g sugar.',
				'Add egg yolks and vanilla, whisk until doubled and fluffy.',
				'Mix in oil.',
				'Sift in flour, baking powder, cornstarch. Gently fold.',
				'Beat egg whites until foamy, gradually add remaining 65g sugar until stiff peaks.',
				'Fold egg whites into yolk mixture.',
				'Bake about 25 minutes until cakes spring back when pressed.',
			]},
		],
	},

	'sponge-cake': {
		title: 'Sponge Cake',
		tag: 'With frosting options',
		color: 'color_pink',
		category: 'dessert',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'60g milk (1/4 cup)',
				'60g oil (1/4 cup)',
				'6 egg yolks',
				'120g cake flour (1 cup)',
				'1/2 tsp salt',
				'1 1/2 Tbsp honey (optional)',
				'6 egg whites',
				'1/2 tsp cream of tartar',
				'100g sugar (1/2 cup)',
			]},
			{ heading: 'Instructions', type: 'ol', items: [
				'Separate eggs. Add oil + warm milk to yolks, sift in flour, add honey.',
				'Beat whites with cream of tartar to soft peaks, add sugar to semi-stiff peaks.',
				'Fold whites into yolk mixture.',
				'Pour into lined 8" pan. Bake at 325°F for 20-25 mins.',
			]},
			{ heading: 'Frosting Option 1', type: 'ul', items: [
				'1 cup cold whipping cream, 1.5 tbsp icing sugar, 1/2 tsp vanilla, 1 tsp gelatin, 2 tbsp water',
			]},
			{ heading: 'Frosting Option 2', type: 'ul', items: [
				'2 cups cold whipping cream, 3 tbsp icing sugar, 1/2 tsp vanilla, 2 tsp agar agar, 4 tbsp water',
			]},
		],
	},

	'chocolate-cake': {
		title: 'Chocolate Cake',
		tag: 'Full + mini cupcake sizes',
		color: 'color_brown',
		category: 'dessert',
		sections: [
			{ heading: 'Full Size', type: 'ul', items: [
				'1 1/2 cups flour',
				'1 cup Dutch cocoa powder',
				'1 tsp salt, 1 1/2 tsp baking soda, 1/2 tsp baking powder',
				'1 1/2 cups milk',
				'1 tbsp vanilla, 1 tbsp espresso powder',
				'1 cup butter softened, 1 cup sugar',
				'3 eggs, 1/2 cup mayonnaise',
			]},
			{ heading: 'Mini Cupcakes (~18)', type: 'ul', items: [
				'1/2 cup flour, 1/3 cup cocoa',
				'1/3 tsp salt, 1/2 tsp baking soda, 1/4 tsp baking powder',
				'1/2 cup milk, 1 tsp vanilla, 1 tsp espresso powder',
				'1/3 cup butter, 1/3 cup sugar',
				'1 egg, 2 Tbsp + 2 tsp mayonnaise',
			]},
			{ heading: 'Directions', type: 'ol', items: [
				'Sift flour, cocoa, salt, baking powder, baking soda.',
				'Combine milk, vanilla, espresso powder.',
				'Cream butter and sugar 5 minutes. Add eggs one at a time. Mix in mayo.',
				'Alternate: 1/3 dry, 1/2 wet, 1/3 dry, rest wet, rest dry.',
				'Bake at 325°F for 20-30 minutes.',
			]},
		],
	},

	'red-velvet': {
		title: 'Red Velvet',
		color: 'color_pink',
		category: 'dessert',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'3/4 cup sour cream',
				'1/2 cup milk',
				'2 tsp vanilla extract',
				'2/3 cup cocoa powder',
				'1 3/4 cups flour',
				'3/4 cup sugar',
				'1 tsp baking soda',
				'1 1/2 tsp baking powder',
				'3/4 tsp salt',
			]},
		],
	},

	'roll-cake': {
		title: 'Roll Cake',
		color: 'color_purple',
		category: 'dessert',
		sections: [
			{ heading: 'Cake', type: 'ul', items: [
				'3 eggs, 30g milk, 30g oil',
				'60g cake flour, 50g sugar',
				'1 Tbsp vanilla',
			]},
			{ heading: 'Frosting', type: 'ul', items: [
				'1.5 cups heavy whipping cream',
				'4 tbsp cream cheese',
				'1 tbsp sour cream',
				'1 tbsp vanilla',
				'Strawberries',
			]},
		],
	},

	'sugar-cookies': {
		title: 'Sugar Cookies',
		tag: '+ Buttercream',
		color: 'color_blue',
		category: 'dessert',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'3/4 cup almond flour',
				'1 cup sugar, 3 cups AP flour',
				'1 tsp baking powder, 1/2 tsp nutmeg, 1/8 salt',
				'2 sticks butter (softened)',
				'2 eggs',
				'1 1/2 tsp vanilla, 1/2 tsp almond extract',
			]},
			{ heading: 'Steps', type: 'ol', items: [
				'Whisk flour, baking powder, nutmeg, salt.',
				'Cream butter and sugar 3-5 minutes.',
				'Add eggs one at a time, then extracts.',
				'Slowly add flour and beat.',
				'Chill at least 1 hour.',
				'Roll out and cut shapes.',
				'Bake at 350°F for 12-13 minutes.',
			]},
			{ heading: 'Buttercream', type: 'ul', items: [
				'1/2 cup butter, 1 cup sugar, 1-2 Tbsp milk',
			]},
		],
	},

	'mochi-donuts': {
		title: 'Mochi Donuts',
		tag: 'Makes 3 donuts',
		color: 'color_yellow',
		category: 'dessert',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'86g tofu',
				'36g sweet rice flour',
				'16g AP flour',
				'16g corn starch',
				'2g baking powder',
				'16g sugar',
			]},
			{ heading: 'Directions', type: 'ol', items: [
				'Combine all ingredients.',
				'Weigh dough, divide by 3 then 6. Each ball = 9 grams.',
				'Heat oil to 320°F. Fry each side 1.5 minutes.',
			]},
		],
	},

	'fried-tteok-dango': {
		title: 'Fried Tteok / Dango',
		color: 'color_blue',
		category: 'dessert',
		sections: [
			{ heading: 'Fried Tteok', type: 'ul', items: [
				'33g sugar (2 Tbsp), pinch salt',
				'200g glutinous rice flour (3/4 cup + 1 Tbsp)',
				'230g milk',
			]},
			{ heading: 'Dango', type: 'ul', items: [
				'1 cup sweet rice flour',
				'3/4 cup tofu',
				'4-8 tbsp sugar',
			]},
		],
	},

	'blueberry-muffins': {
		title: 'Blueberry Muffins',
		tag: '~12 cupcakes',
		color: 'color_green',
		category: 'dessert',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'2 1/2 cups flour, 1 tsp salt, 2 tsp baking powder',
				'1/4 cup butter, 1/4 cup oil',
				'1 cup milk, 1/4 + 2 Tbsp sugar',
				'1/4 cup sour cream, 2 tsp vanilla',
				'Lemon zest, 2 eggs, 2 tsp lemon juice',
				'Blueberries (some covered in flour)',
			]},
			{ heading: 'Directions', type: 'ol', items: [
				'Combine dry. Combine wet. Mix both.',
				'Fold in blueberries.',
				'Bake at 400°F for 20-25 mins.',
			]},
		],
	},

	'chocolate-muffins': {
		title: 'Chocolate Muffins',
		tag: '~12 cupcakes',
		color: 'color_brown',
		category: 'dessert',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'2 eggs, 3/4 cup sour cream, 1/2 cup milk',
				'2 tsp vanilla, 2/3 cup cocoa powder',
				'1 3/4 cups flour, 3/4 cup sugar',
				'1 tsp baking soda, 1 1/2 tsp baking powder, 3/4 tsp salt',
				'1 1/2 cups chocolate chips, 1/2 cup oil',
			]},
			{ heading: 'Directions', type: 'ol', items: [
				'Combine dry. Combine wet. Mix both.',
				'Fold in chocolate chips.',
				'Bake at 400°F for 20-25 mins.',
			]},
		],
	},

	'no-bake-cheesecake': {
		title: 'No Bake Cheesecake',
		color: 'color_orange',
		category: 'dessert',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'1 1/4 cups heavy cream',
				'3 (8oz) cream cheese blocks',
				'1/2 cup sugar',
				'2 Tbsp powdered sugar',
				'1/4 cup sour cream',
				'2 tsp lemon juice',
				'1 tsp vanilla extract',
			]},
		],
	},

	'mooncakes': {
		title: 'Mooncakes',
		tag: '~23 mooncakes',
		color: 'color_green',
		category: 'dessert',
		sections: [
			{ heading: 'Snow Skin (Full)', type: 'ul', items: [
				'75g glutinous rice flour, 75g rice flour',
				'50g wheat starch, 85g icing sugar',
				'280g milk + reserved purple liquid',
				'45g sweetened condensed milk, 45g oil',
			]},
			{ heading: 'Snow Skin (Half ~13)', type: 'ul', items: [
				'40g glutinous rice flour, 40g rice flour',
				'20g wheat starch, 45g icing sugar',
				'135g milk, 20g condensed milk, 30g oil',
			]},
			{ heading: 'Filling', type: 'ul', items: [
				'300g peeled purple sweet potatoes, 5g beet',
				'145g water (add when blending)',
				'100g condensed milk, 45g coconut oil',
				'90g heavy cream, 40g wheat starch, pinch salt',
			]},
		],
	},

	'melo-melo': {
		title: 'Melo Melo',
		color: 'color_orange',
		category: 'dessert',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'4 oz milk, coconut milk, coconut water',
				'1/2 tsp agar agar',
				'1.5 oz condensed milk',
			]},
		],
	},

	// ==================== SAVORY — KOREAN ====================
	'miso-butter-kimchi-udon': {
		title: 'Miso Butter Kimchi Udon',
		tag: 'By @eatwithhendri',
		color: 'color_orange',
		category: 'savory',
		subcategory: 'Korean',
		link: { href: 'https://www.instagram.com/reel/CxDD1MePJLd/', text: 'Watch the reel' },
		images: ['savory/img/kimchi_butter_udon.jpeg'],
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'1/2 tsp butter, 1 tsp garlic',
				'1 pack udon',
				'1 tbsp kimchi, 1 tsp miso paste',
				'3 tbsp milk or heavy cream',
				'Mushrooms, green onions, sesame seeds',
			]},
		],
	},

	'soybean-sprout-soup': {
		title: 'Soybean Sprout Soup',
		color: 'color_yellow',
		category: 'savory',
		subcategory: 'Korean',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'1 lb bean sprouts, 8 cups water',
				'Anchovy packet, 6 green onions',
				'1 T gochugaru, 1 T fish sauce, 1 T soy sauce',
				'Salt / chicken bouillon',
			]},
		],
	},

	'sundubu-sauce': {
		title: 'Sundubu (Sauce)',
		color: 'color_orange',
		category: 'savory',
		subcategory: 'Korean',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'1/2 cup gochugaru',
				'1/2 Tbsp sugar, 1/2 Tbsp mirin',
				'2 Tbsp soy sauce',
				'1 Tbsp oyster sauce, 1 Tbsp fish sauce',
				'1 Tbsp sesame oil',
			]},
		],
	},

	'korean-chicken-noodle-soup': {
		title: 'Korean Chicken Noodle Soup',
		color: 'color_green',
		category: 'savory',
		subcategory: 'Korean',
		images: ['savory/img/korean_chicken_noodle_soup.jpeg'],
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'120g green onions, 200g Korean radish',
				'3 shiitake mushrooms, 1 green chili',
				'2 chicken thighs + 1 breast (~300g)',
				'5 cups water, 120g mung bean sprouts',
				'2 servings kalguksu noodles (300g)',
			]},
			{ heading: 'Seasoning Paste', type: 'ul', items: [
				'3 tbsp gochugaru, 1 tbsp soy sauce, 1 tbsp fish sauce',
				'1.5 tbsp chicken bouillon, 1 tsp garlic',
				'1 tbsp sesame oil, 1/4 tsp black pepper',
			]},
			{ heading: 'Directions', type: 'ol', items: [
				'Cook chicken. Add green onion & radish.',
				'Add seasoning paste, cook 2 min on med-low.',
				'Add water, veggies, then noodles.',
			]},
		],
	},

	'jjamppong': {
		title: 'Jjamppong',
		color: 'color_pink',
		category: 'savory',
		subcategory: 'Korean',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'2 Tbsp gochugaru, 1/2 Tbsp soy sauce',
				'2 Tbsp mirin, 1 Tbsp oyster sauce',
				'1.5 Tbsp chicken bouillon',
				'Salt, pepper, 4 cups water',
			]},
		],
	},

	'steamed-eggs': {
		title: 'Steamed Eggs',
		color: 'color_yellow',
		category: 'savory',
		subcategory: 'Korean',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'5 eggs, 1 1/4 cup water',
				'2 tsp fish sauce',
				'2 green onions, sesame oil',
			]},
		],
	},

	'marinated-eggs': {
		title: 'Marinated Eggs',
		color: 'color_green',
		category: 'savory',
		subcategory: 'Korean',
		sections: [
			{ heading: 'Eggs', type: 'ul', items: [
				'6-8 large eggs, 1 tbsp salt + white vinegar for boiling',
			]},
			{ heading: 'Marinade', type: 'ul', items: [
				'1/2 cup soy sauce, 1/2 cup water',
				'1/4 cup honey corn syrup',
				'1/4 onion, 1 green onion, 3 garlic cloves',
				'2 chili peppers, 1 tbsp sesame seeds',
			]},
		],
	},

	'tteokguk': {
		title: 'Tteokguk',
		tag: 'Korean Rice Cake Soup',
		color: 'color_blue',
		category: 'savory',
		subcategory: 'Korean',
		sections: [
			{ heading: 'Beef Broth', type: 'ul', items: [
				'1/2 lb beef brisket, 1/2 onion, 5-6 garlic cloves',
				'3 scallion whites, 2 Tbsp soup soy sauce',
			]},
			{ heading: 'Rice Cakes + Garnish', type: 'ul', items: [
				'4 cups sliced garae tteok (soak 20 min)',
				'Shredded beef, egg jidan, scallion, gim',
			]},
			{ heading: 'Directions', type: 'ol', items: [
				'Boil meat + aromatics in 14 cups water ~1 hour. Season broth.',
				'Shred beef, season with garlic + sesame oil.',
				'Cook egg garnish as thin layers.',
				'Boil rice cakes in broth 5-8 minutes. Garnish and serve.',
			]},
		],
	},

	'korean-spicy-noodle-soup': {
		title: 'Korean Spicy Noodle Soup',
		color: 'color_green',
		category: 'savory',
		subcategory: 'Korean',
		sections: [
			{ heading: 'Anchovy Stock', type: 'ul', items: [
				'14 cups water, 4 green onions, 1 onion',
				'Anchovy packet, kelp, 2 1/2 tsp salt',
			]},
			{ heading: 'Soup Paste', type: 'ul', items: [
				'2 tbsp soy sauce, 2 tbsp anchovy broth',
				'1 tbsp gochugaru, 2 green onions, sesame seeds',
			]},
		],
	},

	'marinated-cucumbers': {
		title: 'Marinated Cucumbers',
		tag: 'Serves 4',
		color: 'color_yellow',
		category: 'savory',
		subcategory: 'Korean',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'1 English cucumber, 1/4 cup sliced onion',
				'1 green onion, 2 garlic cloves',
				'2 Tbsp soy sauce, 2 tsp gochugaru',
				'2 tsp sesame oil, 2 tsp sesame seeds',
				'1 tsp sugar (optional)',
			]},
		],
	},

	'soondubu': {
		title: 'Soondubu',
		color: 'color_orange',
		category: 'savory',
		subcategory: 'Korean',
		images: ['savory/img/sundubu_bok_choy.jpeg'],
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'1/4 lb pork, 1 tsp garlic',
				'1 Tbsp gochugaru, 1 tsp soy sauce, 1 tsp sesame oil',
				'3 green onions, 1 soon tofu',
				'1/4 cup shiitake, 1/4 onion',
			]},
		],
	},

	'udon-soup': {
		title: 'Udon Soup',
		color: 'color_orange',
		category: 'savory',
		subcategory: 'Korean',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'1 tbsp garlic, 3 tbsp gochujang',
				'1 tbsp soybean paste, 1 tbsp gochugaru',
			]},
		],
	},

	'galbi': {
		title: 'Galbi',
		tag: 'Marinate 6hrs+',
		color: 'color_brown',
		category: 'savory',
		subcategory: 'Korean',
		images: [
			'savory/img/galbi_tang.jpeg',
			'savory/img/galbi_tom_yum_bok_choy.jpeg',
			'savory/img/steamed_fish_galbi_tang_bok_choy.jpeg',
		],
		sections: [
			{ heading: 'Marinade', type: 'ul', items: [
				'10 garlic cloves, 1 tbsp ginger',
				'1/2 onion, 1 whole Korean pear',
				'1/2 cup brown sugar, 1/2 cup soy sauce',
				'1 tbsp sesame oil, 1/2 tbsp black pepper',
			]},
		],
	},

	// ==================== SAVORY — CHINESE ====================
	'congee': {
		title: 'Congee',
		tag: 'Rice:Water 1:7',
		color: 'color_green',
		category: 'savory',
		subcategory: 'Chinese',
		images: ['savory/img/steamed_fish_and_Congee.jpeg'],
		sections: [
			{ heading: 'Chicken Seasoning', type: 'ul', items: [
				'1 TBSP oyster sauce',
				'2 TSP cornstarch',
				'1 TSP chicken bouillon',
				'2 TBSP water',
			]},
		],
	},

	'tomato-eggs': {
		title: 'Tomato Eggs',
		color: 'color_pink',
		category: 'savory',
		subcategory: 'Chinese',
		images: [
			'savory/img/tomato_eggs_curry_broccoli.jpeg',
			'savory/img/tomato_egg_noodles_with_bok_choy.jpeg',
			'savory/img/tomato_egg_korean_somen.jpeg',
			'savory/img/steamed_fish_tomato_egg_pickled_fish_soup.jpeg',
		],
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'4 tomatoes, 4 eggs, lots of green onions',
				'3/4 tsp salt, 1/4 white pepper',
				'1/2 sesame oil, 1 tsp wine',
				'1 tsp ketchup, 2 tsp sugar',
				"** Don't add black pepper — it tastes weird",
			]},
		],
	},

	'pork-chive-dumplings': {
		title: 'Pork Chive Dumplings',
		tag: 'Makes 50',
		color: 'color_blue',
		category: 'savory',
		subcategory: 'Chinese',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'1 lb chives, 2 tbsp sesame oil',
				'1.5 lb ground pork',
				'2 tbsp oyster sauce, 2 tbsp soy sauce',
				'1 tbsp ginger, 1 tsp salt',
				'1 tsp chicken powder, 1 tsp white pepper',
				'50 dumpling wrappers',
			]},
		],
	},

	'chili-oil-dumpling-noodle-soup': {
		title: 'Chili Oil Dumpling Noodle Soup',
		color: 'color_blue',
		category: 'savory',
		subcategory: 'Chinese',
		images: ['savory/img/chili_oil_with_egg_bok_choy.jpeg'],
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'4-6 dumplings, 2 cloves garlic, 1 green onion',
				'1 tbsp gochugaru, 1 tbsp white pepper',
				'1/2 tbsp sugar, 1/2 tsp salt',
				'2 tbsp oil, 2 tbsp soy sauce',
				'1.5 tbsp rice vinegar',
				'1.5 cups water/chicken broth, noodles',
			]},
		],
	},

	'tan-tan-ramen': {
		title: 'Tan Tan Ramen',
		color: 'color_orange',
		category: 'savory',
		subcategory: 'Chinese',
		sections: [
			{ heading: 'Pork', type: 'ul', items: [
				'8 oz ground pork, 1 tbsp mirin, 1 tbsp ginger',
				'1 tbsp oil, 1 tbsp doubanjiang, 2 cloves garlic',
			]},
			{ heading: 'Soup Base', type: 'ul', items: [
				'2 tbsp soy sauce, 2 tbsp sesame paste',
				'1 tsp rice vinegar, 1/2 tsp sugar, 1 tbsp chili oil',
				'2 cups chicken stock, 2 cups oat milk',
			]},
			{ heading: 'Instructions', type: 'ol', items: [
				'Marinate pork with mirin + ginger 15 min.',
				'Whisk tare (soy, sesame paste, vinegar, sugar, chili oil).',
				"Simmer stock + milk (don't boil).",
				'Brown pork crispy, add bean sauce + garlic.',
				'Blanch greens, cook noodles.',
				'Assemble: tare → broth → noodles → toppings.',
			]},
		],
	},

	'lotus-root-stir-fry': {
		title: 'Lotus Root Stir Fry',
		color: 'color_green',
		category: 'savory',
		subcategory: 'Chinese',
		images: ['savory/img/stir_fry_potatoes_and_lotus_root_pour_over_chicken.jpeg'],
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'3 lotus roots, wood ear, snap peas, carrots',
			]},
			{ heading: 'Sauce', type: 'ul', items: [
				'2 Tbsp soy sauce, 1 tbsp sesame oil',
				'1 Tbsp cooking wine, 1 tbsp rice vinegar',
				'1 tsp sugar, chicken bouillon',
				'1/4 cup water, 1/2 tsp corn starch',
			]},
			{ heading: 'Steps', type: 'ol', items: [
				'Blanch lotus root 2-3 min + 1 Tbsp vinegar.',
				'Fry garlic, add lotus root, add sauce.',
			]},
		],
	},

	'stir-fry-potato': {
		title: 'Stir Fry Potato',
		color: 'color_yellow',
		category: 'savory',
		subcategory: 'Chinese',
		images: ['savory/img/stir_fry_potatoes_and_lotus_root_pour_over_chicken.jpeg'],
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'2 potatoes, 1 carrot, garlic',
				'Soy sauce, oyster sauce, sugar',
				'No ginger',
			]},
			{ heading: 'Steps', type: 'ol', items: [
				'Slice potato. Soak 30 min (change water every 10). Rinse.',
				'Fry scallions + garlic. Add potato. Add sauce + sugar.',
			]},
		],
	},

	'ginger-scallion-chicken': {
		title: 'Ginger Scallion Chicken',
		tag: 'Pour over style',
		color: 'color_blue',
		category: 'savory',
		subcategory: 'Chinese',
		images: [
			'savory/img/ginger_scallion_chicken.jpeg',
			'savory/img/stir_fry_potatoes_and_lotus_root_pour_over_chicken.jpeg',
		],
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'Chicken thighs/leg with skin, jujubes',
				'1 whole ginger, scallions',
				'Chicken bouillon, salt, 1/4 tsp sugar',
				'1 tbsp soy sauce, 2-4 tbsp oil',
			]},
			{ heading: 'Steps', type: 'ol', items: [
				'Steam legs 16 min with ginger + jujubes.',
				'Shred chicken. Fry oil + scallions.',
				'Pour over minced ginger + scallions.',
				'Add soy sauce, sugar, salt. Use the broth.',
			]},
		],
	},

	'shredded-chicken-salad': {
		title: 'Shredded Chicken Salad',
		color: 'color_green',
		category: 'savory',
		subcategory: 'Chinese',
		images: ['savory/img/beef_cabbage_enoki_rolls_shredded_costco_chicken_salad.jpeg'],
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'Chicken, red onion, carrot, cucumber',
			]},
			{ heading: 'Sauce', type: 'ul', items: [
				'1/2 tsp salt, 1/2 tsp sugar',
				'1 Tbsp soy sauce, 1 Tbsp chili oil',
				'1/2 tsp sesame oil',
			]},
		],
	},

	'dried-vegetable-soup': {
		title: 'Dried Vegetable Soup',
		color: 'color_yellow',
		category: 'savory',
		subcategory: 'Chinese',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'Dried vegetables, almonds, honey dates',
				'Carrots, pork spare ribs',
				'Chicken bouillon, Xiaoxing wine',
			]},
			{ heading: 'Steps', type: 'ol', items: [
				'Soak dried vegetables 3+ hours.',
				'Blanch ribs in water + wine.',
				'In another pot add everything else.',
			]},
		],
	},

	'watercress-soup': {
		title: 'Watercress Soup',
		color: 'color_green',
		category: 'savory',
		subcategory: 'Chinese',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'4 bunches of watercress',
				'1 carrot',
				'5 North almonds',
				'10 South almonds',
				'2 honey dates',
				'Pork short ribs',
				'Lots of water',
			]},
			{ heading: 'Instructions', type: 'ol', items: [
				'Blanch short ribs, then drain and wash.',
				'Boil everything in a pot.',
				'Season to liking.',
			]},
		],
	},

	// ==================== SAVORY — JAPANESE ====================
	'garlic-shrimp-noodles': {
		title: 'Garlic Shrimp Noodles',
		color: 'color_orange',
		category: 'savory',
		subcategory: 'Japanese',
		sections: [
			{ heading: 'Sauce', type: 'ul', items: [
				'1.5 T spicy pepper, 1 T sugar',
				'2 T soy sauce, 2 T oyster sauce, 2 T mirin',
				'1 tsp gochugaru, MSG, black pepper',
				'Green onion, garlic',
			]},
		],
	},

	'beef-enoki-rolls': {
		title: 'Beef Enoki Rolls',
		color: 'color_orange',
		category: 'savory',
		subcategory: 'Japanese',
		images: ['savory/img/beef_cabbage_enoki_rolls_shredded_costco_chicken_salad.jpeg'],
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'Sliced beef, napa cabbage',
			]},
			{ heading: 'Sauce', type: 'ul', items: [
				'2/3 cup water, 1 Tbsp dashi',
				'2 tsp mirin, 2 Tbsp soy sauce',
				'1-2 Tbsp sugar, 1 tsp garlic',
			]},
		],
	},

	'beef-sukiyaki': {
		title: 'Beef Sukiyaki',
		color: 'color_blue',
		category: 'savory',
		subcategory: 'Japanese',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'1/4 cup mirin, 3 Tbsp soy sauce',
				'1 Tbsp sugar, 1/4 tsp dashi, 1/2 cup water',
				'Firm tofu, enoki, shiitake',
				'Udon, napa cabbage',
			]},
		],
	},

	'spam-musubi': {
		title: 'Spam Musubi',
		tag: 'Makes 6',
		color: 'color_pink',
		category: 'savory',
		subcategory: 'Japanese',
		images: [
			'savory/img/spam_musubi_pyramid.jpeg',
			'savory/img/spam_musubi_stacked.jpeg',
		],
		sections: [
			{ heading: 'Teriyaki Sauce', type: 'ul', items: [
				'3 Tbsp brown sugar, 3 Tbsp soy sauce',
				'2 Tbsp mirin, 1 tsp sesame oil',
			]},
			{ heading: 'Rice', type: 'ul', items: [
				'1 cup rice, 1 3/4 cups water, rice vinegar, seaweed',
			]},
			{ heading: 'Directions', type: 'ol', items: [
				'Fry spam, add sauce. Mold rice. Add fillings. Wrap.',
			]},
		],
	},

	// ==================== SAVORY — HONG KONG ====================
	'hk-borscht-soup': {
		title: 'HK Borscht Soup',
		color: 'color_pink',
		category: 'savory',
		subcategory: 'Hong Kong',
		images: ['savory/img/hong_kong_borscht_soup.jpeg'],
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'3 carrots, 3 celery, 1 onion, 1 cabbage',
				'3 potatoes, 3 beefsteak tomatoes',
				'1 Tbsp ketchup, 3 bay leaves',
				'Chicken bouillon, beef/any meat',
				'3 slices ginger, garlic',
			]},
			{ heading: 'Directions', type: 'ol', items: [
				'Stir fry meat. Remove. Stir fry veggies.',
				'Add tomato, ketchup, water, beef.',
			]},
		],
	},

	'abc-soup': {
		title: 'ABC Soup',
		color: 'color_green',
		category: 'savory',
		subcategory: 'Hong Kong',
		images: [
			'savory/img/pork_carrot_mushroom_rolls_with_abc_soup.jpeg',
			'savory/img/steamed_fish_abc_soup_korean_cucumber_banchan.jpeg',
		],
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'Corn, 5 carrots, 3 potatoes',
				'2 beefsteak tomatoes, 1 onion',
				'5 drumstick chicken',
				'Salt, 1 tsp sugar, black + white pepper',
			]},
		],
	},

	// ==================== SAVORY — VIETNAMESE ====================
	'fish-sauce-spring-rolls': {
		title: 'Fish Sauce (Spring Rolls)',
		color: 'color_green',
		category: 'savory',
		subcategory: 'Vietnamese',
		images: ['savory/img/spring_rolls.jpeg'],
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'2 Tbsp fish sauce, 2 tsp honey',
				'2 Tbsp lemon juice',
				'1 garlic clove, 1 serrano pepper',
			]},
		],
	},

	// ==================== SAVORY — OTHER ====================
	'creamy-tomato-shrimp-pasta': {
		title: 'Creamy Tomato Shrimp Pasta',
		tag: '3 servings',
		color: 'color_pink',
		category: 'savory',
		subcategory: 'Other',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'3 tbsp butter, 2 lb shrimp',
				'1 cup tomato, 1/2 cup green onion',
				'2 tbsp chili powder, 1/2 cup parsley',
				'2 tsp salt, 2 tsp pepper',
				'1 cup milk, 1 1/4 cups rotini pasta',
			]},
		],
	},

	'shrimp-ceviche': {
		title: 'Shrimp Ceviche',
		color: 'color_orange',
		category: 'savory',
		subcategory: 'Other',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'1 lb raw medium shrimp',
				'1/4 cup lemon juice, 1/4 cup lime juice',
				'2 tomatoes, 1/2 red onion, 1 jalapeño',
				'1/2 cup cilantro, 1/2 tsp salt',
				'1 avocado, tortilla chips',
			]},
		],
	},

	'pesto-sauce': {
		title: 'Pesto Sauce',
		color: 'color_green',
		category: 'savory',
		subcategory: 'Other',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'1/4 cup pine nuts',
				'1/2 cup olive oil',
				'2 cups basil',
			]},
		],
	},

	'homemade-pasta': {
		title: 'Homemade Pasta',
		color: 'color_yellow',
		category: 'savory',
		subcategory: 'Other',
		sections: [
			{ heading: 'Ingredients', type: 'ul', items: [
				'1 egg, 1 cup flour',
				'A little olive oil, some salt',
			]},
		],
	},

};

// Render order arrays preserve the original display ordering on recipes.html.
const RECIPE_ORDER = {
	bread: [
		'cream-cheese-milk-bun',
		'coffee-buns',
		'pizza-dough-garlic-knots',
		'cinnamon-rolls',
		'banana-bread',
		'salt-bread',
	],
	dessert: [
		'italian-macarons',
		'french-macarons',
		'vanilla-sponge-cake',
		'sponge-cake',
		'chocolate-cake',
		'red-velvet',
		'roll-cake',
		'sugar-cookies',
		'mochi-donuts',
		'fried-tteok-dango',
		'blueberry-muffins',
		'chocolate-muffins',
		'no-bake-cheesecake',
		'mooncakes',
		'melo-melo',
	],
	savory: {
		Korean: [
			'miso-butter-kimchi-udon',
			'soybean-sprout-soup',
			'sundubu-sauce',
			'korean-chicken-noodle-soup',
			'jjamppong',
			'steamed-eggs',
			'marinated-eggs',
			'tteokguk',
			'korean-spicy-noodle-soup',
			'marinated-cucumbers',
			'soondubu',
			'udon-soup',
			'galbi',
		],
		Chinese: [
			'congee',
			'tomato-eggs',
			'pork-chive-dumplings',
			'chili-oil-dumpling-noodle-soup',
			'tan-tan-ramen',
			'lotus-root-stir-fry',
			'stir-fry-potato',
			'ginger-scallion-chicken',
			'shredded-chicken-salad',
			'dried-vegetable-soup',
			'watercress-soup',
		],
		Japanese: [
			'garlic-shrimp-noodles',
			'beef-enoki-rolls',
			'beef-sukiyaki',
			'spam-musubi',
		],
		'Hong Kong': [
			'hk-borscht-soup',
			'abc-soup',
		],
		Vietnamese: [
			'fish-sauce-spring-rolls',
		],
		Other: [
			'creamy-tomato-shrimp-pasta',
			'shrimp-ceviche',
			'pesto-sauce',
			'homemade-pasta',
		],
	},
};