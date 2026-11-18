// Content for dedicated specialty-trip landing pages.
// English-only for now — structured so other languages can be added later.

export type Topic = {
	slug: string;
	ogImage: string;
	seo: { title: string; description: string };
	hero: {
		image: string;
		alt: string;
		eyebrow: string;
		heading: string;
		lede: string;
	};
	intro: {
		eyebrow: string;
		heading: string;
		paragraphs: string[];
		image: string;
		imageAlt: string;
	};
	highlightsEyebrow: string;
	highlightsHeading: string;
	highlights: { title: string; desc: string }[];
	itinerary: {
		eyebrow: string;
		heading: string;
		subtext: string;
		days: { label: string; title: string; desc: string }[];
	};
	packagesEyebrow: string;
	packagesHeading: string;
	packageTitles: string[];
	faq: { eyebrow: string; heading: string; items: { q: string; a: string }[] };
	cta: { eyebrow: string; heading: string; text: string };
};

export const greatMigration: Topic = {
	slug: '/great-migration-safari/',
	ogImage:
		'https://images.unsplash.com/photo-1763675848759-9cdf601bfbc4?auto=format&fit=crop&w=1200&h=630&q=70',
	seo: {
		title: 'Great Migration Safari Tanzania | Serengeti Crossings',
		description:
			'Witness the Great Migration on a private Serengeti safari — river crossings, big cats and endless plains. Handcrafted itineraries with expert guides.',
	},
	hero: {
		image:
			'https://images.unsplash.com/photo-1763675848759-9cdf601bfbc4?auto=format&fit=crop&w=1600&q=75',
		alt: 'Wildebeest grazing on the Serengeti plains, Tanzania',
		eyebrow: 'Serengeti · Northern Tanzania',
		heading: 'Follow the Great Migration',
		lede: 'Each year around two million wildebeest and zebra sweep across the Serengeti in search of greener grass — the greatest wildlife spectacle on Earth. See it with a private guide who knows the herds, the rivers and the timing.',
	},
	intro: {
		eyebrow: 'Why the Migration',
		heading: 'The Greatest Wildlife Show on Earth',
		paragraphs: [
			'From roughly July to October, the Great Migration crosses the Mara River in the northern Serengeti. Thousands of wildebeest plunge into crocodile-filled water while big cats wait on the banks — an experience no photograph does justice.',
			'Our guides track the herds daily and plan your route around the latest crossing activity, so you are in the right place at the right time instead of following a fixed script. Whether you want front-row crossing drama or quieter calving-season encounters in the south, we build the trip around nature’s schedule.',
		],
		image:
			'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=75',
		imageAlt: 'Zebras on the savanna in the Serengeti, Tanzania',
	},
	highlightsEyebrow: 'What Makes It Special',
	highlightsHeading: 'Built Around the Herds',
	highlights: [
		{
			title: 'River Crossings',
			desc: 'July to October the herds gather at the Mara River — our guides monitor crossing activity daily and plan around it.',
		},
		{
			title: 'The Right Season',
			desc: 'We match your travel dates to migration patterns: northern crossings in dry season, calving in the southern plains in February and March.',
		},
		{
			title: 'Big Cats on the Plains',
			desc: 'Lion, cheetah and leopard sightings peak as predators follow the herds across the endless plains.',
		},
		{
			title: 'Front-Row Camps',
			desc: 'Mobile camps and lodges positioned along the herds’ route, so you wake up where the action is.',
		},
		{
			title: 'Private Guide & Jeep',
			desc: 'Your own vehicle and guide — flexible days, no strangers in the back seat.',
		},
		{
			title: 'Photographer Friendly',
			desc: 'Extended game drives timed for morning and evening light, with space for your gear.',
		},
	],
	itinerary: {
		eyebrow: 'Sample Route',
		heading: 'Seven Days on the Migration Trail',
		subtext: 'A starting point — every itinerary is adjusted to the season and the herds’ movement.',
		days: [
			{
				label: 'Day 1',
				title: 'Arrive in Arusha',
				desc: 'Welcome at Kilimanjaro Airport, trip briefing and a relaxed overnight at your lodge.',
			},
			{
				label: 'Day 2',
				title: 'Tarangire National Park',
				desc: 'Giant baobabs and large elephant herds — a gentle introduction to the northern circuit.',
			},
			{
				label: 'Day 3',
				title: 'Ngorongoro Crater',
				desc: 'Descend into the world’s largest intact volcanic caldera for a day among dense wildlife.',
			},
			{
				label: 'Day 4',
				title: 'Into the Serengeti',
				desc: 'Cross the plains toward the central Serengeti, tracking herds and predators along the way.',
			},
			{
				label: 'Day 5',
				title: 'Migration Day — Mara River',
				desc: 'A full day in the north with the herds. Crossings are unpredictable, so we stay flexible and follow the activity.',
			},
			{
				label: 'Day 6',
				title: 'Northern Serengeti',
				desc: 'Another day in the heart of the migration, with extended game drives and time for photography.',
			},
			{
				label: 'Day 7',
				title: 'Final Drive & Departure',
				desc: 'A last morning game drive before flying back from the Serengeti airstrip or returning to Arusha.',
			},
		],
	},
	packagesEyebrow: 'Ready-Made Starting Points',
	packagesHeading: 'Migration-Friendly Safaris',
	packageTitles: ['Tarangire, Ngorongoro & Serengeti', 'All Northern National Parks'],
	faq: {
		eyebrow: 'Good to Know',
		heading: 'Great Migration Questions',
		items: [
			{
				q: 'When is the best time to see the Great Migration?',
				a: 'For the famous river crossings, plan for July to October in the northern Serengeti. The herds are in the southern plains for calving season around February and March. We recommend dates based on what you most want to see.',
			},
			{
				q: 'Can I see the migration on a short safari?',
				a: 'We recommend at least six to seven days for the northern circuit so there is time to reach the herds and stay flexible. Shorter trips are possible when the migration is close to the central Serengeti.',
			},
			{
				q: 'Is a river crossing guaranteed?',
				a: 'Nature sets the schedule, so no honest operator can guarantee a crossing on a given day. Being in the right area for several days with a guide who tracks the herds gives you the best possible chance.',
			},
			{
				q: 'Can I combine the migration with Zanzibar?',
				a: 'Absolutely — many guests pair the northern circuit with a few days on Zanzibar’s beaches. We handle the domestic flight and all transfers.',
			},
		],
	},
	cta: {
		eyebrow: 'Plan Your Trip',
		heading: 'Plan Your Migration Safari',
		text: 'Tell us your travel dates and we will build a route around the herds — private guide, flexible days and camps in the right place at the right time.',
	},
};

