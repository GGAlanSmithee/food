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
                            <th colSpan="2" width="200"></th>
                            <th width="200">Måndag</th>
                            <th width="200">Tisdag</th>
                            <th width="200">Onsdag</th>
                            <th width="200">Torsdag</th>
                            <th width="200">Fredag</th>
                            <th width="200">Lördag</th>
                            <th width="200">Söndag</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {foodData.map((data, i) => <FoodTableRow foodData={data} key={i} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}