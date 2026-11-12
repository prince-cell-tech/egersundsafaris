export type PriceTier = {
	key: 'camping' | 'midRange' | 'luxury';
	perPerson: string;
	perCouple: string;
};

export type Package = {
	title: string;
	price: string;
	days?: string;
	image: string;
	alt: string;
	tiers?: PriceTier[];
	mixedAvailable?: boolean;
};

export const packages: Package[] = [
	{
		title: 'Arusha Shopping Tour',
		price: '$160',
		image:
			'https://images.unsplash.com/photo-1580689402180-61f1ab9d6232?auto=format&fit=crop&w=1200&q=75',
		alt: 'Maasai community members near Arusha, Tanzania',
	},
	{
		title: 'Chemka Hot Springs Day Trip',
		price: '$140',
		image: '/images/packages/chemka-hot-springs.jpg',
		alt: 'The turquoise waters of Chemka Hot Springs, Tanzania',
	},
	{
		title: 'Tarangire Safari Tour',
		price: '$700',
		days: '1 Day',
		image:
			'https://images.unsplash.com/photo-1528732533941-ffd7083d5dfe?auto=format&fit=crop&w=1200&q=75',
		alt: 'Herd of elephants in Tarangire National Park, Tanzania',
	},
	{
		title: 'Tarangire, Manyara & Ngorongoro',
		price: '$2,000',
		days: '3 Days',
		image:
			'https://images.unsplash.com/photo-1745885979468-44a855f8a5fa?auto=format&fit=crop&w=1200&q=75',
		alt: 'Ngorongoro Crater landscape, Tanzania',
	},
	{
		title: 'Tarangire, Ngorongoro & Serengeti',
		price: '$3,000',
		days: '4 Days',
		image:
			'https://images.unsplash.com/photo-1763675848759-9cdf601bfbc4?auto=format&fit=crop&w=1200&q=75',
		alt: 'Wildebeest grazing in the Serengeti, Tanzania',
	},
	{
		title: 'All Northern National Parks',
		price: '$6,000',
		days: '9 Days',
		image:
			'https://images.unsplash.com/photo-1507088164404-020d1e905959?auto=format&fit=crop&w=1200&q=75',
		alt: 'Pride of lions resting in the East African savanna',
	},
	{
		title: 'Zanzibar to Arusha & Northern Parks',
		price: '$2,800',
		days: 'Multi-Day',
		image:
			'https://images.unsplash.com/photo-1646668072507-b2215b873c70?auto=format&fit=crop&w=1200&q=75',
		alt: 'A hammock on the beach at Zuri Zanzibar, Tanzania',
		tiers: [
			{ key: 'camping', perPerson: '$2,800', perCouple: '$5,000' },
			{ key: 'midRange', perPerson: '$3,000', perCouple: '$5,700' },
			{ key: 'luxury', perPerson: '$4,000', perCouple: '$7,500' },
		],
		mixedAvailable: true,
	},
];

// Offered, but not sold as fixed-price cards on the Packages grid —
// still valid choices for the enquiry form's destination list.
export const otherDestinations: string[] = ['Kilimanjaro Climbing', 'Zanzibar Beach Holiday'];
