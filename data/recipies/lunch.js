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
    FetaCheeze,
    MiniBaguette
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
        { amount: 0.1, ingredient: FetaCheeze },
        { amount: 1, ingredient: MiniBaguette }
    ]
};
