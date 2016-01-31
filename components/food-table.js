import React from 'react';

import foodData from '../data';
import FoodTableRow from './food-table-row';

export default class FoodTable extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th width="200">DAY</th>
                            <th width="200">BREAKFAST <small><i>07:30</i></small></th>
                            <th width="200">SNACK <small><i>10:00</i></small></th>
                            <th width="200">LUNCH <small><i>13:00</i></small></th>
                            <th width="200">SNACK <small><i>15:30</i></small></th>
                            <th width="200">DINNER <small><i>18:30</i></small></th>
                            <th width="200">SNACK <small><i>21:00</i></small></th>
                            <th width="200">TOTAL</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td widtd="200"></td>
                            <td widtd="200">2 block</td>
                            <td widtd="200">1 block</td>
                            <td widtd="200">3 block</td>
                            <td widtd="200">1 block</td>
                            <td widtd="200">3 block</td>
                            <td widtd="200">1 block</td>
                            <td widtd="200">11 block</td>
                        </tr>
                        {foodData.map((data, i) => <FoodTableRow foodData={data} key={i} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}