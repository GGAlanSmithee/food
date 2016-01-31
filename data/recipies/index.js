import * as Breakfast from './breakfast';
import * as Lunch from './lunch';
import * as Snack from './snack';
import * as Dinner from './dinner';

export function getRecipe(id) {
    switch (id.toString()) {
        case Breakfast.EggBreakfast.id.toString() : return Breakfast.EggBreakfast;
        case Breakfast.AvocadoBreakfast.id.toString() : return Breakfast.AvocadoBreakfast;
        case Breakfast.SourMilkAndGranolaBreakfast.id.toString() : return Breakfast.SourMilkAndGranolaBreakfast;
        case Breakfast.MilkAndOatmealBreakfast.id.toString() : return Breakfast.MilkAndOatmealBreakfast;
        case Breakfast.ChickenSandwich.id.toString() : return Breakfast.ChickenSandwich;
        case Lunch.ChickenWraps.id.toString() : return Lunch.ChickenWraps;
        case Lunch.TunaSalad.id.toString() : return Lunch.TunaSalad;
        case Lunch.Omelette.id.toString() : return Lunch.Omelette;
        case Lunch.ChickenSalad.id.toString() : return Lunch.ChickenSalad;
        case Snack.SourMilkWithBlueBerries.id.toString() : return Snack.SourMilkWithBlueBerries;
        case Snack.CottageCheeseWithAppleSauce.id.toString() : return Snack.CottageCheeseWithAppleSauce;
        case Snack.FruitAndCheese.id.toString() : return Snack.FruitAndCheese;
        case Snack.Peanut.id.toString() : return Snack.Peanut;
        case Snack.BananaWithPeanutButter.id.toString() : return Snack.BananaWithPeanutButter;
        case Snack.GreekYoghurtWithGranola.id.toString() : return Snack.GreekYoghurtWithGranola;
        case Dinner.Chicken.id.toString() : return Dinner.Chicken;
        case Dinner.MarinatedBeans.id.toString() : return Dinner.MarinatedBeans;
        case Dinner.LemonSalmon.id.toString() : return Dinner.LemonSalmon;
        default : return { };
    }
}