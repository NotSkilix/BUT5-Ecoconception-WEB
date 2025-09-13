import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, RadialLinearScale,
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const RadarChart = ({ tools }) => {
    const labels = tools.labels;

    const data = {
        labels: labels,
        datasets: tools.tools.map(tool => ({
            label: tool.name,
            data: labels.map(label => tool[label]),
            backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
                Math.random() * 255
            )}, ${Math.floor(Math.random() * 255)}, 0.2)`,
            borderColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
                Math.random() * 255
            )}, ${Math.floor(Math.random() * 255)})`,
            borderWidth: 1,
        })),
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            r: {
                beginAtZero: true,
                min: 0,
                max: 5,
                ticks: {
                    stepSize: 1
                }
            }
        }
    };

    return (
        <div>
            <Radar data={data} options={options} />
        </div>
    )
}

RadarChart.propTypes = {
    tools: Object
}
export default RadarChart;
