export type CategoryId = 'main' | 'additional' | 'drinks'
export type MenuItem = {
  id: string
  name: string
  price: number
  category: CategoryId
  availability: 'unconfirmed' | 'unavailable'
  verifiedDescription?: string
  confirmedImage?: string
  translations?: { am?: string; om?: string }
}
export const categories: { id: CategoryId; label: string; draftLabel: string; icon: string }[] = [
  { id: 'main', label: 'Main dishes', draftLabel: 'Gosa Nyataa', icon: 'meal' },
  { id: 'additional', label: 'Additional dishes', draftLabel: 'Nyataa Sooma(a)', icon: 'meal' },
  { id: 'drinks', label: 'Drinks', draftLabel: 'Gosa Dhugaatii', icon: 'coffee' },
]
const main: [string, number, { am?: string; om?: string }][] = [
  ['Ispeeshaal Goodinii', 1400, { am: 'ጎደኝ ጥብስ', om: 'Ispeeshaal Goodinii' }],
  ['Foon Waddii, 1 kg', 2600, { am: 'ጥብስ, 1 ኪሎ', om: 'Foon Waddii, 1 kg' }],
  ['Foon Waddii, 1/2 kg', 1300, { am: 'ጥብስ, ½ ኪሎ', om: 'Foon Waddii, 1/2 kg' }],
  ['Foon Waddii, 1/4 kg', 650, { am: 'ጥብስ, ¼ ኪሎ', om: 'Foon Waddii, 1/4 kg' }],
  ['Dulat', 500, { am: 'ዱለት', om: 'Dulat' }],
  ['Tibit', 1500, { am: 'ትቢት', om: 'Tibit' }],
  ['Kitfoo', 1500, { am: 'ክትፎ', om: 'Kitfoo' }],
  ['Gon Lagoonnii', 2500, { am: 'የቤቱ አሰኝ/ጎን ለጎን', om: 'Gon Lagoonnii' }],
  ['Ispeeshaal Qurxii', 1300, { am: 'ጥሬ ስጋ', om: 'Ispeeshaal Qurxii' }],
  ['Sheklaa Tibsii', 1500, { am: 'ሽክላ ጥብስ', om: 'Sheklaa Tibsii' }],
  ['Gored Gored', 1500, { am: 'ጎረድ ጎረድ', om: 'Gored Gored' }],
  ['Senber', 1300, { am: 'ሠንበር', om: 'Senber' }],
  ['Walaandee', 1300, { am: 'ወላንዴ', om: 'Walaandee' }],
  ['Gaaz Saayit', 1400, { am: 'ጋዝ ሳይት', om: 'Gaaz Saayit' }],
  ['Gaaz Saayit Sheklaa', 1500, { am: 'ጋዝ ሳይት ሽክላ', om: 'Gaaz Saayit Sheklaa' }],
  ['Liiwit', 1300, { am: 'ልውጥ', om: 'Liiwit' }],
]
const additional: [string, number, { am?: string; om?: string }][] = [
  ['Ispeeshaal Illillii', 400, { am: 'ኢሊሊ ልዩ ማዕድ', om: 'Ispeeshaal Illillii' }],
  ['Gommana Tibsii', 200, { am: 'ጎመን ጥብስ', om: 'Gommana Tibsii' }],
  ['Shiroo Fasaasii', 200, { am: 'ሽሮ ፈሳሽ', om: 'Shiroo Fasaasii' }],
  ['Bey-Aynat', 200, { am: 'በያይነቱ', om: 'Bey-Aynat' }],
  ['Tagabinoo', 250, { am: 'ተጋቢኖ', om: 'Tagabinoo' }],
]
const drinks: [string, number, { am?: string; om?: string }][] = [
  ['Biiraa', 120, { am: 'ቢራ', om: 'Biiraa' }],
  ['Baddallee', 150, { am: 'በደሌ ቢራ', om: 'Baddallee' }],
  ['Henikan', 150, { am: 'ሄኔከን', om: 'Henikan' }],
  ['Aradaa', 150, { am: 'አራዳ', om: 'Aradaa' }],
  ['Lallaafaa', 80, { am: 'ለስላሳ', om: 'Lallaafaa' }],
  ['Bishaan, 2 L', 70, { am: 'ውሃ, 2 ሊትር', om: 'Bishaan, 2 L' }],
  ['Wuskii', 8000, { am: 'ውስኪ', om: 'Wuskii' }],
  ['Kaamila(a)t', 1200, { am: 'ካሚላት', om: 'Kaamila(a)t' }],
  ['Akeeshaa', 2000, { am: 'አኬሻ', om: 'Akeeshaa' }],
  ['Gabbataa', 2000, { am: 'ገበታ ወይን', om: 'Gabbataa' }],
  ['Awaash', 600, { am: 'አዋሽ ወይን', om: 'Awaash' }],
  ['Awaash Xiqaa', 300, { am: 'አዋሽ አነስተኛ', om: 'Awaash Xiqaa' }],
  ['Minii Jin', 350, { am: 'ሚኒ ጅን', om: 'Minii Jin' }],
  ['Jaanboo', 90, { am: 'ጃምቦ ድራፍት', om: 'Jaanboo' }],
  ['Single Jaanboo', 70, { am: 'ሲንግል ድራፍት', om: 'Single Jaanboo' }],
]
const itemImages: Record<string, string> = {
  'main-1': '/images/menu/ispeeshaal-goodinii.jpg',
  'main-2': '/images/menu/foon-waddii.jpg',
  'main-3': '/images/menu/foon-waddii.jpg',
  'main-4': '/images/menu/foon-waddii.jpg',
  'main-5': '/images/menu/dulat.jpg',
  'main-6': '/images/menu/tibit.jpg',
  'main-7': '/images/menu/kitfoo.jpg',
  'main-8': '/images/menu/gon-lagoonnii.jpg',
  'main-9': '/images/menu/ispeeshaal-qurxii.jpg',
  'main-10': '/images/menu/shekla-tibs.jpg',
  'main-11': '/images/menu/gored-gored.jpg',
  'main-12': '/images/menu/senber.jpg',
  'main-13': '/images/menu/wolande.jpg',
  'main-14': '/images/menu/gaze-sayt.jpg',
  'main-15': '/images/menu/gaze-sayt-shekla.jpg',
  'main-16': '/images/menu/liwit.jpg',
  'additional-1': '/images/ethiopian-sharing-platter.jpg',
  'additional-2': '/images/menu/gommana-tibsii.jpg',
  'additional-3': '/images/menu/shiroo-fasaasii.jpg',
  'additional-4': '/images/menu/bey-aynat.jpg',
  'additional-5': '/images/menu/tagabinoo.jpg',
  'drinks-1': '/images/menu/biiraa.jpg',
  'drinks-2': '/images/menu/baddallee.jpg',
  'drinks-3': '/images/menu/henikan.jpg',
  'drinks-4': '/images/menu/aradaa.jpg',
  'drinks-5': '/images/menu/lallaafaa.png',
  'drinks-6': '/images/menu/bishaan.jpg',
  'drinks-7': '/images/menu/wuskii.jpg',
  'drinks-8': '/images/menu/kaamilaat.jpg',
  'drinks-9': '/images/menu/akeeshaa.jpg',
  'drinks-10': '/images/menu/gabbataa.jpg',
  'drinks-11': '/images/menu/awaash.jpg',
  'drinks-12': '/images/menu/awaash.jpg',
  'drinks-13': '/images/menu/minii-jin.png',
  'drinks-14': '/images/menu/jaanboo.jpg',
  'drinks-15': '/images/menu/jaanboo.jpg',
}

// Draft transcription supplied by the user; stable IDs keep cart references language-independent.
export const menuItems: MenuItem[] = (Object.entries({ main, additional, drinks }) as [CategoryId, [string, number, { am?: string; om?: string }][]][]).flatMap(([category, items]) => items.map(([name, price, translations], index) => {
  const id = `${category}-${index + 1}`
  return {
    id,
    name,
    price,
    category,
    availability: 'unconfirmed',
    confirmedImage: itemImages[id],
    translations
  }
}))
export const formatBirr = (amount: number) => new Intl.NumberFormat('en-ET', { maximumFractionDigits: 0 }).format(amount)
