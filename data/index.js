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
    BeanSalasWithFetaAndOlives
} from './recipies/lunch';

import {
    Chicken,
    MarinatedBeans,
    LemonSalmon
} from './recipies/dinner';

import {
    SourMilkWithBlueBerries,
    FruitAndCheese,
    Peanut,
    BananaWithPeanutButter,
    CottageCheeseWithAppleSauce,
    GreekYoghurtWithGranola,
    MilkAndStrawberries,
    DriedApricotAndPistachionuts
} from './recipies/snack';

const Breakfast = [ '07:00', 'Frukost',   AvocadoBreakfast,        EggBreakfast,                SourMilkAndGranolaBreakfast,  ChickenSandwich,             MilkAndOatmealBreakfast, {}, {} ];
const Snack1    = [ '09:30', 'Mellanmål', SourMilkWithBlueBerries, Peanut,                      MilkAndStrawberries,          {},                          SourMilkWithBlueBerries, {}, {} ];
const Lunch     = [ '12:00', 'Lunch',     ChickenWraps,            TunaSalad,                   Omelette,                     ChickenSalad,                FishSticks,              BeanSalasWithFetaAndOlives, {} ];
const Snack2    = [ '15:30', 'Mellanmål', FruitAndCheese,          CottageCheeseWithAppleSauce, BananaWithPeanutButter,       {},                          {},                      {}, {} ];
const Dinner    = [ '18:00', 'Middag',    MarinatedBeans,          LemonSalmon,                 Chicken,                      {},                          {},                      {}, Chicken ];
const Snack3    = [ '21:00', 'Mellanmål', BananaWithPeanutButter,  GreekYoghurtWithGranola,     DriedApricotAndPistachionuts, CottageCheeseWithAppleSauce, {},                      {}, {} ];

export default [
    Breakfast,
    Snack1,
    Lunch,
    Snack2,
    Dinner,
    Snack3
];