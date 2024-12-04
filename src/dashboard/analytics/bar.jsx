import { Bar } from 'react-chartjs-2';
import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip} from 'chart.js';
import { barChartData } from './fake_data';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

export const BarChart = () => {
    const options = {};

    return <Bar option={options} data={barChartData} />
};