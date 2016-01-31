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
    ChickenSalad
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
    GreekYoghurtWithGranola
} from './recipies/snack';

const Breakfast = [ '07:00', 'Frukost', AvocadoBreakfast, EggBreakfast, ChickenSandwich, SourMilkAndGranolaBreakfast, MilkAndOatmealBreakfast, {}, {} ];
const Snack1 = [ '09:30', 'Mellanmål', SourMilkWithBlueBerries, Peanut, {}, {}, {}, {}, {} ];
const Lunch = [ '12:00', 'Lunch', ChickenWraps, TunaSalad, Omelette, ChickenSalad, {}, {}, {} ];
const Snack2 = [ '15:30', 'Mellanmål', FruitAndCheese, CottageCheeseWithAppleSauce, {}, {}, {}, {}, {} ];
const Dinner = [ '18:00', 'Middag', LemonSalmon, Chicken, {}, {}, MarinatedBeans, {}, Chicken ];
const Snack3 = [ '21:00', 'Mellanmål', BananaWithPeanutButter, GreekYoghurtWithGranola, {}, {}, {}, {}, {} ];

export default [
    Breakfast,
    Snack1,
    Lunch,
    Snack2,
    Dinner,
    Snack3
];