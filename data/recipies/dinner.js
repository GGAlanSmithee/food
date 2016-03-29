import {
    Chicken,
    Onion,
    OliveOil,
    RedWineVinegear,
    CookingHoney,
    MixedBeans,
    Salmon,
    CookingCream,
    Lemon,
    Dill,
    WhiteBeans,
    Asparagus,
    LambChop,
    FetaCheese,
    Halloumi,
    Tomato,
    Olives,
    WokVegetables,
    PiecedMeat,
    BrownRice
} from '../base/ingredients';

const ChickenDinner = {
    id: 401,
    name: 'Kyckling',
    ingredients: [
        { amount : 0.5, ingredient : Chicken }
    ]
};

export { ChickenDinner as Chicken };

export const MarinatedBeans = {
    id: 402,
    name: 'Marinerade bönor',
    ingredients: [
        { amount : 1, ingredient : Onion },
        { amount : 1, ingredient : OliveOil },
        { amount : 1, ingredient : RedWineVinegear },
        { amount : 1, ingredient : CookingHoney },
        { amount : 1, ingredient : MixedBeans }
    ]
};

export const LemonSalmon = {
    id: 403,
    name: 'Citron Lax',
    ingredients: [
        { amount : 0.5, ingredient : Salmon },
        { amount : 0.5, ingredient : CookingCream },
        { amount : 0.5, ingredient : Lemon },
        { amount : 0.1, ingredient : Dill },
        { amount : 0.5, ingredient : WhiteBeans },
        { amount : 1, ingredient : Asparagus },
    ]
};

export const Lamb = {
    id: 404,
    name: 'Lamm',
    ingredients: [
        { amount : 1, ingredient : LambChop },
        { amount : 0.2, ingredient : FetaCheese },
        { amount : 0.1, ingredient : Halloumi },
        { amount : 0.5, ingredient : Tomato },
        { amount : 0.5, ingredient : Onion },
        { amount : 0.2, ingredient : Olives }
    ]
};

export const PiecedMeatWithWok = {
    id: 405,
    name: 'Köttbitar med wokade grönsaker',
    ingredients: [
        { amount : 1, ingredient : WokVegetables },
        { amount : 1, ingredient : PiecedMeat },
        { amount : 1, ingredient : BrownRice }
    ]
};