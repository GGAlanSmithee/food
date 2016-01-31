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
    Asparagus
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