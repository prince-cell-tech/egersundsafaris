export type Lang = 'en' | 'no' | 'sv' | 'da' | 'zh' | 'de';

export const languages: { code: Lang; label: string; path: string }[] = [
	{ code: 'en', label: 'English', path: '/' },
	{ code: 'no', label: 'Norsk', path: '/no/' },
	{ code: 'sv', label: 'Svenska', path: '/sv/' },
	{ code: 'da', label: 'Dansk', path: '/da/' },
	{ code: 'zh', label: '中文', path: '/zh/' },
	{ code: 'de', label: 'Deutsch', path: '/de/' },
];

type Dict = {
	htmlLang: string;
	selectLanguage: string;
	seo: {
		title: string;
		description: string;
	};
	hero: {
		eyebrow: string;
		h1Line1: string;
		h1Line2Pre: string;
		h1Accent: string;
		lede: string;
		ctaPrimary: string;
		ctaSecondary: string;
		statYears: string;
		statGuests: string;
		statDestinations: string;
	};
	about: {
		eyebrow: string;
		heading: string;
		intro1: string;
		intro2: string;
		badge: string;
		features: { title: string; desc: string }[];
		beyondEyebrow: string;
		beyond: { title: string; desc: string }[];
		whoEyebrow: string;
		whoText: string;
		directorP1: string;
		directorP2: string;
		directorP3: string;
		directorCite: string;
	};
	safariTypes: {
		eyebrow: string;
		heading: string;
		subtext: string;
		categories: string[];
	};
	pricingGuide: {
		eyebrow: string;
		heading: string;
		subtext: string;
		zanzibarEyebrow: string;
		priceColumnLabel: string;
		multiDayEyebrow: string;
		multiDaySubtext: string;
		multiDayTiers: { name: string; price: string; desc: string }[];
		dayTripsEyebrow: string;
		dayTripsSubtext: string;
		transfersEyebrow: string;
		transfersSubtext: string;
	};
	packages: {
		eyebrow: string;
		heading: string;
		subheading: string;
		bookNow: string;
		priceOnRequest: string;
		perPersonAbbrev: string;
		daysMap: Record<string, string>;
		fromPrice: string;
		perPerson: string;
		perCouple: string;
		tierNames: Record<'camping' | 'midRange' | 'luxury', string>;
		mixedNote: string;
	};
	contact: {
		eyebrow: string;
		heading: string;
		paragraph: string;
		form: {
			name: string;
			email: string;
			phone: string;
			optional: string;
			travelers: string;
			destination: string;
			destinationPlaceholder: string;
			notSure: string;
			safariStyle: string;
			dates: string;
			datesPlaceholder: string;
			message: string;
			submit: string;
			errorRequired: string;
			successOpening: string;
			subjectPrefix: string;
			noMessage: string;
		};
	};
	footer: {
		tagline: string;
		journeyTagline: string;
	};
	popup: {
		message: string;
		tagline: string;
	};
};

