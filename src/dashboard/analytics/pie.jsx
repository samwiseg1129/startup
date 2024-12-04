import { Pie } from 'react-chartjs-2';
import React from 'react';
import {Chart as ChartJS, Tooltip, Legend, ArcElement} from 'chart.js';
import { pieChartData } from './fake_data';

ChartJS.register(Tooltip, Legend, ArcElement)

export const PieChart = () => {
    const options = {
        
    };

    return <Pie option={options} data={pieChartData} />
};