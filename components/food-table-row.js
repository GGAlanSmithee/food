import React from 'react';
import { Link } from 'react-router';

export default class FoodTableRow extends React.Component {
    static propTypes = {
        foodData: React.PropTypes.array.isRequired
    };
    
    render() {
        return (
            <tr>
                <td width="200"><small>{this.props.foodData[0]}</small></td>
                <td width="200">{this.props.foodData[1]}</td>
                
                {this.props.foodData.slice(2).map((data, i) => <td width="200" key={i}><Link to={`/recipe/${data.id}`}>{data.name}</Link></td>)}
            </tr>
        );
    }
}