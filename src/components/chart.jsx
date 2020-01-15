import React from 'react';
import { Line } from 'react-chartjs-2';


const Chart = (props) => {
    const getHoursArray = () => {
        const date = new Date()
        const currentHour = date.getHours()

        let size = 12
        let newArray = [currentHour]
        let now

        while (size >= 0 ) {
            date.setHours(date.getHours() - newArray.length)
            now = date.getHours()
            newArray.push(now)
            date.setHours(currentHour)

            size--
        }
        
        return newArray.reverse()
    }   

    //! Data for chart
    const hourlyTemp = props.dataPoint.slice(0, 14)
    const data = {
        labels: getHoursArray(),
        datasets: [
            {
                label: props.dataType,
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
                data: hourlyTemp.reverse()
            }
        ]
    };
    return (
        <Line data={data} />
    );
}


export default Chart