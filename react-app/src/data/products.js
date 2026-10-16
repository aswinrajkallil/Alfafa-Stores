export const vegetableSidebarList = [
  'Potato',
  'Carrot',
  'Beet',
  'Cabbage',
  'Radish',
  'Tomatoes',
  'Cucumbers',
  'Onion',
  'kale',
];

export const fruitSidebarList = [
  'Strawberry',
  'Apples',
  'Grapes',
  'Peaches',
  'Apricots',
  'Oranges',
  'Raspberries',
  'Cherry',
];

export const productsData = {
  '10-carrot': {
    id: 10,
    name: 'Carrot',
    slug: '10-carrot',
    category: 'vegetables',
    categoryName: 'Vegetables',
    url: '/products/carrot/10-carrot.html',
    basePrice: 15.0,
    image: '/assets/sm-5b894f9d36f28-1.jpg',
    fullImage: '/assets/5b894f9d36f28-1.jpg',
    weights: [{ value: '15.0', label: '1000', text: '1000 GMC' }],
    description: ['fdfsd fds s'],
    isNewArrival: true,
    isBestSeller: true,
    dateAdded: '2026-01-01',
  },
  '14-orange': {
    id: 14,
    name: 'Orange',
    slug: '14-orange',
    category: 'fruits',
    categoryName: 'Fruits',
    url: '/products/oranges/14-orange.html',
    basePrice: 38.0,
    image: '/assets/sm-5bc595be4df7d-1.jpg',
    fullImage: '/assets/5bc595be4df7d-1.jpg',
    weights: [
      { value: '38.0', label: '1000', text: '1000 GMC' },
      { value: '50.0', label: '1500', text: '1500 GMC' },
    ],
    description: [
      'Lorem ipsum dolor sit amet, pri an veri debitis, no est omnes nostrud mandamus. Ius an magna elitr deterruisset, eros inani ullamcorper ius te. Ne feugiat recusabo repudiare vix, exerci appareat necessitatibus cum te. Ceteros nostrum vel no. Eos alii feugait urbanitas an, persius dolorem an pro.',
      'Eros natum vix ea. Primis eligendi mea ut. Ea mea quas adolescens complectitur, alii exerci quo cu. Vis numquam vivendum principes ex.',
      'Eum et nisl illum, tritani delicata salutandi te nec, et facer zril voluptatibus vix. Habeo putant mel ex. In graece nostrum pri, ad mea consul legere, ei cum novum facete veritus. Eius latine apeirian eu cum, no per elit nostro consetetur. An possim nostrud pri. Vix eros veri at, has dolorem signiferumque ex.',
      'Unum velit saperet mei no. Duo in hendrerit rationibus. Nec fugit corrumpit persecuti an. Probo omittam vivendum pro in, ea pro impetus saperet habemus.',
      'Vis ea elitr imperdiet voluptatibus, volumus reprehendunt no cum. Augue officiis et nec. Eos illum suavitate tincidunt id. Debet pertinacia duo ne, ius ex primis gloriatur incorrupte.',
    ],
    isNewArrival: true,
    isBestSeller: true,
    dateAdded: '2026-01-02',
  },
  '11-apples': {
    id: 11,
    name: 'Apples',
    slug: '11-apples',
    category: 'fruits',
    categoryName: 'Fruits',
    url: '/products/apples/11-apples.html',
    basePrice: 46.0,
    image: '/assets/sm-5b89530657e05-1.jpg',
    fullImage: '/assets/5b89530657e05-1.jpg',
    weights: [
      { value: '46.0', label: '550', text: '550 GMC' },
      { value: '50.0', label: '580', text: '580 GMC' },
    ],
    description: [
      'Lorem ipsum dolor sit amet, eos scripta sensibus posidonium ei, no cum dicant quidam. Pro legendos voluptatum philosophia ei, ipsum viris partiendo eu vim. Ceteros eleifend antiopam cum in. Vel homero accusamus accommodare in, homero inermis eligendi ne nam. Pro in meis falli, cum ne tollit accommodare, ea vel iuvaret voluptatum dissentiet.',
      'Fabulas contentiones ex eum, nec sumo mentitum ea. Brute civibus signiferumque ex vis, eius pericula his eu, epicuri detracto sea cu. Quo ei docendi invidunt, ius eripuit euismod te. Eos alienum dignissim ut, vis audire vocibus qualisque ei. Duis adipisci id vim, assum laudem albucius quo eu. Etiam utroque delicata id qui, et dico choro mel.',
    ],
    isNewArrival: true,
    isBestSeller: true,
    dateAdded: '2026-01-03',
  },
};

export const allProductsList = Object.values(productsData);
export const vegetableProducts = allProductsList.filter((p) => p.category === 'vegetables');
export const fruitProducts = allProductsList.filter((p) => p.category === 'fruits');
