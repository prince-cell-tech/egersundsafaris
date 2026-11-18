export type PriceTier = {
	key: 'camping' | 'midRange' | 'luxury';
	perPerson: string;
	perCouple: string;
};

export type PackageCategory = 'dayTrips' | 'kilimanjaro' | 'northern' | 'zanzibar' | 'combined';

export type Package = {
	title: string;
	price: string;
	days?: string;
	image: string;
	alt: string;
	category: PackageCategory;
	/** Optional marketing badge shown on the card. */
	badge?: 'bestseller' | 'popular' | 'vip';
	/** Optional attribution line, required for CC-licensed photos. */
	credit?: { label: string; url: string };
	tiers?: PriceTier[];
	mixedAvailable?: boolean;
};

// Source of truth: Egersund Safari Ltd — Price List 2026.
// All prices are per person and include 18% VAT and park fees.
export const packages: Package[] = [
	// --- Day Trips Arusha ---
	{
		title: 'Arusha Town Tour',
		price: '$75',
		days: '1 Day',
		category: 'dayTrips',
		image:
			'https://images.unsplash.com/photo-1580689402180-61f1ab9d6232?auto=format&fit=crop&w=1200&q=75',
		alt: 'Maasai community members near Arusha, Tanzania',
	},
	{
		title: 'Arusha National Park',
		price: '$120',
		days: '1 Day',
		category: 'dayTrips',
		image:
			'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=75',
		alt: 'Wildlife in Arusha National Park, Tanzania',
	},
	{
		title: 'Chemka Hot Springs',
		price: '$95',
		days: '1 Day',
		category: 'dayTrips',
		image: '/images/packages/chemka-hot-springs.jpg',
		alt: 'The turquoise waters of Chemka Hot Springs, Tanzania',
	},
	{
		title: 'Tarangire Day Trip',
		price: '$230',
		days: '1 Day',
		category: 'dayTrips',
		image:
			'https://images.unsplash.com/photo-1528732533941-ffd7083d5dfe?auto=format&fit=crop&w=1200&q=75',
		alt: 'Herd of elephants in Tarangire National Park, Tanzania',
	},
	{
		title: 'Lake Manyara',
		price: '$210',
		days: '1 Day',
		category: 'dayTrips',
		image: '/images/packages/lake-manyara.jpg',
		alt: 'Zebras grazing on the plains below the Rift Valley escarpment at Lake Manyara National Park, Tanzania',
		credit: {
			label: 'Photo: Wegmann & Bevanda / Wikimedia Commons, CC BY-SA 3.0',
			url: 'https://commons.wikimedia.org/wiki/File:Lake_manyara_2012_authorBevanda_Wegmann2.JPG',
		},
	},
	{
		title: 'Ngorongoro Day Trip',
		price: '$320',
		days: '1 Day',
		category: 'dayTrips',
		image:
			'https://images.unsplash.com/photo-1745885979468-44a855f8a5fa?auto=format&fit=crop&w=1200&q=75',
		alt: 'Ngorongoro Crater landscape, Tanzania',
	},
	{
		title: 'Kilimanjaro Day Hike',
		price: '$180',
		days: '1 Day',
		category: 'dayTrips',
		image:
			'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=75',
		alt: 'Mount Kilimanjaro, Tanzania',
	},
	{
		title: 'Moshi Coffee Tour',
		price: '$90',
		days: '1 Day',
		category: 'dayTrips',
		image:
			'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=75',
		alt: 'Coffee at a Moshi coffee farm, Tanzania',
	},

	// --- Kilimanjaro ---
	{
		title: 'Marangu 5 Days',
		price: '$1,750',
		days: '5 Days',
		category: 'kilimanjaro',
		image:
			'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=75',
		alt: 'Mountain landscape on the Marangu route, Kilimanjaro',
	},
	{
		title: 'Machame 6 Days',
		price: '$1,950',
		days: '6 Days',
		category: 'kilimanjaro',
		badge: 'bestseller',
		image:
			'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=75',
		alt: 'Mountain scenery on the Machame route, Kilimanjaro',
	},
	{
		title: 'Lemosho 7 Days',
		price: '$2,250',
		days: '7 Days',
		category: 'kilimanjaro',
		image:
			'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=75',
		alt: 'Mountain scenery on the Lemosho route, Kilimanjaro',
	},

	// --- Northern Parks ---
	{
		title: 'Northern Circuit Classic',
		price: '$1,850',
		days: 'Multi-Day',
		category: 'northern',
		image:
			'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=75',
		alt: 'Safari vehicle in the northern parks, Tanzania',
	},
	{
		title: 'Egersund Classic 6 Days',
		price: '$2,150',
		days: '6 Days',
		category: 'northern',
		image:
			'https://images.unsplash.com/photo-1507088164404-020d1e905959?auto=format&fit=crop&w=1200&q=75',
		alt: 'Pride of lions resting in the East African savanna',
	},

	// --- Zanzibar ---
	{
		title: 'Zanzibar Beach 4 Days',
		price: '$980',
		days: '4 Days',
		category: 'zanzibar',
		image:
			'https://images.unsplash.com/photo-1646668072507-b2215b873c70?auto=format&fit=crop&w=1200&q=75',
		alt: 'A hammock on the beach at Zuri Zanzibar, Tanzania',
	},
	{
		title: 'Stone Town Tour',
		price: '$65',
		days: '1 Day',
		category: 'zanzibar',
		image:
			'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=75',
		alt: 'Zanzibar coastline, Tanzania',
	},
	{
		title: 'Mnemba Snorkeling',
		price: '$85',
		days: '1 Day',
		category: 'zanzibar',
		image:
			'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=75',
		alt: 'Snorkeling in the clear waters of Mnemba Atoll, Zanzibar',
	},
	{
		title: 'Spice Tour',
		price: '$45',
		days: '1 Day',
		category: 'zanzibar',
		image:
			'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1200&q=75',
		alt: 'Spices at a Zanzibar spice farm',
	},

	// --- Combined ---
	{
		title: 'Northern + Zanzibar 10 Days',
		price: '$3,580',
		days: '10 Days',
		category: 'combined',
		badge: 'popular',
		image:
			'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=75',
		alt: 'Safari and beach holiday in Tanzania',
	},
	{
		title: 'Grand Safari 15 Days',
		price: '$4,925',
		days: '15 Days',
		category: 'combined',
		badge: 'vip',
		image:
			'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=75',
		alt: 'Safari vehicle crossing the Serengeti plains, Tanzania',
	},
];

// Offered, but not sold as fixed-price cards — still valid choices for the
// enquiry form's destination list.
export const otherDestinations: string[] = ['Custom Safari', 'Mount Meru Trek'];
