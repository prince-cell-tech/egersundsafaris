export type RateRow = { name: string; price: string };

// Rates marked with exact prices follow the Egersund Safari Ltd Price List 2026.
// The remaining entries are indicative ranges for excursions not on the flyer.

export const zanzibarExcursions: RateRow[] = [
	{ name: 'Stone Town Tour', price: '$65' },
	{ name: 'Mnemba Snorkeling', price: '$85' },
	{ name: 'Spice Tour', price: '$45' },
	{ name: 'Prison Island & Nakupenda Sandbank', price: '$60 – $95' },
	{ name: 'Safari Blue (Full Day Dhow Trip)', price: '$70 – $110' },
	{ name: "Cheetah's Rock / Specialty Wildlife", price: '$120 – $160' },
];

export const dayTrips: RateRow[] = [
	{ name: 'Arusha Town Tour', price: '$75' },
	{ name: 'Arusha National Park', price: '$120' },
	{ name: 'Chemka Hot Springs', price: '$95' },
	{ name: 'Tarangire Day Trip', price: '$230' },
	{ name: 'Lake Manyara', price: '$210' },
	{ name: 'Ngorongoro Day Trip', price: '$320' },
	{ name: 'Kilimanjaro Day Hike', price: '$180' },
	{ name: 'Moshi Coffee Tour', price: '$90' },
];

export const transfers: RateRow[] = [
	{ name: 'Kilimanjaro Intl. Airport (KIA) → Arusha Town, sedan', price: '$50 – $80' },
	{ name: 'Kilimanjaro Intl. Airport (KIA) → Arusha Town, safari vehicle/minivan', price: '$80 – $120' },
	{ name: 'Arusha Airport (ARK) → Town/Hotel', price: '$20 – $40' },
];
