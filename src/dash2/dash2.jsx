import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard2 = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/data');
      const data = await response.json();
      setAnalyticsData(data);
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    }
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Analytics Dashboard',
      },
    },
  };

  const createChartData = (label, data) => ({
    labels: data.labels,
    datasets: [
      {
        label: label,
        data: data.values,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  });

  if (!analyticsData) {
    return <div>Loading...</div>;
  }

  // Process analyticsData to create chart data
  const pageViewsData = createChartData('Page Views', {
    labels: analyticsData.map(item => new Date(item.timestamp).toLocaleString()),
    values: analyticsData.map(item => item.pageViews.length)
  });

  const clicksData = createChartData('Clicks', {
    labels: analyticsData.map(item => new Date(item.timestamp).toLocaleString()),
    values: analyticsData.map(item => item.clicks.length)
  });

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <div style={{ width: '80%', margin: 'auto' }}>
        <Bar options={chartOptions} data={pageViewsData} />
        <Bar options={chartOptions} data={clicksData} />
      </div>
    </div>
  );
};

export default Dashboard2;
