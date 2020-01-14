import React from 'react';
import { Line } from 'react-chartjs-2';


const Chart = (props) => {
    const data = {
        labels: props.hr,
        datasets: [
            {
                label: 'Temperatura powietrza',
                fill: true,
                lineTension: .4,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 1,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 5,
                pointRadius: 2,
                pointHitRadius: 10,
                data: [12, 13, 22, 28, 20, 15, 10, 7, 5, 8, 10, 3, -0.5]
            }
        ]
    };
    return (
        <Line data={data} />
    );
}


export default Chart