export const dictionaries: Record<Lang, Dict> = {
	en: {
		htmlLang: 'en',
		selectLanguage: 'Select language',
		seo: {
			title: 'Egersund Safaris | Tanzania Safari Tours, Kilimanjaro & Zanzibar',
			description:
				'Handcrafted Tanzania safari tours with private guides and jeeps — Serengeti, Ngorongoro, Tarangire, Kilimanjaro climbs, and Zanzibar beach holidays. Plan your trip today.',
		},
		hero: {
			eyebrow: 'Egersund Safaris',
			h1Line1: 'Where the Wild',
			h1Line2Pre: 'Calls You ',
			h1Accent: 'Home',
			lede: "Handcrafted safari experiences across East Africa's most breathtaking wildernesses — from the Serengeti plains to the peak of Kilimanjaro. The journey starts here.",
			ctaPrimary: 'Explore Expeditions',
			ctaSecondary: 'Plan Your Trip',
			statYears: 'Years of Experience',
			statGuests: 'Guests Guided',
			statDestinations: 'African Destinations',
		},
		about: {
			eyebrow: 'About Us',
			heading: 'Discover the Heart of Africa with Authentic Tanzania Safaris',
			intro1:
				'Professional private guides, comfortable private jeeps, flexible itineraries, and the best customer experiences. Our meticulous trip preparation ensures you can enjoy your journey stress-free and worry-free. Opt for an unforgettable trip with top-notch service.',
			intro2:
				"At Egersund Safaris, we specialize in crafting once-in-a-lifetime safari experiences in the heart of Tanzania. Our team is deeply passionate about showcasing the beauty and diversity of Africa's wildlife and culture. Whether you're planning a thrilling Serengeti safari, a peaceful Zanzibar beach holiday, or a life-changing Kilimanjaro trek, we provide tailored tours to suit every traveler's needs.",
			badge: 'Proudly featured on SafariBookings',
			features: [
				{
					title: 'Private Guides',
					desc: 'Professional private guides who know the land and its wildlife inside out.',
				},
				{
					title: 'Private Jeeps',
					desc: 'Comfortable private vehicles — no sharing your trip with strangers.',
				},
				{
					title: 'Flexible Itineraries',
					desc: 'Tailored routes and pacing built around what you actually want to see.',
				},
				{
					title: 'Meticulous Preparation',
					desc: 'Every trip planned in detail, so you travel stress-free and worry-free.',
				},
			],
			beyondEyebrow: 'Beyond the Safari',
			beyond: [
				{
					title: 'Kilimanjaro Climbing',
					desc: 'Summiting Mount Kilimanjaro is a dream for many adventurers. Our Kilimanjaro trekking packages cater to all levels of climbers, from beginners to experienced mountaineers.',
				},
				{
					title: 'Zanzibar Beach Holidays',
					desc: 'End your Tanzania adventure with a relaxing stay on the exotic beaches of Zanzibar. Our Zanzibar beach holiday packages offer the perfect balance of rest and exploration, with options for cultural tours, water sports, and historical visits to Stone Town.',
				},
			],
			whoEyebrow: 'Who We Are',
			whoText:
				"At Egersund Safaris, we take great pride in designing safari experiences that are meticulously customized to align with your individual interests and budgetary considerations. Whether you're setting off on your inaugural adventure to Tanzania or you're a seasoned globetrotter, our proficiency lies in formulating travel itineraries that revolve around your specific requirements. With long-standing affiliations with various accommodation providers, spanning the spectrum from economical to opulent establishments, in renowned locales such as the Serengeti, Tarangire, Ngorongoro, Lake Manyara, and Arusha National Park, we present an array of choices to cater to your personal preferences.",
			directorP1:
				'I am delighted to extend a warm welcome to each of you on behalf of our tourism company. As the Director, it brings me immense joy to share the essence of our commitment to providing unforgettable travel experiences.',
			directorP2:
				"At our core, we believe that travel is not just about reaching a destination; it's about the journey, the moments, and the connections made along the way. Our dedicated team strives to curate extraordinary experiences that go beyond the ordinary, ensuring that every trip with us becomes a cherished memory.",
			directorP3:
				"Thank you for choosing us as your travel companion. We look forward to being part of your adventures, creating moments that linger in your hearts long after you return home. Here's to new horizons, shared discoveries, and the journey of a lifetime.",
			directorCite: '— Director, Egersund Safaris',
		},
		safariTypes: {
			eyebrow: 'Find Your Style',
			heading: 'What Kind of Safari Are You Looking For?',
			subtext: "Tap a style and we'll pick up from there.",
			categories: [
				'Adventure Safaris',
				'Big 5 Safaris',
				'Family Safaris',
				'Game Drive',
				'Great Migration Safaris',
				'Honeymoon Safaris',
				'Photographic Safaris',
			],
		},
		pricingGuide: {
			eyebrow: 'Rates & Pricing Guide',
			heading: 'A Clear Look at What Things Cost',
			subtext:
				"Typical price ranges so you can plan your budget — your exact quote depends on group size, season, and how you'd like to travel.",
			zanzibarEyebrow: 'Zanzibar Day Excursions',
			priceColumnLabel: 'Typical Price (USD)',
			multiDayEyebrow: 'Multi-Day Safaris',
			multiDaySubtext: 'Rates for camps or lodges, per guest per day:',
			multiDayTiers: [
				{
					name: 'Budget (Camping Safari)',
					price: '$180 – $250 / day',
					desc: 'Guests stay in ground tents with a cook included.',
				},
				{
					name: 'Mid-Range (Lodges & Tented Camps)',
					price: '$300 – $500 / day',
					desc: 'Guests stay in standard lodges or tented camps with good amenities.',
				},
				{
					name: 'Luxury Safari',
					price: '$600 – $1,500+ / day',
					desc: 'High-end luxury lodges or exclusive camps inside the parks, such as the Serengeti or Ngorongoro.',
				},
			],
			dayTripsEyebrow: 'Arusha Day Trips',
			dayTripsSubtext: 'Best suited for guests returning to their Arusha hotel in the evening:',
			transfersEyebrow: 'Transfers & Airport Pickups',
			transfersSubtext: 'If you only need a transfer between the airport and your hotel in Arusha:',
		},
		packages: {
			eyebrow: 'Our Expeditions',
			heading: 'Tours & Safari Prices',
			subheading: 'From day trips around Arusha to a nine-day journey through the northern parks.',
			bookNow: 'Book Now',
			priceOnRequest: 'On Request',
			perPersonAbbrev: 'pp',
			daysMap: {
				'1 Day': '1 Day',
				'3 Days': '3 Days',
				'4 Days': '4 Days',
				'9 Days': '9 Days',
				'Multi-Day': 'Multi-Day',
			},
			fromPrice: 'From',
			perPerson: 'per person',
			perCouple: 'per couple',
			tierNames: {
				camping: 'Camping Safari',
				midRange: 'Mid-Range Hotels',
				luxury: 'Luxury Hotels',
			},
			mixedNote: 'Want to mix camping and hotel stays? Pricing available on request.',
		},
		contact: {
			eyebrow: 'Get In Touch',
			heading: "The mountain is waiting. Let's talk.",
			paragraph:
				'Share your dates, your dream route, or just a rough idea — our team will shape it into an itinerary.',
			form: {
				name: 'Full name',
				email: 'Email',
				phone: 'Phone / WhatsApp',
				optional: '(optional)',
				travelers: 'Travelers',
				destination: 'Destination',
				destinationPlaceholder: 'Choose a destination',
				notSure: 'Not sure yet — help me choose',
				safariStyle: 'Safari Style',
				dates: 'Preferred dates',
				datesPlaceholder: 'e.g. mid-July 2027, or flexible',
				message: 'Tell us about your trip',
				submit: 'Send Enquiry',
				errorRequired: 'Please fill in your name, email, and destination.',
				successOpening: 'Opening your email app with your enquiry filled in — just hit send.',
				subjectPrefix: 'Safari Enquiry — ',
				noMessage: '(No additional message provided.)',
			},
		},
		footer: {
			tagline: 'Tour Operators',
			journeyTagline: 'The Journey Starts Here',
		},
		popup: {
			message: 'Welcome to Egersund Safaris',
			tagline: 'The Journey Starts Here',
		},
	},
	no: {
		htmlLang: 'no',
		selectLanguage: 'Velg språk',
		seo: {
			title: 'Egersund Safaris | Safari i Tanzania, Kilimanjaro & Zanzibar',
			description:
				'Skreddersydde safarireiser i Tanzania med private guider og jeeper — Serengeti, Ngorongoro, Tarangire, Kilimanjaro-bestigning og strandferie på Zanzibar. Planlegg reisen din i dag.',
		},
		hero: {
			eyebrow: 'Egersund Safaris',
			h1Line1: 'Der Villmarken',
			h1Line2Pre: 'Kaller Deg ',
			h1Accent: 'Hjem',
			lede: "Håndlagde safarier i Øst-Afrikas mest fantastiske villmarker — fra Serengetis sletter til toppen av Kilimanjaro. Reisen starter her.",
			ctaPrimary: 'Utforsk Ekspedisjoner',
			ctaSecondary: 'Planlegg Reisen',
			statYears: 'Års Erfaring',
			statGuests: 'Gjester Guidet',
			statDestinations: 'Afrikanske Reisemål',
		},
		about: {
			eyebrow: 'Om Oss',
			heading: 'Oppdag Afrikas Hjerte med Autentiske Tanzania-safarier',
			intro1:
				'Profesjonelle private guider, komfortable private jeeper, fleksible reiseruter og den beste kundeopplevelsen. Vår grundige reiseforberedelse sikrer at du kan nyte reisen uten stress og bekymringer. Velg en uforglemmelig reise med service i toppklasse.',
			intro2:
				'Hos Egersund Safaris spesialiserer vi oss på å skape safarier for livet i hjertet av Tanzania. Teamet vårt brenner for å vise frem Afrikas mangfoldige dyreliv og kultur. Enten du planlegger en spennende Serengeti-safari, en avslappende strandferie på Zanzibar, eller en livsforvandlende tur til Kilimanjaro, skreddersyr vi turer som passer enhver reisendes behov.',
			badge: 'Stolt omtalt på SafariBookings',
			features: [
				{
					title: 'Private Guider',
					desc: 'Profesjonelle private guider som kjenner landet og dyrelivet ut og inn.',
				},
				{
					title: 'Private Jeeper',
					desc: 'Komfortable private kjøretøy — du slipper å dele turen med fremmede.',
				},
				{
					title: 'Fleksible Reiseruter',
					desc: 'Skreddersydde ruter og tempo, bygget rundt det du faktisk vil se.',
				},
				{
					title: 'Grundig Forberedelse',
					desc: 'Hver reise planlegges i detalj, slik at du reiser uten stress og bekymringer.',
				},
			],
			beyondEyebrow: 'Utover Safarien',
			beyond: [
				{
					title: 'Kilimanjaro-bestigning',
					desc: 'Å bestige Kilimanjaro er en drøm for mange eventyrere. Våre Kilimanjaro-trekkingpakker passer for alle nivåer, fra nybegynnere til erfarne fjellklatrere.',
				},
				{
					title: 'Zanzibar-strandferie',
					desc: 'Avslutt Tanzania-eventyret med et avslappende opphold på Zanzibars eksotiske strender. Våre strandferiepakker på Zanzibar gir den perfekte balansen mellom hvile og utforskning, med muligheter for kulturelle turer, vannsport og historiske besøk i Stone Town.',
				},
			],
			whoEyebrow: 'Hvem Vi Er',
			whoText:
				'Hos Egersund Safaris er vi svært stolte av å designe safarier som er nøye tilpasset dine individuelle interesser og budsjett. Enten du legger ut på ditt aller første eventyr til Tanzania, eller du er en erfaren globetrotter, ligger vår styrke i å utforme reiseruter som dreier seg om dine spesifikke behov. Med langvarige samarbeid med en rekke overnattingssteder, fra rimelige til luksuriøse, i kjente områder som Serengeti, Tarangire, Ngorongoro, Lake Manyara og Arusha nasjonalpark, tilbyr vi et bredt utvalg som passer dine personlige preferanser.',
			directorP1:
				'Det er en glede å ønske hver og en av dere varmt velkommen på vegne av vårt reiseselskap. Som direktør gir det meg stor glede å dele kjernen i vårt engasjement for å skape uforglemmelige reiseopplevelser.',
			directorP2:
				'I bunn og grunn tror vi at reising ikke bare handler om å nå et reisemål; det handler om reisen, øyeblikkene og forbindelsene som oppstår underveis. Vårt dedikerte team streber etter å skape ekstraordinære opplevelser som går utover det vanlige, slik at hver reise med oss blir et kjært minne.',
			directorP3:
				'Takk for at du velger oss som din reisepartner. Vi gleder oss til å være en del av dine eventyr og skape øyeblikk som blir værende i hjertet ditt lenge etter at du er hjemme igjen. Her er en skål for nye horisonter, delte oppdagelser og reisen for livet.',
			directorCite: '— Direktør, Egersund Safaris',
		},
		safariTypes: {
			eyebrow: 'Finn Din Stil',
			heading: 'Hva Slags Safari Ser Du Etter?',
			subtext: 'Trykk på en stil, så tar vi det videre derfra.',
			categories: [
				'Eventyrsafarier',
				'Big 5-safarier',
				'Familiesafarier',
				'Safarikjøring',
				'Safari under Den Store Vandringen',
				'Bryllupsreise-safarier',
				'Fotosafarier',
			],
		},
		pricingGuide: {
			eyebrow: 'Priser og Satser',
			heading: 'Et Tydelig Blikk på Hva Ting Koster',
			subtext:
				'Typiske prisintervaller slik at du kan planlegge budsjettet ditt — din endelige pris avhenger av gruppestørrelse, sesong og hvordan du ønsker å reise.',
			zanzibarEyebrow: 'Dagsutflukter på Zanzibar',
			priceColumnLabel: 'Typisk Pris (USD)',
			multiDayEyebrow: 'Flerdagers Safarier',
			multiDaySubtext: 'Priser for leirer eller losjier, per gjest per dag:',
			multiDayTiers: [
				{
					name: 'Budsjett (Campingsafari)',
					price: '$180 – $250 / dag',
					desc: 'Gjester bor i bakketelt med kokk inkludert.',
				},
				{
					name: 'Mellomklasse (Losjier og Telt-leirer)',
					price: '$300 – $500 / dag',
					desc: 'Gjester bor på standard losjier eller telt-leirer med gode fasiliteter.',
				},
				{
					name: 'Luksussafari',
					price: '$600 – $1 500+ / dag',
					desc: 'Eksklusive luksuslosjier eller eksklusive leirer inne i parkene, som Serengeti eller Ngorongoro.',
				},
			],
			dayTripsEyebrow: 'Dagsturer fra Arusha',
			dayTripsSubtext: 'Best egnet for gjester som returnerer til hotellet sitt i Arusha om kvelden:',
			transfersEyebrow: 'Transport og Flyplasshenting',
			transfersSubtext: 'Hvis du bare trenger transport mellom flyplassen og hotellet i Arusha:',
		},
		packages: {
			eyebrow: 'Våre Ekspedisjoner',
			heading: 'Turer og Safari-priser',
			subheading: 'Fra dagsturer rundt Arusha til en ni-dagers reise gjennom de nordlige parkene.',
			bookNow: 'Bestill Nå',
			priceOnRequest: 'På Forespørsel',
			perPersonAbbrev: 'pp',
			daysMap: {
				'1 Day': '1 Dag',
				'3 Days': '3 Dager',
				'4 Days': '4 Dager',
				'9 Days': '9 Dager',
				'Multi-Day': 'Flere Dager',
			},
			fromPrice: 'Fra',
			perPerson: 'per person',
			perCouple: 'per par',
			tierNames: {
				camping: 'Campingsafari',
				midRange: 'Mellomklasse Hotell',
				luxury: 'Luksushotell',
			},
			mixedNote: 'Ønsker du å blande camping og hotellopphold? Pris på forespørsel.',
		},
		contact: {
			eyebrow: 'Ta Kontakt',
			heading: 'Fjellet venter. La oss snakke.',
			paragraph:
				'Del datoene dine, drømmeruten din, eller bare en løs idé — teamet vårt former det til en reiserute.',
			form: {
				name: 'Fullt navn',
				email: 'E-post',
				phone: 'Telefon / WhatsApp',
				optional: '(valgfritt)',
				travelers: 'Reisende',
				destination: 'Reisemål',
				destinationPlaceholder: 'Velg et reisemål',
				notSure: 'Usikker ennå — hjelp meg å velge',
				safariStyle: 'Safaristil',
				dates: 'Ønsket reisedato',
				datesPlaceholder: 'f.eks. midten av juli 2027, eller fleksibelt',
				message: 'Fortell oss om reisen din',
				submit: 'Send Forespørsel',
				errorRequired: 'Vennligst fyll inn navn, e-post og reisemål.',
				successOpening: 'Åpner e-postappen din med forespørselen fylt ut — bare trykk send.',
				subjectPrefix: 'Safari-forespørsel — ',
				noMessage: '(Ingen ytterligere melding oppgitt.)',
			},
		},
		footer: {
			tagline: 'Turoperatør',
			journeyTagline: 'Reisen Starter Her',
		},
		popup: {
			message: 'Velkommen til Egersund Safaris',
			tagline: 'Reisen Starter Her',
		},
	},
	sv: {
		htmlLang: 'sv',
		selectLanguage: 'Välj språk',
		seo: {
			title: 'Egersund Safaris | Safari i Tanzania, Kilimanjaro & Zanzibar',
			description:
				'Skräddarsydda safariresor i Tanzania med privata guider och jeepar — Serengeti, Ngorongoro, Tarangire, Kilimanjaro-bestigning och strandsemester på Zanzibar. Planera din resa idag.',
		},
		hero: {
			eyebrow: 'Egersund Safaris',
			h1Line1: 'Dit Vildmarken',
			h1Line2Pre: 'Kallar Dig ',
			h1Accent: 'Hem',
			lede: 'Handgjorda safariupplevelser i Östafrikas mest hänförande vildmarker — från Serengetis slätter till toppen av Kilimanjaro. Resan börjar här.',
			ctaPrimary: 'Utforska Expeditioner',
			ctaSecondary: 'Planera Din Resa',
			statYears: 'Års Erfarenhet',
			statGuests: 'Gäster Guidade',
			statDestinations: 'Afrikanska Resmål',
		},
		about: {
			eyebrow: 'Om Oss',
			heading: 'Upptäck Afrikas Hjärta med Autentiska Tanzania-safarier',
			intro1:
				'Professionella privata guider, bekväma privata jeepar, flexibla resrutter och den bästa kundupplevelsen. Vår noggranna reseförberedelse säkerställer att du kan njuta av din resa stressfritt och bekymmersfritt. Välj en oförglömlig resa med förstklassig service.',
			intro2:
				'På Egersund Safaris specialiserar vi oss på att skapa safariupplevelser för livet i hjärtat av Tanzania. Vårt team brinner för att visa upp Afrikas mångfaldiga djurliv och kultur. Oavsett om du planerar en spännande Serengeti-safari, en avkopplande strandsemester på Zanzibar, eller en livsförändrande tur till Kilimanjaro, skräddarsyr vi resor som passar varje resenärs behov.',
			badge: 'Stolt omnämnda på SafariBookings',
			features: [
				{
					title: 'Privata Guider',
					desc: 'Professionella privata guider som känner landet och djurlivet utan och innan.',
				},
				{
					title: 'Privata Jeepar',
					desc: 'Bekväma privata fordon — du slipper dela din resa med främlingar.',
				},
				{
					title: 'Flexibla Resrutter',
					desc: 'Skräddarsydda rutter och tempo, byggt kring det du faktiskt vill se.',
				},
				{
					title: 'Noggrann Förberedelse',
					desc: 'Varje resa planeras in i minsta detalj, så att du reser stressfritt och bekymmersfritt.',
				},
			],
			beyondEyebrow: 'Bortom Safarin',
			beyond: [
				{
					title: 'Kilimanjaro-bestigning',
					desc: 'Att bestiga Kilimanjaro är en dröm för många äventyrare. Våra Kilimanjaro-trekkingpaket passar alla nivåer, från nybörjare till erfarna bergsklättrare.',
				},
				{
					title: 'Zanzibar-strandsemester',
					desc: 'Avsluta ditt Tanzania-äventyr med en avkopplande vistelse på Zanzibars exotiska stränder. Våra strandsemesterpaket på Zanzibar erbjuder den perfekta balansen mellan vila och utforskning, med alternativ för kulturella turer, vattensporter och historiska besök i Stone Town.',
				},
			],
			whoEyebrow: 'Vilka Vi Är',
			whoText:
				'På Egersund Safaris är vi mycket stolta över att utforma safariupplevelser som är noggrant anpassade efter dina individuella intressen och budget. Oavsett om du ger dig ut på ditt allra första äventyr till Tanzania eller är en erfaren globetrotter, ligger vår styrka i att utforma resrutter som kretsar kring dina specifika behov. Med långvariga samarbeten med en mängd olika boendeleverantörer, från prisvärda till exklusiva, på kända platser som Serengeti, Tarangire, Ngorongoro, Lake Manyara och Arusha nationalpark, erbjuder vi ett brett utbud av alternativ som passar dina personliga preferenser.',
			directorP1:
				'Det är med glädje jag önskar er alla varmt välkomna på vårt resebolags vägnar. Som direktör ger det mig stor glädje att dela kärnan i vårt engagemang för att skapa oförglömliga reseupplevelser.',
			directorP2:
				'I grund och botten tror vi att resande inte bara handlar om att nå en destination; det handlar om resan, ögonblicken och de kontakter som skapas längs vägen. Vårt engagerade team strävar efter att skapa extraordinära upplevelser som går utöver det vanliga, så att varje resa med oss blir ett kärt minne.',
			directorP3:
				'Tack för att du väljer oss som din reskamrat. Vi ser fram emot att få vara en del av dina äventyr och skapa ögonblick som dröjer kvar i ditt hjärta länge efter att du kommit hem. Här är en skål för nya horisonter, delade upptäckter och resan för livet.',
			directorCite: '— Direktör, Egersund Safaris',
		},
		safariTypes: {
			eyebrow: 'Hitta Din Stil',
			heading: 'Vilken Typ av Safari Söker Du?',
			subtext: 'Tryck på en stil, så tar vi det därifrån.',
			categories: [
				'Äventyrssafarier',
				'Big 5-safarier',
				'Familjesafarier',
				'Safarikörning',
				'Safari under Den Stora Vandringen',
				'Smekmånadssafarier',
				'Fotosafarier',
			],
		},
		pricingGuide: {
			eyebrow: 'Priser och Prisguide',
			heading: 'En Tydlig Bild av Vad Saker Kostar',
			subtext:
				'Typiska prisintervall så att du kan planera din budget — din slutgiltiga offert beror på gruppstorlek, säsong och hur du vill resa.',
			zanzibarEyebrow: 'Dagsutflykter på Zanzibar',
			priceColumnLabel: 'Typiskt Pris (USD)',
			multiDayEyebrow: 'Flerdagssafarier',
			multiDaySubtext: 'Priser för läger eller lodger, per gäst och dag:',
			multiDayTiers: [
				{
					name: 'Budget (Campingsafari)',
					price: '$180 – $250 / dag',
					desc: 'Gästerna bor i marktält med kock inkluderad.',
				},
				{
					name: 'Mellanklass (Lodger och Tältläger)',
					price: '$300 – $500 / dag',
					desc: 'Gästerna bor på standardlodger eller tältläger med bra bekvämligheter.',
				},
				{
					name: 'Lyxsafari',
					price: '$600 – $1 500+ / dag',
					desc: 'Exklusiva lyxlodger eller exklusiva läger inne i parkerna, som Serengeti eller Ngorongoro.',
				},
			],
			dayTripsEyebrow: 'Dagsturer från Arusha',
			dayTripsSubtext: 'Passar bäst för gäster som återvänder till sitt hotell i Arusha på kvällen:',
			transfersEyebrow: 'Transfer och Flygplatshämtning',
			transfersSubtext: 'Om du bara behöver en transfer mellan flygplatsen och ditt hotell i Arusha:',
		},
		packages: {
			eyebrow: 'Våra Expeditioner',
			heading: 'Turer och Safari-priser',
			subheading: 'Från dagsturer runt Arusha till en nio dagars resa genom de norra parkerna.',
			bookNow: 'Boka Nu',
			priceOnRequest: 'På Begäran',
			perPersonAbbrev: 'pp',
			daysMap: {
				'1 Day': '1 Dag',
				'3 Days': '3 Dagar',
				'4 Days': '4 Dagar',
				'9 Days': '9 Dagar',
				'Multi-Day': 'Flera Dagar',
			},
			fromPrice: 'Från',
			perPerson: 'per person',
			perCouple: 'per par',
			tierNames: {
				camping: 'Campingsafari',
				midRange: 'Mellanklasshotell',
				luxury: 'Lyxhotell',
			},
			mixedNote: 'Vill du blanda camping och hotellvistelser? Pris på begäran.',
		},
		contact: {
			eyebrow: 'Kontakta Oss',
			heading: 'Berget väntar. Låt oss prata.',
			paragraph:
				'Dela dina datum, din drömrutt, eller bara en lös idé — vårt team formar det till en resrutt.',
			form: {
				name: 'Fullständigt namn',
				email: 'E-post',
				phone: 'Telefon / WhatsApp',
				optional: '(valfritt)',
				travelers: 'Resenärer',
				destination: 'Resmål',
				destinationPlaceholder: 'Välj ett resmål',
				notSure: 'Osäker än — hjälp mig att välja',
				safariStyle: 'Safaristil',
				dates: 'Önskat resedatum',
				datesPlaceholder: 't.ex. mitten av juli 2027, eller flexibelt',
				message: 'Berätta om din resa',
				submit: 'Skicka Förfrågan',
				errorRequired: 'Vänligen fyll i namn, e-post och resmål.',
				successOpening: 'Öppnar din e-postapp med din förfrågan ifylld — tryck bara på skicka.',
				subjectPrefix: 'Safariförfrågan — ',
				noMessage: '(Inget ytterligare meddelande angivet.)',
			},
		},
		footer: {
			tagline: 'Researrangör',
			journeyTagline: 'Resan Börjar Här',
		},
		popup: {
			message: 'Välkommen till Egersund Safaris',
			tagline: 'Resan Börjar Här',
		},
	},
	da: {
		htmlLang: 'da',
		selectLanguage: 'Vælg sprog',
		seo: {
			title: 'Egersund Safaris | Safari i Tanzania, Kilimanjaro & Zanzibar',
			description:
				'Skræddersyede safarirejser i Tanzania med private guider og jeeps — Serengeti, Ngorongoro, Tarangire, Kilimanjaro-bestigning og strandferie på Zanzibar. Planlæg din rejse i dag.',
		},
		hero: {
			eyebrow: 'Egersund Safaris',
			h1Line1: 'Hvor Vildmarken',
			h1Line2Pre: 'Kalder Dig ',
			h1Accent: 'Hjem',
			lede: 'Håndlavede safarioplevelser i Østafrikas mest betagende vildmarker — fra Serengetis sletter til toppen af Kilimanjaro. Rejsen starter her.',
			ctaPrimary: 'Udforsk Ekspeditioner',
			ctaSecondary: 'Planlæg Din Rejse',
			statYears: 'Års Erfaring',
			statGuests: 'Gæster Guidet',
			statDestinations: 'Afrikanske Rejsemål',
		},
		about: {
			eyebrow: 'Om Os',
			heading: 'Oplev Afrikas Hjerte med Autentiske Tanzania-safarier',
			intro1:
				'Professionelle private guider, komfortable private jeeps, fleksible rejseruter og den bedste kundeoplevelse. Vores grundige rejseforberedelse sikrer, at du kan nyde din rejse stressfrit og bekymringsfrit. Vælg en uforglemmelig rejse med service i topklasse.',
			intro2:
				'Hos Egersund Safaris specialiserer vi os i at skabe safarioplevelser for livet i hjertet af Tanzania. Vores team brænder for at vise Afrikas mangfoldige dyreliv og kultur frem. Uanset om du planlægger en spændende Serengeti-safari, en afslappende strandferie på Zanzibar, eller en livsforvandlende tur til Kilimanjaro, skræddersyr vi rejser, der passer til enhver rejsendes behov.',
			badge: 'Stolt omtalt på SafariBookings',
			features: [
				{
					title: 'Private Guider',
					desc: 'Professionelle private guider, der kender landet og dyrelivet ud og ind.',
				},
				{
					title: 'Private Jeeps',
					desc: 'Komfortable private køretøjer — du slipper for at dele turen med fremmede.',
				},
				{
					title: 'Fleksible Rejseruter',
					desc: 'Skræddersyede ruter og tempo, bygget omkring det, du faktisk vil se.',
				},
				{
					title: 'Grundig Forberedelse',
					desc: 'Hver rejse planlægges i detaljer, så du rejser stressfrit og bekymringsfrit.',
				},
			],
			beyondEyebrow: 'Ud Over Safarien',
			beyond: [
				{
					title: 'Kilimanjaro-bestigning',
					desc: 'At bestige Kilimanjaro er en drøm for mange eventyrere. Vores Kilimanjaro-trekkingpakker passer til alle niveauer, fra begyndere til erfarne bjergbestigere.',
				},
				{
					title: 'Zanzibar-strandferie',
					desc: 'Afslut dit Tanzania-eventyr med et afslappende ophold på Zanzibars eksotiske strande. Vores Zanzibar-strandferiepakker tilbyder den perfekte balance mellem hvile og udforskning, med muligheder for kulturelle ture, vandsport og historiske besøg i Stone Town.',
				},
			],
			whoEyebrow: 'Hvem Vi Er',
			whoText:
				'Hos Egersund Safaris er vi meget stolte af at designe safarioplevelser, der er omhyggeligt tilpasset dine individuelle interesser og budget. Uanset om du begiver dig ud på dit allerførste eventyr til Tanzania, eller du er en erfaren globetrotter, ligger vores styrke i at udforme rejseruter, der kredser om dine specifikke behov. Med mangeårige samarbejder med en række overnatningssteder, fra billige til luksuriøse, i kendte områder som Serengeti, Tarangire, Ngorongoro, Lake Manyara og Arusha nationalpark, tilbyder vi et bredt udvalg, der passer til dine personlige præferencer.',
			directorP1:
				'Det er en glæde at byde hver og en af jer varmt velkommen på vegne af vores rejseselskab. Som direktør giver det mig stor glæde at dele kernen i vores engagement i at skabe uforglemmelige rejseoplevelser.',
			directorP2:
				'I bund og grund tror vi, at rejser ikke kun handler om at nå en destination; det handler om rejsen, øjeblikkene og de forbindelser, der skabes undervejs. Vores dedikerede team stræber efter at skabe ekstraordinære oplevelser, der går ud over det sædvanlige, så hver rejse med os bliver et kært minde.',
			directorP3:
				'Tak fordi du vælger os som din rejsepartner. Vi glæder os til at være en del af dine eventyr og skabe øjeblikke, der bliver i dit hjerte længe efter, du er kommet hjem. Her er en skål for nye horisonter, delte opdagelser og rejsen for livet.',
			directorCite: '— Direktør, Egersund Safaris',
		},
		safariTypes: {
			eyebrow: 'Find Din Stil',
			heading: 'Hvilken Slags Safari Leder Du Efter?',
			subtext: 'Tryk på en stil, så tager vi det derfra.',
			categories: [
				'Eventyrsafarier',
				'Big 5-safarier',
				'Familiesafarier',
				'Safarikørsel',
				'Safari under Den Store Vandring',
				'Bryllupsrejsesafarier',
				'Fotosafarier',
			],
		},
		pricingGuide: {
			eyebrow: 'Priser og Takster',
			heading: 'Et Klart Billede af Hvad Tingene Koster',
			subtext:
				'Typiske prisintervaller, så du kan planlægge dit budget — dit endelige tilbud afhænger af gruppestørrelse, sæson og hvordan du ønsker at rejse.',
			zanzibarEyebrow: 'Dagsudflugter på Zanzibar',
			priceColumnLabel: 'Typisk Pris (USD)',
			multiDayEyebrow: 'Flerdagssafarier',
			multiDaySubtext: 'Priser for lejre eller lodges, per gæst per dag:',
			multiDayTiers: [
				{
					name: 'Budget (Campingsafari)',
					price: '$180 – $250 / dag',
					desc: 'Gæster bor i jordtelte med kok inkluderet.',
				},
				{
					name: 'Mellemklasse (Lodges og Teltlejre)',
					price: '$300 – $500 / dag',
					desc: 'Gæster bor på standardlodges eller teltlejre med gode faciliteter.',
				},
				{
					name: 'Luksussafari',
					price: '$600 – $1.500+ / dag',
					desc: 'Eksklusive luksuslodges eller eksklusive lejre inde i parkerne, som Serengeti eller Ngorongoro.',
				},
			],
			dayTripsEyebrow: 'Dagsture fra Arusha',
			dayTripsSubtext: 'Bedst egnet til gæster, der vender tilbage til deres hotel i Arusha om aftenen:',
			transfersEyebrow: 'Transfer og Lufthavnshentning',
			transfersSubtext: 'Hvis du kun har brug for en transfer mellem lufthavnen og dit hotel i Arusha:',
		},
		packages: {
			eyebrow: 'Vores Ekspeditioner',
			heading: 'Ture og Safari-priser',
			subheading: 'Fra dagsture omkring Arusha til en ni-dages rejse gennem de nordlige parker.',
			bookNow: 'Book Nu',
			priceOnRequest: 'Efter Aftale',
			perPersonAbbrev: 'pp',
			daysMap: {
				'1 Day': '1 Dag',
				'3 Days': '3 Dage',
				'4 Days': '4 Dage',
				'9 Days': '9 Dage',
				'Multi-Day': 'Flere Dage',
			},
			fromPrice: 'Fra',
			perPerson: 'per person',
			perCouple: 'per par',
			tierNames: {
				camping: 'Campingsafari',
				midRange: 'Mellemklassehoteller',
				luxury: 'Luksushoteller',
			},
			mixedNote: 'Vil du blande camping og hotelophold? Pris efter aftale.',
		},
		contact: {
			eyebrow: 'Kom I Kontakt',
			heading: 'Bjerget venter. Lad os tale sammen.',
			paragraph:
				'Del dine datoer, din drømmerute, eller bare en løs idé — vores team former det til en rejserute.',
			form: {
				name: 'Fulde navn',
				email: 'E-mail',
				phone: 'Telefon / WhatsApp',
				optional: '(valgfrit)',
				travelers: 'Rejsende',
				destination: 'Rejsemål',
				destinationPlaceholder: 'Vælg et rejsemål',
				notSure: 'Ved ikke endnu — hjælp mig med at vælge',
				safariStyle: 'Safaristil',
				dates: 'Ønsket rejsedato',
				datesPlaceholder: 'f.eks. midt i juli 2027, eller fleksibelt',
				message: 'Fortæl os om din rejse',
				submit: 'Send Forespørgsel',
				errorRequired: 'Udfyld venligst navn, e-mail og rejsemål.',
				successOpening: 'Åbner din e-mailapp med din forespørgsel udfyldt — tryk bare send.',
				subjectPrefix: 'Safari-forespørgsel — ',
				noMessage: '(Ingen yderligere besked angivet.)',
			},
		},
		footer: {
			tagline: 'Rejsearrangør',
			journeyTagline: 'Rejsen Starter Her',
		},
		popup: {
			message: 'Velkommen til Egersund Safaris',
			tagline: 'Rejsen Starter Her',
		},
	},
	zh: {
		htmlLang: 'zh-CN',
		selectLanguage: '选择语言',
		seo: {
			title: 'Egersund Safaris | 坦桑尼亚野生动物园、乞力马扎罗与桑给巴尔之旅',
			description:
				'专业私人向导打造的坦桑尼亚野生动物园之旅——塞伦盖蒂、恩戈罗恩戈罗、塔兰吉雷、乞力马扎罗登山与桑给巴尔海滩假期。立即规划您的非洲之旅。',
		},
		hero: {
			eyebrow: 'Egersund Safaris',
			h1Line1: '荒野正在',
			h1Line2Pre: '呼唤你回',
			h1Accent: '家',
			lede: '精心打造的东非荒野探险之旅——从塞伦盖蒂草原到乞力马扎罗山顶。旅程从这里开始。',
			ctaPrimary: '探索行程',
			ctaSecondary: '规划您的旅程',
			statYears: '年经验',
			statGuests: '服务游客',
			statDestinations: '非洲目的地',
		},
		about: {
			eyebrow: '关于我们',
			heading: '通过正宗的坦桑尼亚野生动物园探索非洲之心',
			intro1:
				'专业的私人向导、舒适的私人越野车、灵活的行程安排以及最佳的客户体验。我们细致的行程准备确保您可以无压力、无忧虑地享受旅程。选择一次难忘的旅行,享受一流的服务。',
			intro2:
				'在 Egersund Safaris,我们专注于在坦桑尼亚的中心地带打造一生难忘的野生动物园体验。我们的团队热衷于展示非洲野生动物与文化的美丽与多样性。无论您计划的是激动人心的塞伦盖蒂野生动物园、宁静的桑给巴尔海滩假期,还是改变人生的乞力马扎罗山攀登之旅,我们都能提供适合每位旅行者需求的定制行程。',
			badge: '荣登 SafariBookings 推荐榜',
			features: [
				{
					title: '私人向导',
					desc: '专业的私人向导,对当地与野生动物了如指掌。',
				},
				{
					title: '私人越野车',
					desc: '舒适的私人车辆——无需与陌生人共享行程。',
				},
				{
					title: '灵活行程',
					desc: '根据您真正想看到的内容量身定制路线与节奏。',
				},
				{
					title: '细致准备',
					desc: '每次旅程都经过详细规划,让您的旅途无压力、无忧虑。',
				},
			],
			beyondEyebrow: '不止于野生动物园',
			beyond: [
				{
					title: '乞力马扎罗登山',
					desc: '登顶乞力马扎罗山是许多冒险者的梦想。我们的乞力马扎罗徒步套餐适合各个级别的登山者,从初学者到经验丰富的登山者。',
				},
				{
					title: '桑给巴尔海滩假期',
					desc: '在桑给巴尔的异域海滩享受悠闲时光,为您的坦桑尼亚之旅画上完美的结尾。我们的桑给巴尔海滩假期套餐在休闲与探索之间提供完美平衡,并可选择文化之旅、水上运动以及参观石头城的历史景点。',
				},
			],
			whoEyebrow: '我们是谁',
			whoText:
				'在 Egersund Safaris,我们非常自豪能够精心设计与您的个人兴趣和预算相契合的野生动物园体验。无论您是第一次前往坦桑尼亚探险,还是经验丰富的环球旅行者,我们的专长都在于围绕您的具体需求制定旅行路线。凭借与塞伦盖蒂、塔兰吉雷、恩戈罗恩戈罗、马尼亚拉湖和阿鲁沙国家公园等著名地区各类住宿供应商(从经济型到豪华型)长期建立的合作关系,我们为您提供多种选择,以满足您的个人偏好。',
			directorP1:
				'我很高兴代表我们的旅游公司,向大家表示热烈的欢迎。作为总监,能与各位分享我们致力于提供难忘旅行体验的核心理念,让我感到无比欣慰。',
			directorP2:
				'我们始终相信,旅行的意义不仅在于到达目的地,更在于旅程本身、途中的点滴时刻以及建立的联系。我们敬业的团队致力于打造超越寻常的非凡体验,确保每一次与我们同行的旅程都成为珍贵的记忆。',
			directorP3:
				'感谢您选择我们作为您的旅行伙伴。我们期待成为您冒险旅程的一部分,创造在您回家后仍长久留存心中的美好时刻。愿我们共同迎接新的视野、共同的发现,以及这一生难忘的旅程。',
			directorCite: '——总监,Egersund Safaris',
		},
		safariTypes: {
			eyebrow: '找到您的风格',
			heading: '您在寻找哪种野生动物园之旅?',
			subtext: '点击一种风格,我们将由此为您规划。',
			categories: [
				'探险野生动物园',
				'非洲五霸野生动物园',
				'家庭野生动物园',
				'游猎观光',
				'大迁徙野生动物园',
				'蜜月野生动物园',
				'摄影野生动物园',
			],
		},
		pricingGuide: {
			eyebrow: '价格指南',
			heading: '费用一览无遗',
			subtext:
				'以下为典型价格区间,方便您规划预算——具体报价取决于团队规模、季节以及您的出行方式。',
			zanzibarEyebrow: '桑给巴尔一日游',
			priceColumnLabel: '典型价格(美元)',
			multiDayEyebrow: '多日野生动物园之旅',
			multiDaySubtext: '营地或旅舍价格,每位客人每日:',
			multiDayTiers: [
				{
					name: '经济型(露营野生动物园)',
					price: '每日 180–250 美元',
					desc: '客人住在地面帐篷中,含厨师服务。',
				},
				{
					name: '中档型(旅舍与帐篷营地)',
					price: '每日 300–500 美元',
					desc: '客人住在设施良好的标准旅舍或帐篷营地。',
				},
				{
					name: '豪华野生动物园',
					price: '每日 600–1,500+ 美元',
					desc: '公园内(如塞伦盖蒂或恩戈罗恩戈罗)的高端豪华旅舍或专属营地。',
				},
			],
			dayTripsEyebrow: '阿鲁沙一日游',
			dayTripsSubtext: '最适合晚上返回阿鲁沙酒店的客人:',
			transfersEyebrow: '接送服务与机场接机',
			transfersSubtext: '如果您只需要机场与阿鲁沙酒店之间的接送服务:',
		},
		packages: {
			eyebrow: '我们的行程',
			heading: '旅游与野生动物园价格',
			subheading: '从阿鲁沙周边的一日游,到穿越北部各公园的九日之旅。',
			bookNow: '立即预订',
			priceOnRequest: '询价',
			perPersonAbbrev: '每人',
			daysMap: {
				'1 Day': '1天',
				'3 Days': '3天',
				'4 Days': '4天',
				'9 Days': '9天',
				'Multi-Day': '多日',
			},
			fromPrice: '起价',
			perPerson: '每人',
			perCouple: '每对',
			tierNames: {
				camping: '露营野生动物园',
				midRange: '中档酒店',
				luxury: '豪华酒店',
			},
			mixedNote: '想要混合露营与酒店住宿?价格可另行询问。',
		},
		contact: {
			eyebrow: '联系我们',
			heading: '高山在等待。让我们聊聊。',
			paragraph:
				'分享您的出行日期、梦想路线,或只是一个大致的想法——我们的团队将为您量身定制行程。',
			form: {
				name: '全名',
				email: '电子邮箱',
				phone: '电话 / WhatsApp',
				optional: '(可选)',
				travelers: '旅客人数',
				destination: '目的地',
				destinationPlaceholder: '选择目的地',
				notSure: '尚未确定——帮我选择',
				safariStyle: '野生动物园风格',
				dates: '首选日期',
				datesPlaceholder: '例如 2027年7月中旬,或灵活安排',
				message: '告诉我们您的旅行计划',
				submit: '发送咨询',
				errorRequired: '请填写您的姓名、电子邮箱和目的地。',
				successOpening: '正在打开您的邮件应用程序,咨询内容已填好——只需点击发送。',
				subjectPrefix: '野生动物园咨询 — ',
				noMessage: '(未提供其他信息。)',
			},
		},
		footer: {
			tagline: '旅游运营商',
			journeyTagline: '旅程从这里开始',
		},
		popup: {
			message: '欢迎来到 Egersund Safaris',
			tagline: '旅程从这里开始',
		},
	},
	de: {
		htmlLang: 'de',
		selectLanguage: 'Sprache wählen',
		seo: {
			title: 'Egersund Safaris | Tansania-Safaris, Kilimanjaro & Sansibar',
			description:
				'Maßgeschneiderte Safaris in Tansania mit privaten Guides und Jeeps — Serengeti, Ngorongoro, Tarangire, Kilimanjaro-Besteigung und Strandurlaub auf Sansibar. Jetzt Reise planen.',
		},
		hero: {
			eyebrow: 'Egersund Safaris',
			h1Line1: 'Wo die Wildnis',
			h1Line2Pre: 'Dich Ruft ',
			h1Accent: 'Nach Hause',
			lede: 'Maßgeschneiderte Safari-Erlebnisse in den atemberaubendsten Wildnisgebieten Ostafrikas — von den Ebenen der Serengeti bis zum Gipfel des Kilimanjaro. Die Reise beginnt hier.',
			ctaPrimary: 'Expeditionen Entdecken',
			ctaSecondary: 'Reise Planen',
			statYears: 'Jahre Erfahrung',
			statGuests: 'Geführte Gäste',
			statDestinations: 'Afrikanische Reiseziele',
		},
		about: {
			eyebrow: 'Über Uns',
			heading: 'Entdecken Sie das Herz Afrikas mit authentischen Tansania-Safaris',
			intro1:
				'Professionelle private Guides, komfortable private Jeeps, flexible Reiserouten und der beste Kundenservice. Unsere sorgfältige Reisevorbereitung sorgt dafür, dass Sie Ihre Reise stressfrei und sorgenfrei genießen können. Entscheiden Sie sich für eine unvergessliche Reise mit erstklassigem Service.',
			intro2:
				'Bei Egersund Safaris sind wir darauf spezialisiert, einmalige Safari-Erlebnisse im Herzen Tansanias zu gestalten. Unser Team setzt sich mit Leidenschaft dafür ein, die Schönheit und Vielfalt der afrikanischen Tierwelt und Kultur zu zeigen. Ob Sie eine aufregende Serengeti-Safari, einen entspannten Strandurlaub auf Sansibar oder eine lebensverändernde Kilimanjaro-Besteigung planen — wir bieten maßgeschneiderte Touren für jeden Reisenden.',
			badge: 'Stolz vorgestellt auf SafariBookings',
			features: [
				{
					title: 'Private Guides',
					desc: 'Professionelle private Guides, die das Land und seine Tierwelt in- und auswendig kennen.',
				},
				{
					title: 'Private Jeeps',
					desc: 'Komfortable Privatfahrzeuge — Sie teilen Ihre Reise mit niemandem.',
				},
				{
					title: 'Flexible Reiserouten',
					desc: 'Maßgeschneiderte Routen und Tempo, abgestimmt auf das, was Sie wirklich sehen möchten.',
				},
				{
					title: 'Sorgfältige Vorbereitung',
					desc: 'Jede Reise wird bis ins Detail geplant, damit Sie stressfrei und sorgenfrei reisen.',
				},
			],
			beyondEyebrow: 'Mehr als nur Safari',
			beyond: [
				{
					title: 'Kilimanjaro-Besteigung',
					desc: 'Den Kilimanjaro zu besteigen ist der Traum vieler Abenteurer. Unsere Kilimanjaro-Trekkingpakete richten sich an Kletterer aller Erfahrungsstufen, von Anfängern bis hin zu erfahrenen Bergsteigern.',
				},
				{
					title: 'Sansibar-Strandurlaub',
					desc: 'Beenden Sie Ihr Tansania-Abenteuer mit einem entspannten Aufenthalt an den exotischen Stränden Sansibars. Unsere Sansibar-Strandurlaubspakete bieten die perfekte Balance zwischen Erholung und Entdeckung, mit Optionen für Kulturtouren, Wassersport und historische Besuche in Stone Town.',
				},
			],
			whoEyebrow: 'Wer Wir Sind',
			whoText:
				'Bei Egersund Safaris sind wir sehr stolz darauf, Safari-Erlebnisse zu gestalten, die sorgfältig auf Ihre individuellen Interessen und Ihr Budget abgestimmt sind. Egal, ob Sie sich auf Ihr erstes Abenteuer nach Tansania begeben oder ein erfahrener Weltreisender sind — unsere Stärke liegt darin, Reiserouten zu entwickeln, die sich um Ihre spezifischen Bedürfnisse drehen. Mit langjährigen Partnerschaften mit verschiedenen Unterkunftsanbietern, von preisgünstig bis luxuriös, in bekannten Gebieten wie Serengeti, Tarangire, Ngorongoro, Lake Manyara und Arusha National Park, bieten wir eine Vielzahl von Optionen, die Ihren persönlichen Vorlieben entsprechen.',
			directorP1:
				'Es ist mir eine Freude, Sie alle im Namen unseres Reiseunternehmens herzlich willkommen zu heißen. Als Direktor bereitet es mir große Freude, den Kern unseres Engagements für unvergessliche Reiseerlebnisse mit Ihnen zu teilen.',
			directorP2:
				'Wir glauben fest daran, dass es beim Reisen nicht nur darum geht, ein Ziel zu erreichen; es geht um die Reise selbst, die Momente und die Verbindungen, die dabei entstehen. Unser engagiertes Team ist bestrebt, außergewöhnliche Erlebnisse zu schaffen, die über das Gewöhnliche hinausgehen, damit jede Reise mit uns zu einer wertvollen Erinnerung wird.',
			directorP3:
				'Vielen Dank, dass Sie uns als Ihren Reisebegleiter gewählt haben. Wir freuen uns darauf, Teil Ihrer Abenteuer zu sein und Momente zu schaffen, die noch lange nach Ihrer Rückkehr in Ihrem Herzen bleiben. Auf neue Horizonte, gemeinsame Entdeckungen und die Reise Ihres Lebens.',
			directorCite: '— Direktor, Egersund Safaris',
		},
		safariTypes: {
			eyebrow: 'Finden Sie Ihren Stil',
			heading: 'Welche Art von Safari Suchen Sie?',
			subtext: 'Wählen Sie einen Stil, und wir machen von dort weiter.',
			categories: [
				'Abenteuer-Safaris',
				'Big-5-Safaris',
				'Familien-Safaris',
				'Game Drive',
				'Great-Migration-Safaris',
				'Flitterwochen-Safaris',
				'Fotosafaris',
			],
		},
		pricingGuide: {
			eyebrow: 'Preise und Preisübersicht',
			heading: 'Ein Klarer Überblick über die Kosten',
			subtext:
				'Typische Preisspannen, damit Sie Ihr Budget planen können — Ihr genaues Angebot hängt von Gruppengröße, Saison und Ihrer gewünschten Reiseart ab.',
			zanzibarEyebrow: 'Tagesausflüge auf Sansibar',
			priceColumnLabel: 'Typischer Preis (USD)',
			multiDayEyebrow: 'Mehrtägige Safaris',
			multiDaySubtext: 'Preise für Camps oder Lodges, pro Gast und Tag:',
			multiDayTiers: [
				{
					name: 'Budget (Camping-Safari)',
					price: '180–250 $ / Tag',
					desc: 'Gäste übernachten in Bodenzelten, Koch inklusive.',
				},
				{
					name: 'Mittelklasse (Lodges & Zeltcamps)',
					price: '300–500 $ / Tag',
					desc: 'Gäste übernachten in Standard-Lodges oder Zeltcamps mit guter Ausstattung.',
				},
				{
					name: 'Luxus-Safari',
					price: '600–1.500+ $ / Tag',
					desc: 'Hochwertige Luxus-Lodges oder exklusive Camps innerhalb der Parks, wie Serengeti oder Ngorongoro.',
				},
			],
			dayTripsEyebrow: 'Tagesausflüge ab Arusha',
			dayTripsSubtext: 'Am besten geeignet für Gäste, die abends zu ihrem Hotel in Arusha zurückkehren:',
			transfersEyebrow: 'Transfers & Flughafenabholung',
			transfersSubtext: 'Wenn Sie nur einen Transfer zwischen dem Flughafen und Ihrem Hotel in Arusha benötigen:',
		},
		packages: {
			eyebrow: 'Unsere Expeditionen',
			heading: 'Touren & Safari-Preise',
			subheading: 'Von Tagesausflügen rund um Arusha bis zu einer neuntägigen Reise durch die nördlichen Parks.',
			bookNow: 'Jetzt Buchen',
			priceOnRequest: 'Auf Anfrage',
			perPersonAbbrev: 'pp',
			daysMap: {
				'1 Day': '1 Tag',
				'3 Days': '3 Tage',
				'4 Days': '4 Tage',
				'9 Days': '9 Tage',
				'Multi-Day': 'Mehrtägig',
			},
			fromPrice: 'Ab',
			perPerson: 'pro Person',
			perCouple: 'pro Paar',
			tierNames: {
				camping: 'Camping-Safari',
				midRange: 'Mittelklasse-Hotels',
				luxury: 'Luxushotels',
			},
			mixedNote: 'Möchten Sie Camping und Hotelaufenthalte kombinieren? Preis auf Anfrage.',
		},
		contact: {
			eyebrow: 'Kontaktieren Sie Uns',
			heading: 'Der Berg wartet. Lassen Sie uns sprechen.',
			paragraph:
				'Teilen Sie uns Ihre Daten, Ihre Traumroute oder einfach eine grobe Idee mit — unser Team gestaltet daraus eine Reiseroute.',
			form: {
				name: 'Vollständiger Name',
				email: 'E-Mail',
				phone: 'Telefon / WhatsApp',
				optional: '(optional)',
				travelers: 'Reisende',
				destination: 'Reiseziel',
				destinationPlaceholder: 'Reiseziel wählen',
				notSure: 'Noch unsicher — helfen Sie mir bei der Wahl',
				safariStyle: 'Safari-Stil',
				dates: 'Bevorzugte Reisedaten',
				datesPlaceholder: 'z. B. Mitte Juli 2027, oder flexibel',
				message: 'Erzählen Sie uns von Ihrer Reise',
				submit: 'Anfrage Senden',
				errorRequired: 'Bitte geben Sie Ihren Namen, Ihre E-Mail und Ihr Reiseziel an.',
				successOpening: 'Ihre E-Mail-App wird mit der ausgefüllten Anfrage geöffnet — einfach senden.',
				subjectPrefix: 'Safari-Anfrage — ',
				noMessage: '(Keine zusätzliche Nachricht angegeben.)',
			},
		},
		footer: {
			tagline: 'Reiseveranstalter',
			journeyTagline: 'Die Reise Beginnt Hier',
		},
		popup: {
			message: 'Willkommen bei Egersund Safaris',
			tagline: 'Die Reise Beginnt Hier',
		},
	},
};

export function getDict(lang: Lang | string | undefined): Dict {
	if (lang === 'no' || lang === 'sv' || lang === 'da' || lang === 'zh' || lang === 'de') return dictionaries[lang];
	return dictionaries.en;
}
