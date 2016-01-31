import React from 'react';
import { Link } from 'react-router';

export default class FoodTableRow extends React.Component {
    static propTypes = {
        foodData: React.PropTypes.object.isRequired
    };
    
    render() {
        return (
            <tr>
                <td width="200">{this.props.foodData.DAY}</td>
                <td width="200"><Link to={`/recipe/${this.props.foodData.BREAKFAST.id}`}>{this.props.foodData.BREAKFAST.name}</Link></td>
                <td width="200"><Link to={`/recipe/${this.props.foodData.SNACK_1.id}`}>{this.props.foodData.SNACK_1.name}</Link></td>
                <td width="200"><Link to={`/recipe/${this.props.foodData.LUNCH.id}`}>{this.props.foodData.LUNCH.name}</Link></td>
                <td width="200"><Link to={`/recipe/${this.props.foodData.SNACK_2.id}`}>{this.props.foodData.SNACK_2.name}</Link></td>
                <td width="200"><Link to={`/recipe/${this.props.foodData.DINNER.id}`}>{this.props.foodData.DINNER.name}</Link></td>
                <td width="200"><Link to={`/recipe/${this.props.foodData.SNACK_3.id}`}>{this.props.foodData.SNACK_3.name}</Link></td>
                <td width="200"></td>
            </tr>
        );
    }
}