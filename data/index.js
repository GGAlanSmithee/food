import {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
    BREAKFAST,
    SNACK1,
    LUNCH,
    SNACK2,
    DINNER,
    SNACK3
} from './base/constants';

import {
    EggBreakfast,
    AvocadoBreakfast,
    MilkAndOatmealBreakfast,
    SourMilkAndGranolaBreakfast,
    ChickenSandwich
} from './recipies/breakfast';

import {
    TunaSalad,
    Omelette,
    ChickenWraps,
    ChickenSalad,
    FishSticks,
    BeanSalasWithFetaAndOlives,
    ChickenWithBulgur
} from './recipies/lunch';

import {
    Chicken,
    MarinatedBeans,
    LemonSalmon,
    Lamb,
    PiecedMeatWithWok
} from './recipies/dinner';

import {
    SourMilkWithBlueBerries,
    FruitAndCheese,
    Peanut,
    BananaWithPeanutButter,
    CottageCheeseWithAppleSauce,
    GreekYoghurtWithGranola,
    MilkAndStrawberries,
    DriedApricotAndPistachionuts,
    BoiledEgg,
    ChiaPudding
} from './recipies/snack';

const Breakfast = [ '07:00', 'Frukost',   AvocadoBreakfast,        SourMilkAndGranolaBreakfast, EggBreakfast,                 ChickenSandwich,             AvocadoBreakfast,             MilkAndOatmealBreakfast, EggBreakfast ];
const Snack1    = [ '09:30', 'Mellanmål', SourMilkWithBlueBerries, Peanut,                      MilkAndStrawberries,          ChiaPudding,                 SourMilkWithBlueBerries,      BoiledEgg,               FruitAndCheese ];
const Lunch     = [ '12:00', 'Lunch',     ChickenWraps,            TunaSalad,                   Omelette,                     ChickenSalad,                FishSticks,                   ChickenWithBulgur,       BeanSalasWithFetaAndOlives ];
const Snack2    = [ '15:30', 'Mellanmål', FruitAndCheese,          CottageCheeseWithAppleSauce, BananaWithPeanutButter,       BoiledEgg,                   DriedApricotAndPistachionuts, Peanut,                  {} ];
const Dinner    = [ '18:00', 'Middag',    MarinatedBeans,          LemonSalmon,                 Chicken,                      PiecedMeatWithWok,           Lamb,                         {},                      Chicken ];
const Snack3    = [ '21:00', 'Mellanmål', BananaWithPeanutButter,  GreekYoghurtWithGranola,     DriedApricotAndPistachionuts, CottageCheeseWithAppleSauce, MilkAndStrawberries,          ChiaPudding,             {} ];

export default [
    Breakfast,
    Snack1,
    Lunch,
    Snack2,
    Dinner,
    Snack3
];