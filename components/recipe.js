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
                    </tr>
                </thead>
                
                <tfoot>
                    <tr>
                        <td>total</td>
                    </tr>
                </tfoot>
                
                <tbody>
                    {recipe.ingredients.map((ingredient, i) => <Ingredient key={i} ingredient={ingredient} />)}
                </tbody>
            </table>
        );
    }
}