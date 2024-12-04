/// this is the page where I implement some hooks

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// allows the time range in which metrics are displayed
const TimeRangeSelector = ({ value, onChange }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)}>
    <option value="7d">Last 7 days</option>
    <option value="30d">Last 30 days</option>
    <option value="90d">Last 90 days</option>
  </select>
);
// allows me to select which metrics to display on dashboard
const MetricSelector = ({ selected, onSelect }) => (
  <div>
    {['pageviews', 'conversions', 'users'].map(metric => (
      <label key={metric}>
        <input
          type="checkbox"
          checked={selected.includes(metric)}
          onChange={() => {
            if (selected.includes(metric)) {
              onSelect(selected.filter(m => m !== metric));
            } else {
              onSelect([...selected, metric]);
            }
          }}
        />
        {metric}
      </label>
    ))}
  </div>
);

const AnalyticsChart = ({ timeRange, metrics }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Simulation put in place for fetching data
    const fetchData = () => {
      const labels = {
        '7d': ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        '30d': Array.from({length: 30}, (_, i) => `Day ${i+1}`),
        '90d': Array.from({length: 90}, (_, i) => `Day ${i+1}`)
      };

      const datasets = metrics.map(metric => ({
        label: metric,
        data: Array.from({length: labels[timeRange].length}, () => Math.floor(Math.random() * 10000)),
        borderColor: metric === 'pageviews' ? 'blue' : metric === 'conversions' ? 'green' : 'red',
        tension: 0.1
      }));

      setChartData({
        labels: labels[timeRange],
        datasets
      });
    };

    fetchData();
  }, [timeRange, metrics]);

  const options = {
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

  return chartData ? <Line options={options} data={chartData} /> : <div>Loading...</div>;
};



export const LineChart = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetrics, setSelectedMetrics] = useState(['pageviews', 'conversions']);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <AnalyticsChart timeRange={timeRange} metrics={selectedMetrics} />
      <row>
        <div style={{ marginBottom: '20px' }}>
            <h3>Time Range</h3>
            <TimeRangeSelector value={timeRange} onChange={setTimeRange} />
        </div>
        <div style={{ marginBottom: '20px' }}>
            <h3>Metrics</h3>
            <MetricSelector selected={selectedMetrics} onSelect={setSelectedMetrics} />
        </div>
      </row>
    </div>
  );
};