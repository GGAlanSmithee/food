import React from 'react';

import Ingredient from './ingredient';

import { getRecipe } from '../data/recipies';

export default class Recipe extends React.Component {
    render() {
        const { recipeId } = this.props.params;
            
        const recipe = getRecipe(recipeId);
        
        return (
            <table>
                <thead>
                    <tr>
                        <th colSpan="4"><h4>{recipe.name}</h4></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Fat</th>
                        <th>Carbs</th>
                        <th>Protein</th>
                    </tr>
                </thead>
                
                <tfoot>
                    <tr>
                        <td>total</td>
                        <td>{recipe.ingredients.reduce((prev, curr) => { return prev + curr.amount * curr.ingredient.fat}, 0).toFixed(1)}</td>
                        <td>{recipe.ingredients.reduce((prev, curr) => { return prev + curr.amount * curr.ingredient.carb}, 0).toFixed(1)}</td>
                        <td>{recipe.ingredients.reduce((prev, curr) => { return prev + curr.amount * curr.ingredient.protein}, 0).toFixed(1)}</td>
                    </tr>
                </tfoot>
                
                <tbody>
                    {recipe.ingredients.map((ingredient, i) => <Ingredient key={i} ingredient={ingredient} />)}
                </tbody>
            </table>
        );
    }
}