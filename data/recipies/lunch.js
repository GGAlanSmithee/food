import {
    Chicken,
    Olives,
    Onion,
    Tuna,
    Tomato,
    Mayonnaise,
    Egg,
    TurkeyBacon,
    Water,
    Paprica,
    LettuceLeaf,
    TortillaBread,
    FetaCheese,
    MiniBaguette,
    FishStick,
    Carrot,
    Lemon,
    WhiteBeans,
    Bulgur,
    WokVegetables,
    Quark
} from '../base/ingredients';

export const TunaSalad = {
    id: 201,
    name: 'Tonfisk sallad',
    ingredients: [
        { amount: 1, ingredient: Tuna },
        { amount: 1, ingredient: Onion },
        { amount: 1, ingredient: Tomato },
        { amount: 1, ingredient: Mayonnaise }
    ]
};

export const Omelette = {
    id: 202,
    name: 'Omelette',
    ingredients: [
        { amount: 1, ingredient: Onion },
        { amount: 0.5, ingredient: TurkeyBacon },
        { amount: 1, ingredient: Tomato },
        { amount: 2, ingredient: Egg },
        { amount: 2, ingredient: Water },
        { amount: 0.5, ingredient: Paprica }
    ]
};

export const ChickenWraps = {
    id: 203,
    name: 'Kyckling wraps',
    ingredients: [
        { amount: 0.5, ingredient: Chicken },
        { amount: 1, ingredient: TortillaBread },
        { amount: 2, ingredient: LettuceLeaf },
        { amount: 1, ingredient: Tomato }
    ]
};

export const ChickenSalad = {
    id: 204,
    name: 'Kyckling sallad',
    ingredients: [
        { amount: 0.5, ingredient: Chicken },
        { amount: 0.2, ingredient: Olives },
        { amount: 2, ingredient: LettuceLeaf },
        { amount: 0.1, ingredient: FetaCheese },
        { amount: 1, ingredient: MiniBaguette }
    ]
};

export const FishSticks = {
    id: 205,
    name: 'Fiskpinnar',
    ingredients: [
        { amount: 4, ingredient: FishStick },
        { amount: 0.25, ingredient: Lemon },
        { amount: 0.5, ingredient: Carrot }
    ]
};

export const BeanSalasWithFetaAndOlives = {
    id: 206,
    name: 'Bönallad med fetaost och svarta oliver',
    ingredients: [
        { amount: 1, ingredient: WhiteBeans },
        { amount: 0.1, ingredient: FetaCheese },
        { amount: 0.1, ingredient: Olives },
        { amount: 0.5, ingredient: Tomato }
    ]
};

export const ChickenWithBulgur = {
    id: 207,
    name: 'Kyklingröra med bulgur',
    ingredients: [
        { amount: 1, ingredient: Chicken },
        { amount: 1, ingredient: WokVegetables },
        { amount: 0.5, ingredient: Bulgur },
        { amount: 0.2, ingredient: Quark }
    ]
};