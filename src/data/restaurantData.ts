export interface MenuItem {
  id: string;
  name: string;
  category: 'burgers' | 'combos' | 'sides' | 'drinks';
  categoryLabel: string;
  description: string;
  priceFormatted: string;
  priceValue?: number;
  ingredients: string[];
  image: string;
  isDemonstrative: boolean;
  highlight?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface DaySchedule {
  dayName: string;
  dayShort: string;
  isOpen: boolean;
  hours: string;
  openHour?: number;
  closeHour?: number;
}

export interface BurgerLayer {
  id: number;
  title: string;
  desc: string;
  tag: string;
  alt: string;
  image: string;
}

export const restaurantData = {
  brand: {
    name: 'CLOUD',
    shortDescriptor: 'Hamburgueria Urbana Contemporânea',
    tagline: 'Feito na chapa. Servido com personalidade.',
    heroHeadline: 'SEU NOVO\nLUGAR FAVORITO.',
    heroSubhead: 'Hambúrguer de verdade, ingredientes selecionados e sabor que merece uma pausa.',
    statementTitle: 'FEITO NA CHAPA. SERVIDO COM PERSONALIDADE.',
    statementSubtitle: 'Ingredientes selecionados, preparo cuidadoso e aquele sabor que faz você querer voltar.',
    spotlightTitle: 'POUCOS INGREDIENTES. MUITO CARÁTER.',
    spotlightText: 'Um bom hambúrguer não precisa de exageros. Precisa de ingredientes que combinam, preparo cuidadoso e sabor em cada mordida.',
    aboutTitle: 'MAIS QUE UM HAMBÚRGUER. UM PONTO DE ENCONTRO.',
    aboutText: 'A CLOUD nasceu para reunir boa comida, personalidade e momentos compartilhados. Um lugar para encontrar os amigos, fazer uma pausa na rotina e aproveitar um hambúrguer do jeito que ele merece.',
    aboutSubtext: 'Chapa quente, carnes selecionadas, pão selado com manteiga e receitas autorais pensadas para quem aprecia o hambúrguer autêntico em sua melhor forma.',
  },
  contact: {
    phoneFormatted: '(11) 98765-4321',
    whatsappNumber: '5511987654321',
    whatsappDefaultMessage: 'Olá, equipe CLOUD! Gostaria de saber mais sobre a hamburgueria e fazer um pedido.',
    instagramHandle: '@cloud.hamburgueria',
    instagramUrl: 'https://instagram.com/cloud.hamburgueria',
    email: 'contato@cloudburger.com.br',
  },
  location: {
    statusNote: 'Configuração demonstrativa para demonstração comercial',
    street: 'Rua Augusta, 1850',
    neighborhood: 'Consolação',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01412-100',
    referencePoint: 'A 2 quadras da Avenida Paulista',
    googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Rua+Augusta+1850+Sao+Paulo+SP',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Rua+Augusta+1850+Sao+Paulo&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  schedule: [
    { dayName: 'Segunda-feira', dayShort: 'Seg', isOpen: false, hours: 'Fechado para descanso da equipe' },
    { dayName: 'Terça-feira', dayShort: 'Ter', isOpen: true, hours: '18:00 às 23:00', openHour: 18, closeHour: 23 },
    { dayName: 'Quarta-feira', dayShort: 'Qua', isOpen: true, hours: '18:00 às 23:00', openHour: 18, closeHour: 23 },
    { dayName: 'Quinta-feira', dayShort: 'Qui', isOpen: true, hours: '18:00 às 23:30', openHour: 18, closeHour: 23.5 },
    { dayName: 'Sexta-feira', dayShort: 'Sex', isOpen: true, hours: '18:00 às 00:30', openHour: 18, closeHour: 24.5 },
    { dayName: 'Sábado', dayShort: 'Sáb', isOpen: true, hours: '17:30 às 01:00', openHour: 17.5, closeHour: 25 },
    { dayName: 'Domingo', dayShort: 'Dom', isOpen: true, hours: '17:30 às 23:00', openHour: 17.5, closeHour: 23 },
  ] as DaySchedule[],
  images: {
    heroBurger: '/images/hero_tasty_burger_1792540688712.jpg',
    spotlightBurger: '/images/spotlight_tasty_burger_1792540688126.jpg',
    specialBurger: '/images/menu_tasty_special_1792540689578.jpg',
    crispyFries: '/images/menu_tasty_fries_1792540690345.jpg',
    chefKitchen: '/images/story_tasty_chef_1792540690295.jpg',
    restaurantAmbiance: '/images/gallery_tasty_ambiance_1792540690823.jpg',
    isolatedBurger: '/images/isolated_cloud_burger_1792541785844.jpg',
    dinerBackground: '/images/hero_diner_background_1792542178939.jpg',
    isolatedCheddar: '/images/isolated_cheddar_melt_1792542424218.jpg',
    isolatedPatties: '/images/isolated_smash_patties_1792542424036.jpg',
    isolatedBaconPickles: '/images/isolated_bacon_pickles_1792542425472.jpg',
  },
  menuItems: [
    {
      id: 'cloud-classic',
      name: 'CLOUD Classic Cheese',
      category: 'burgers',
      categoryLabel: 'Hambúrgueres',
      description: 'Blend bovino grelhado na chapa de ferro, cheddar derretido generoso, cebola caramelizada no ponto e maionese artesanal no pão brioche dourado.',
      priceFormatted: 'R$ 38,00',
      priceValue: 38,
      ingredients: [
        'Blend bovino artesanal 180g',
        'Cheddar derretido cremoso',
        'Cebola caramelizada',
        'Tomate fresco e alface',
        'Pão brioche selado',
      ],
      image: '/images/hero_tasty_burger_1792540688712.jpg',
      isDemonstrative: true,
      highlight: 'Mais pedido da casa',
    },
    {
      id: 'cloud-bacon-smash',
      name: 'Double Smash & Crispy Bacon',
      category: 'burgers',
      categoryLabel: 'Hambúrgueres',
      description: 'Dois smash burgers com crosta crocante caramelizada, cheddar duplo derretido, tiras crocantes de bacon artesanal e molho especial da casa.',
      priceFormatted: 'R$ 44,00',
      priceValue: 44,
      ingredients: [
        'Dois smash burgers na chapa',
        'Bacon artesanal crocante',
        'Cheddar duplo derretido',
        'Picles artesanal',
        'Pão com gergelim',
      ],
      image: '/images/spotlight_tasty_burger_1792540688126.jpg',
      isDemonstrative: true,
      highlight: 'Favorito dos clientes',
    },
    {
      id: 'cloud-special-plate',
      name: 'CLOUD Special & Fritas',
      category: 'burgers',
      categoryLabel: 'Hambúrgueres',
      description: 'Hambúrguer alto com queijo derretido e bacon crocante, servido em prato especial com porção individual de batatas fritas douradas.',
      priceFormatted: 'R$ 48,00',
      priceValue: 48,
      ingredients: [
        'Burger artesanal 180g',
        'Bacon crocante',
        'Queijo derretido',
        'Porção de batatas douradas',
        'Dip de molho especial',
      ],
      image: '/images/menu_tasty_special_1792540689578.jpg',
      isDemonstrative: true,
      highlight: 'Linha Especial',
    },
    {
      id: 'cloud-combo-complete',
      name: 'Combo CLOUD Burger + Fritas',
      category: 'combos',
      categoryLabel: 'Combos',
      description: 'Nosso clássico artesanal acompanhado de batatas rústicas com alecrim e bebida gelada à sua escolha.',
      priceFormatted: 'R$ 54,00',
      priceValue: 54,
      ingredients: [
        'Hambúrguer à escolha',
        'Batatas crocantes com alecrim',
        'Molho caseiro',
        'Bebida à escolha',
      ],
      image: '/images/hero_tasty_burger_1792540688712.jpg',
      isDemonstrative: true,
      highlight: 'Combo individual',
    },
    {
      id: 'cloud-rustic-fries',
      name: 'Batatas Crocantes com Alecrim',
      category: 'sides',
      categoryLabel: 'Acompanhamentos',
      description: 'Batatas selecionadas, fritas sequinhas e crocantes, salpicadas com sal marinho e ramos de alecrim fresco com potinho de molho da casa.',
      priceFormatted: 'R$ 24,00',
      priceValue: 24,
      ingredients: [
        'Batatas douradas crocantes',
        'Sal marinho e alecrim fresco',
        'Dip de maionese especial da casa',
      ],
      image: '/images/menu_tasty_fries_1792540690345.jpg',
      isDemonstrative: true,
      highlight: 'Super crocante',
    },
    {
      id: 'cloud-craft-drinks',
      name: 'Chopes & Bebidas Artesanais',
      category: 'drinks',
      categoryLabel: 'Bebidas',
      description: 'Chopes artesanais locais servidos gelados na torneira, refrigerantes, sodas italianas e água mineral.',
      priceFormatted: 'A partir de R$ 14,00',
      priceValue: 14,
      ingredients: [
        'Chopes artesanais gelados',
        'Refrigerantes e água',
        'Sodas especiais',
      ],
      image: '/images/gallery_tasty_ambiance_1792540690823.jpg',
      isDemonstrative: true,
      highlight: 'Torneiras locais',
    },
  ] as MenuItem[],
  gallery: [
    {
      id: 'gal-1',
      title: 'Montagem na Cozinha',
      category: 'Preparo',
      image: '/images/story_tasty_chef_1792540690295.jpg',
      caption: 'Preparo cuidadoso com ingredientes frescos montados na hora.',
    },
    {
      id: 'gal-2',
      title: 'Classic Cheese Burger',
      category: 'Hambúrgueres',
      image: '/images/hero_tasty_burger_1792540688712.jpg',
      caption: 'Pão brioche dourado, carne suculenta e queijo derretido.',
    },
    {
      id: 'gal-3',
      title: 'Ambiente Urbano & Acolhedor',
      category: 'Salão',
      image: '/images/gallery_tasty_ambiance_1792540690823.jpg',
      caption: 'Espaço confortável com iluminação suave para noites descontraídas.',
    },
    {
      id: 'gal-4',
      title: 'Double Smash & Bacon',
      category: 'Hambúrgueres',
      image: '/images/spotlight_tasty_burger_1792540688126.jpg',
      caption: 'Duas carnes com crosta dourada na chapa e bacon crocante.',
    },
    {
      id: 'gal-5',
      title: 'Batatas Douradas com Alecrim',
      category: 'Acompanhamentos',
      image: '/images/menu_tasty_fries_1792540690345.jpg',
      caption: 'Fritas sequinhas servidas com molho artesanal.',
    },
    {
      id: 'gal-6',
      title: 'Burger Special & Fritas',
      category: 'Hambúrgueres',
      image: '/images/menu_tasty_special_1792540689578.jpg',
      caption: 'Prato com hambúrguer artesanal e cestinha de fritas.',
    },
  ] as GalleryItem[],
  burgerLayers: [
    {
      id: 0,
      title: 'O Lanche Completo & Brioche',
      desc: 'Massa leve e amanteigada de brioche com gergelim tostado, harmonizando perfeitamente com todas as camadas suculentas.',
      tag: 'Equilíbrio Total',
      alt: 'Hambúrguer artesanal completo da CLOUD com pão brioche, cheddar e smash duplo',
      image: '/images/isolated_cloud_burger_1792541785844.jpg',
    },
    {
      id: 1,
      title: 'Cheddar Duplo Fundido',
      desc: 'Queijo cheddar legítimo generosamente derretido sobre a carne quente, escorrendo em cascata cremosa.',
      tag: 'Cremosidade Pura',
      alt: 'Carne com queijo cheddar duplo derretido em abundância',
      image: '/images/isolated_cheddar_melt_1792542424218.jpg',
    },
    {
      id: 2,
      title: 'Double Smash 180g na Chapa',
      desc: 'Dois discos de carne 100% fresca prensados em chapa de alta temperatura. Crosta crocante e suculência preservada.',
      tag: 'Coração da Chapa',
      alt: 'Dois smash burgers com crosta caramelizada e flor de sal',
      image: '/images/isolated_smash_patties_1792542424036.jpg',
    },
    {
      id: 3,
      title: 'Bacon Crocante, Picles & Molho',
      desc: 'Fatias de bacon artesanal defumado, picles crocantes cortados finos e maionese especial da casa.',
      tag: 'Crocância & Acidez',
      alt: 'Tiras de bacon crocante com picles artesanal e molho da casa',
      image: '/images/isolated_bacon_pickles_1792542425472.jpg',
    },
  ] as BurgerLayer[],
};
