export type RateRow = { name: string; price: string };

export const zanzibarExcursions: RateRow[] = [
	{ name: 'Stone Town Walking Tour', price: '$30 – $50' },
	{ name: 'Prison Island & Nakupenda Sandbank', price: '$60 – $95' },
	{ name: 'Safari Blue (Full Day Dhow Trip)', price: '$70 – $110' },
	{ name: 'Mnemba Atoll Snorkeling', price: '$50 – $90' },
	{ name: 'Spice Farm + Jozani Forest', price: '$50 – $80' },
	{ name: "Cheetah's Rock / Specialty Wildlife", price: '$120 – $160' },
];

export const dayTrips: RateRow[] = [
	{ name: 'Arusha National Park', price: '$150 – $300' },
	{ name: 'Tarangire / Lake Manyara', price: '$200 – $350' },
	{ name: 'Ngorongoro Crater (1 Day)', price: '$280 – $450' },
	{ name: 'Chemka Hot Springs / Materuni Waterfalls', price: '$80 – $150' },
];

export const transfers: RateRow[] = [
	{ name: 'Kilimanjaro Intl. Airport (KIA) → Arusha Town, sedan', price: '$50 – $80' },
	{ name: 'Kilimanjaro Intl. Airport (KIA) → Arusha Town, safari vehicle/minivan', price: '$80 – $120' },
	{ name: 'Arusha Airport (ARK) → Town/Hotel', price: '$20 – $40' },
];
