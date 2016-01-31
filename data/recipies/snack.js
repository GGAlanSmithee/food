import {
    SourMilk,
    BlueBerries,
    DriedApricot,
    Peanut,
    PeanutButter,
    Banana,
    CottageCheese,
    AppleSauce,
    Cheese,
    GreekYogurt,
    Granola
} from '../base/ingredients';

export const SourMilkWithBlueBerries = {
    id: 301,
    name: 'Filmjölk med blåbär',
    ingredients: [
        { amount : 0.5, ingredient: SourMilk },
        { amount : 1, ingredient: BlueBerries }
    ]
};

export const FruitAndCheese = {
    id: 302,
    name: 'Frukt med ost',
    ingredients: [
        { amount : 0.2, ingredient: DriedApricot },
        { amount : 0.1, ingredient: Cheese }
    ]
};

export const PeanutSnack = {
    id: 303,
    name: 'Jordnötter',
    ingredients: [
        { amount : 0.25, ingredient: Peanut }
    ]
};

export { PeanutSnack as Peanut };

export const BananaWithPeanutButter = {
    id: 304,
    name: 'Banan med jordnötssmör',
    ingredients: [
        { amount : 0.5, ingredient: Banana },
        { amount : 0.5, ingredient: PeanutButter }
    ]
};

export const CottageCheeseWithAppleSauce = {
    id: 305,
    name: 'Keso med äppelsås',
    ingredients: [
        { amount : 0.75, ingredient: CottageCheese },
        { amount : 0.5, ingredient: AppleSauce }
    ]
};

export const GreekYoghurtWithGranola = {
    id: 306,
    name: 'Grekisk yoghurt med granola',
    ingredients: [
        { amount : 0.5, ingredient: GreekYogurt },
        { amount : 0.25, ingredient: Granola }
    ]
};

// export const GreekYoghurtWithGranola = {
//     id: 307,
//     name: 'Grekisk yoghurt med granola',
//     ingredients: [
//         { amount : 0.5, ingredient: GreekYogurt },
//         { amount : 0.25, ingredient: Granola }
//     ]
// };