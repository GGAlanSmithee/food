import {
    Egg,
    Tomato,
    Avocado,
    WholeWheatBread,
    Onion,
    SourMilk,
    Granola,
    Oatmeal,
    Milk,
    Chicken
} from '../base/ingredients';

export const EggBreakfast = {
    id: 101,
    name: 'Ägg och tomat macka',
    ingredients: [
        { amount : 1, ingredient: Egg },
        { amount : 1, ingredient: Tomato },
        { amount : 1, ingredient: WholeWheatBread }
    ]
};

export const AvocadoBreakfast = {
    id: 102,
    name: 'Avokado och lök macka',
    ingredients: [
        { amount : 0.2, ingredient : Avocado },
        { amount : 0.5, ingredient : Onion },
        { amount : 1, ingredient: WholeWheatBread }
    ]
};

export const SourMilkAndGranolaBreakfast = {
    id: 103,
    name: 'Filmjölk med Granola',
    ingredients: [
        { amount : 1, ingredient : SourMilk },
        { amount : 0.5, ingredient : Granola }
    ]
};

export const MilkAndOatmealBreakfast = {
    id: 104,
    name: 'Havregrynsgröt med mjölk',
    ingredients: [
        { amount : 1, ingredient : Milk },
        { amount : 1, ingredient : Oatmeal }
    ]
};

export const ChickenSandwich = {
    id: 105,
    name: 'Kycklingmacka',
    ingredients: [
        { amount : 0.5, ingredient : Chicken },
        { amount : 1, ingredient : WholeWheatBread }
    ]
};