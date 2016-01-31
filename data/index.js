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

export default [
    {
        DAY: MONDAY,
        BREAKFAST: AvocadoBreakfast,
        SNACK_1: SourMilkWithBlueBerries,
        LUNCH: ChickenWraps,
        SNACK_2: FruitAndCheese,
        DINNER: LemonSalmon,
        SNACK_3: BananaWithPeanutButter,
    },
    {
        DAY: TUESDAY,
        BREAKFAST: EggBreakfast,
        SNACK_1: Peanut,
        LUNCH: TunaSalad,
        SNACK_2: CottageCheeseWithAppleSauce,
        DINNER: Chicken,
        SNACK_3: GreekYoghurtWithGranola,
    },
    {
        DAY: WEDNESDAY,
        BREAKFAST: ChickenSandwich,
        SNACK_1: { },
        LUNCH: Omelette,
        SNACK_2: { },
        DINNER: { },
        SNACK_3: { },
    },
    {
        DAY: THURSDAY,
        BREAKFAST: SourMilkAndGranolaBreakfast,
        SNACK_1: { },
        LUNCH: ChickenSalad,
        SNACK_2: { },
        DINNER: { },
        SNACK_3: { },
    },
    {
        DAY: FRIDAY,
        BREAKFAST: MilkAndOatmealBreakfast,
        SNACK_1: { },
        LUNCH: { },
        SNACK_2: { },
        DINNER: MarinatedBeans,
        SNACK_3: { },
    },
    {
        DAY: SATURDAY,
        BREAKFAST: {},
        SNACK_1: { },
        LUNCH: { },
        SNACK_2: { },
        DINNER: { },
        SNACK_3: { },
    },
    {
        DAY: SUNDAY,
        BREAKFAST: {},
        SNACK_1: { },
        LUNCH: { },
        SNACK_2: { },
        DINNER: Chicken,
        SNACK_3: { },
    }
];
