import React from 'react';

import { getRecipe } from '../data/recipies';

export default class Recipe extends React.Component {
    static propTypes = {
        ingredient : React.PropTypes.object.isRequired
    };
    
    render() {
        const number = this.props.ingredient.amount;
        const { amount, measure, name, protein, fat, carb } = this.props.ingredient.ingredient;
        
        return (
            <tr>
                <td><p><strong>{number * amount} {measure} {name.toLowerCase()}</strong></p></td>
            </tr>
        );
    }
}