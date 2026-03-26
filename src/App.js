import React, { useState, useEffect } from "react";
import { formatCurrency, calculateGrowth } from "./utils";

function App() {
  const [metrics, setMetrics] = useState({
    revenue: 0,
    users: 0,
    orders: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching dashboard data
    const fetchData = async () => {
      setLoading(true);
      try {
        // In production, this would be an API call
        const data = {
          revenue: 125400,
          users: 3842,
          orders: 1253,
          previousRevenue: 98200,
        };
        setMetrics(data);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  const growth = calculateGrowth(metrics.previousRevenue, metrics.revenue);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Revenue</h3>
          <p>{formatCurrency(metrics.revenue)}</p>
          <span className={growth >= 0 ? "positive" : "negative"}>
            {growth >= 0 ? "+" : ""}{growth.toFixed(1)}%
          </span>
        </div>
        <div className="metric-card">
          <h3>Active Users</h3>
          <p>{metrics.users.toLocaleString()}</p>
        </div>
        <div className="metric-card">
          <h3>Orders</h3>
          <p>{metrics.orders.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