export const honeymoon: Topic = {
	slug: '/honeymoon-safari/',
	ogImage:
		'https://images.unsplash.com/photo-1646668072507-b2215b873c70?auto=format&fit=crop&w=1200&h=630&q=70',
	seo: {
		title: 'Honeymoon Safari Tanzania | Safaris & Zanzibar Getaways',
		description:
			'Romantic honeymoon safaris in Tanzania — private guides, luxury lodges and barefoot Zanzibar beaches. Design your once-in-a-lifetime escape with us.',
	},
	hero: {
		image:
			'https://images.unsplash.com/photo-1646668072507-b2215b873c70?auto=format&fit=crop&w=1600&q=75',
		alt: 'A hammock on the beach at Zuri Zanzibar, Tanzania',
		eyebrow: 'Safari & Zanzibar',
		heading: 'A Honeymoon Written in the Wild',
		lede: 'Wake to lions calling across the Serengeti, dine under a sky full of stars, then trade dust for barefoot days on Zanzibar’s white-sand beaches. A honeymoon that feels like no other.',
	},
	intro: {
		eyebrow: 'Why a Safari Honeymoon',
		heading: 'Intimate by Nature',
		paragraphs: [
			'There is no honeymoon quite like Tanzania: private game drives at first light, sundowners with nobody else around, and lodges that seem to have been built just for two. No group buses, no fixed schedules — just the two of you and the wild.',
			'And the contrast is half the magic. After days of elephants, crater views and endless plains, Zanzibar offers turquoise water, spice-scented streets and the kind of slow mornings honeymoons are made for. We take care of every transfer, flight and detail in between.',
		],
		image:
			'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=75',
		imageAlt: 'Palm trees and turquoise water on a Zanzibar beach',
	},
	highlightsEyebrow: 'The Honeymoon Difference',
	highlightsHeading: 'Romance, Quietly Arranged',
	highlights: [
		{
			title: 'Privacy by Design',
			desc: 'Private guide, private jeep and camps chosen for intimacy — never a shared game drive.',
		},
		{
			title: 'Luxury Lodges',
			desc: 'Hand-picked tented camps and lodges with views, privacy and unforgettable service.',
		},
		{
			title: 'Safari + Beach',
			desc: 'The classic pairing: northern Tanzania followed by Zanzibar’s finest beaches.',
		},
		{
			title: 'Candlelit Evenings',
			desc: 'Private dinners, sundowners and starlit nights arranged for the two of you.',
		},
		{
			title: 'Your Pace',
			desc: 'Late starts, long lunches and room to simply be together — the itinerary bends to you.',
		},
		{
			title: 'Thoughtful Details',
			desc: 'Honeymoon surprises, special requests and quiet coordination behind the scenes.',
		},
	],
	itinerary: {
		eyebrow: 'Sample Route',
		heading: 'A Week of Wild and Barefoot',
		subtext: 'A starting point — we shape the balance of safari and beach around you.',
		days: [
			{
				label: 'Day 1',
				title: 'Arrive in Arusha',
				desc: 'A warm welcome, a quiet lodge and a relaxed evening before the adventure begins.',
			},
			{
				label: 'Day 2',
				title: 'Tarangire National Park',
				desc: 'Elephants, baobabs and a private picnic — your first taste of the wild together.',
			},
			{
				label: 'Day 3',
				title: 'Ngorongoro Crater',
				desc: 'A day inside the crater’s wildlife-rich caldera, ending with a sundowner on the rim.',
			},
			{
				label: 'Day 4',
				title: 'Serengeti Sunsets',
				desc: 'Into the Serengeti for private game drives and one unforgettable sunset.',
			},
			{
				label: 'Day 5',
				title: 'Fly to Zanzibar',
				desc: 'A short flight swaps plains for palms — check into your beach lodge and exhale.',
			},
			{
				label: 'Day 6–7',
				title: 'Barefoot Zanzibar',
				desc: 'White sand, warm water, spice markets and slow mornings. The honeymoon part.',
			},
		],
	},
	packagesEyebrow: 'Ready-Made Starting Points',
	packagesHeading: 'Honeymoon-Friendly Safaris',
	packageTitles: ['Zanzibar to Arusha & Northern Parks', 'All Northern National Parks'],
	faq: {
		eyebrow: 'Good to Know',
		heading: 'Honeymoon Questions',
		items: [
			{
				q: 'When is the best time for a honeymoon safari?',
				a: 'June to October offers dry, sunny days and excellent wildlife viewing. January and February are also lovely — quieter parks, green landscapes and the calving season in the southern Serengeti.',
			},
			{
				q: 'Can we combine safari and beach?',
				a: 'Yes — it is our most popular honeymoon format. We pair the northern parks with a Zanzibar beach lodge and handle the domestic flight and transfers.',
			},
			{
				q: 'How luxurious can it be?',
				a: 'As luxurious as you like. We work with intimate tented camps, five-star lodges and private conservancy stays, and can arrange private dinners and special touches.',
			},
			{
				q: 'Is it private?',
				a: 'Always. Your own guide and vehicle, your own pace, and camps chosen for privacy rather than crowds.',
			},
		],
	},
	cta: {
		eyebrow: 'Plan Your Trip',
		heading: 'Design Your Honeymoon',
		text: 'Tell us what you dream of — dawn game drives, candlelit dinners, days on the sand — and we will shape the trip around the two of you.',
	},
};
