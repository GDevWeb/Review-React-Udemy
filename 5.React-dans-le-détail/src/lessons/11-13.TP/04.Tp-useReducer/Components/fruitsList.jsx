import { nanoid } from "nanoid";
import productPicture from "../img/products/indexImgProducts";

const fruitsList = [
  {
    id: nanoid(8),
    fruitName: ["Apple", "Pomme"],
    category: "fruit",
    origin: ["Florida", "Pomme"],
    price: 1.49,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgApple,
  },
  {
    id: nanoid(8),
    fruitName: ["Apricot", "Abricot"],
    category: "fruit",
    origin: ["Maroc", "Maroc"],
    price: 1.69,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgApricot,
  },
  {
    id: nanoid(8),
    fruitName: ["Banana", "Banane"],
    category: "fruit",
    origin: ["Ivory Coast", "Côte d'Ivoire"],
    price: 1.99,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgBanana,
  },
  {
    id: nanoid(8),
    fruitName: ["BlueBerry", "Myrtilles"],
    category: "fruit",
    origin: ["France", "France"],
    price: 0.99,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgBlueBerry,
  },
  {
    id: nanoid(8),
    fruitName: ["Cherry", "Cerise"],
    category: "fruit",
    origin: ["France", "France"],
    price: 4.99,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgCherry,
  },
  {
    id: nanoid(8),
    fruitName: ["Kiwi", "Kiwi"],
    category: "fruit",
    origin: ["Florida", "Floride"],
    price: 0.99,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgKiwi,
  },
  {
    id: nanoid(8),
    fruitName: ["Lemon ", "Citron"],
    category: "fruit",
    origin: ["Italy", "Italie"],
    price: 0.99,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgLemon,
  },
  {
    id: nanoid(8),
    fruitName: ["Mango", "Mangue"],
    category: "fruit",
    origin: ["Ivory Coast", "Côte d'Ivoire"],
    price: 1.99,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgMango,
  },
  {
    id: nanoid(8),
    fruitName: ["Avocado", "Avocat"],
    category: "fruit",
    origin: ["Spain", "Espagne"],
    price: 0.99,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgAvocado,
  },
  {
    id: nanoid(8),
    fruitName: ["StrawBerry", "Fraise"],
    category: "fruit",
    origin: ["France", "France"],
    price: 2.99,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgStrawBerry,
  },
  {
    id: nanoid(8),
    fruitName: ["Grapes", "Raisin"],
    category: "fruit",
    origin: ["Italy", "Italie"],
    price: 2.99,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgGrapes,
  },
  {
    id: nanoid(8),
    fruitName: ["Watermelon", "Pastèque"],
    category: "fruit",
    origin: ["Spain", "Espagne"],
    price: 2.99,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgWaterMelon,
  },
  {
    id: nanoid(8),
    fruitName: ["Dragonfruit", "Fruit du dragon"],
    category: "fruit",
    origin: ["Vietnam", "Vietnam"],
    price: 2.49,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgDragonFruit,
  },
  {
    id: nanoid(8),
    fruitName: ["Orange", "Orange"],
    category: "fruit",
    origin: ["Florida", "Floride"],
    price: 0.49,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgOrange,
  },
  {
    id: nanoid(8),
    fruitName: ["Papaya", "Papaye"],
    category: "fruit",
    origin: ["Ivory Coast", "Côte d'Ivoire"],
    price: 1.49,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgPapaya,
  },
  {
    id: nanoid(8),
    fruitName: ["Pineapple", "Ananas"],
    category: "fruit",
    origin: ["Ivory Coast", "Côte d'Ivoire"],
    price: 1.49,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgPineApple,
  },
  {
    id: nanoid(8),
    fruitName: ["Pomegranate", "Grenade"],
    category: "fruit",
    origin: ["Vietnam", "Vietnam"],
    price: 1.49,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgPomeGranate,
  },
  {
    id: nanoid(8),
    fruitName: ["Mangosteen", "Mangoustan"],
    category: "fruit",
    origin: ["Vietnam", "Vietnam"],
    price: 1.49,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgMangosteen,
  },
  {
    id: nanoid(8),
    fruitName: ["Pear", "Poire"],
    category: "fruit",
    origin: ["France", "France"],
    price: 1.49,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgPear,
  },
  {
    id: nanoid(8),
    fruitName: ["Plums", "Prune"],
    category: "fruit",
    origin: ["France", "France"],
    price: 1.49,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgPlums,
  },
  {
    id: nanoid(8),
    fruitName: ["GrapeFruit", "Pamplemousse"],
    category: "fruit",
    origin: ["France", "France"],
    price: 0.99,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgGrapeFruit,
  },
  {
    id: nanoid(8),
    fruitName: ["Melon", "Melon"],
    category: "fruit",
    origin: ["France", "France"],
    price: 1.49,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgMelon,
  },
  {
    id: nanoid(8),
    fruitName: ["Damson", "Quetsche"],
    category: "fruit",
    origin: ["France", "France"],
    price: 1.49,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgDamson,
  },
  {
    id: nanoid(8),
    fruitName: ["Papaya", "Papaye"],
    category: "fruit",
    origin: ["France", "France"],
    price: 1.99,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgPapaya,
  },
  {
    id: nanoid(8),
    fruitName: ["Coconut", "Noix de coco"],
    category: "fruit",
    origin: ["Tahiti", "Tahiti"],
    price: 1.49,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgCoconut,
  },
  {
    id: nanoid(8),
    fruitName: ["Peach", "Pêche"],
    category: "fruit",
    origin: ["France", "France"],
    price: 2.49,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgPeach,
  },
  {
    id: nanoid(8),
    fruitName: ["Custard Apple", "Chérimolier"],
    category: "fruit",
    origin: ["India", "Inde"],
    price: 1.49,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgCustardApple,
  },
  {
    id: nanoid(8),
    fruitName: ["Guava", "Goyave"],
    category: "fruit",
    origin: ["Brazil", "Brésil"],
    price: 1.79,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgGuava,
  },
  {
    id: nanoid(8),
    fruitName: ["Pumpkin", "Citrouille"],
    category: "fruit",
    origin: ["Brazil", "Brésil"],
    price: 2.99,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgPumpkin,
  },
  {
    id: nanoid(8),
    fruitName: ["Lychee", "Litchi"],
    category: "fruit",
    origin: ["China", "Chine"],
    price: 1.29,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgLychee,
  },
  {
    id: nanoid(8),
    fruitName: ["Sapodilla", "Sapotille"],
    category: "fruit",
    origin: ["Caribbean", "Caraïbes"],
    price: 2.99,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgSapodilla,
  },
  {
    id: nanoid(8),
    fruitName: ["Dates", "Dates"],
    category: "fruit",
    origin: ["Sahara", "Sahara"],
    price: 2.99,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgDates,
  },
  {
    id: nanoid(8),
    fruitName: ["Fig", "Figue"],
    category: "fruit",
    origin: ["Sahara", "Sahara"],
    price: 2.99,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgFig,
  },
  {
    id: nanoid(8),
    fruitName: ["Grewia", "Grewia"],
    category: "fruit",
    origin: ["Asia", "Asia"],
    price: 1.99,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgGrewia,
  },
  {
    id: nanoid(8),
    fruitName: ["Carambola", "Carambole"],
    category: "fruit",
    origin: ["Asia", "Asia"],
    price: 1.99,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgCarambola,
  },
  {
    id: nanoid(8),
    fruitName: ["Cranberry", "Cranberry"],
    category: "fruit",
    origin: ["U.S.A", "U.S.A"],
    price: 1.49,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgCranberry,
  },
  {
    id: nanoid(8),
    fruitName: ["Hanepoot", "Raisin blanc"],
    category: "fruit",
    origin: ["France", "France"],
    price: 1.69,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgHanepoot,
  },
  {
    id: nanoid(8),
    fruitName: ["JackFruit", "Jacquier"],
    category: "fruit",
    origin: ["India", "Inde"],
    price: 1.49,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgJackFruit,
  },
  {
    id: nanoid(8),
    fruitName: ["JamonFruit", "Jamblon"],
    category: "fruit",
    origin: ["India", "Inde"],
    price: 1.99,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgJamonFruit,
  },
  {
    id: nanoid(8),
    fruitName: ["Mulberry", "Mûre"],
    category: "fruit",
    origin: ["Asia", "Asia"],
    price: 2.49,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgMulberry,
  },
  {
    id: nanoid(8),
    fruitName: ["Persimmon", "Kaki"],
    category: "fruit",
    origin: ["China", "China"],
    price: 1.49,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgPersimmon,
  },
  {
    id: nanoid(8),
    fruitName: ["Quince", "Coing"],
    category: "fruit",
    origin: ["Saudi Arabia", "Arabia"],
    price: 2.49,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgQuince,
  },
  {
    id: nanoid(8),
    fruitName: ["Redcurrant", "Groseilles"],
    category: "fruit",
    origin: ["Southern America", "Amérique du Sud"],
    price: 2.49,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgRedCurrant,
  },
  {
    id: nanoid(8),
    fruitName: ["Jujube", "Jujube"],
    category: "fruit",
    origin: ["Central Asia", "Asie Centrale"],
    price: 2.99,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgJujube,
  },
  {
    id: nanoid(8),
    fruitName: ["Elderberry", "Sureau"],
    category: "fruit",
    origin: ["Greece", "Grèce"],
    price: 1.99,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgElderBerry,
  },
  {
    id: nanoid(8),
    fruitName: ["Olive", "Olive"],
    category: "fruit",
    origin: ["Italy", "Italie"],
    price: 4.99,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgOlive,
  },
  {
    id: nanoid(8),
    fruitName: ["Tamarind", "Tamarin"],
    category: "fruit",
    origin: ["Asia", "Asie"],
    price: 2.99,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgTamarind,
  },
  {
    id: nanoid(8),
    fruitName: ["Cashew Apple", "Pomme de Cajou"],
    category: "fruit",
    origin: ["Brazil", "Brésil"],
    price: 1.99,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgCashewApple,
  },
  {
    id: nanoid(8),
    fruitName: ["Sugarcane", "Canne à sucre"],
    category: "fruit",
    origin: ["New Guinea", "Nouvelle Guinée"],
    price: 1.99,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgSugarCane,
  },
  {
    id: nanoid(8),
    fruitName: ["Shaddock", "Pomelo"],
    category: "fruit",
    origin: ["Malaysia", "Malaisie"],
    price: 1.49,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgShaddock,
  },
  {
    id: nanoid(8),
    fruitName: ["GooseBerry", "Groseille"],
    category: "fruit",
    origin: ["Malaysia", "Malaisie"],
    price: 1.99,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgGooseBerry,
  },
  {
    id: nanoid(8),
    fruitName: ["Durian", "Durian"],
    category: "fruit",
    origin: ["Asia", "Asie"],
    price: 2.49,
    package: "unity",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgDurian,
  },
  {
    id: nanoid(8),
    fruitName: ["Raspberry", "Framboise"],
    category: "fruit",
    origin: ["France", "France"],
    price: 1.99,
    package: "1kg",
    totalQuantity: 100,
    status: "inStock",
    picture: productPicture.imgRaspBerry,
  },
];

export default fruitsList;
