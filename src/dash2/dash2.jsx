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
      const response = await fetch('https://your-analytics-server.com/data');
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

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <div style={{ width: '80%', margin: 'auto' }}>
        <Bar 
          options={chartOptions} 
          data={createChartData('Clicks per Page', {
            labels: analyticsData.pageUrls,
            values: analyticsData.clickCounts,
          })} 
        />
      </div>
      <div style={{ width: '80%', margin: 'auto' }}>
        <Bar 
          options={chartOptions} 
          data={createChartData('Page Views', {
            labels: analyticsData.pageUrls,
            values: analyticsData.pageViewCounts,
          })} 
        />
      </div>
      <div style={{ width: '80%', margin: 'auto' }}>
        <Bar 
          options={chartOptions} 
          data={createChartData('Average Time Spent (seconds)', {
            labels: analyticsData.pageUrls,
            values: analyticsData.avgTimeSpent,
          })} 
        />
      </div>
    </div>
  );
};

export default Dashboard2;