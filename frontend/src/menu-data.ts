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
const main: [string, number][] = [['Ispeeshaal Goodinii', 1400], ['Foon Waddii, 1 kg', 2600], ['Foon Waddii, 1/2 kg', 1300], ['Foon Waddii, 1/4 kg', 650], ['Dulat', 500], ['Tibit', 1500], ['Kitfoo', 1500], ['Gon Lagoonnii', 2500], ['Ispeeshaal Qurxii', 1300]]
const additional: [string, number][] = [['Ispeeshaal Illillii', 400], ['Gommana Tibsii', 200], ['Shiroo Fasaasii', 200], ['Bey-Aynat', 200], ['Tagabinoo', 250]]
const drinks: [string, number][] = [['Biiraa', 120], ['Baddallee', 150], ['Henikan', 150], ['Aradaa', 150], ['Lallaafaa', 80], ['Bishaan, 2 L', 70], ['Wuskii', 8000], ['Kaamila(a)t', 1200], ['Akeeshaa', 2000], ['Gabbataa', 2000], ['Awaash', 600], ['Awaash Xiqaa', 300], ['Minii Jin', 350], ['Jaanboo', 90], ['Single Jaanboo', 70]]
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
export const menuItems: MenuItem[] = (Object.entries({ main, additional, drinks }) as [CategoryId, [string, number][]][]).flatMap(([category, items]) => items.map(([name, price], index) => {
  const id = `${category}-${index + 1}`
  return {
    id,
    name,
    price,
    category,
    availability: 'unconfirmed',
    confirmedImage: itemImages[id]
  }
}))
export const formatBirr = (amount: number) => new Intl.NumberFormat('en-ET', { maximumFractionDigits: 0 }).format(amount)
