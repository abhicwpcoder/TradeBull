import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [stockName, setStockName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stockName.trim()) {
      alert('Please enter a stock name');
      return;
    }

    setLoading(true);
    
    try {
      const response = await axios.post('/api/stock', {
        stockName: stockName.trim()
      });
      
      // Navigate to result page with data
      navigate('/result', { 
        state: { 
          data: response.data.data,
          stockName: response.data.stockName,
          success: response.data.success
        }
      });
    } catch (error) {
      console.error('Error fetching stock data:', error);
      alert('Failed to fetch stock data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <div className="container">
        <div className="hero-section">
          <h1>
            <span className="trading-icon" style={{ verticalAlign: 'middle', marginRight: '0.6rem' }}>
              {/* Simple trading chart SVG */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="13" width="3" height="7" rx="1" fill="#7f53ac"/>
                <rect x="8.5" y="8" width="3" height="12" rx="1" fill="#647dee"/>
                <rect x="14" y="3" width="3" height="17" rx="1" fill="#7f53ac"/>
              </svg>
            </span>
            Welcome to TradeBull
          </h1>
          <p>Get real-time stock data, analyze futures, and enjoy an easy-to-use platform.</p>
          
          <div className="search-section">
            <form onSubmit={handleSubmit} className="search-form">
              <div className="search-input-wrapper">
                <input
                  type="text"
                  value={stockName}
                  onChange={(e) => setStockName(e.target.value)}
                  placeholder="Enter stock symbol (e.g., AAPL, GOOGL, TSLA)"
                  className="search-input"
                />
                <button 
                  type="submit" 
                  className="search-btn"
                  disabled={loading}
                >
                  {loading ? 'Searching...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="features-section">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Real-time Data</h3>
              <p>Access up-to-the-second stock prices and market movements for smarter trading decisions.</p>
            </div>
            <div className="feature-card">
              <h3>Futures Analysis</h3>
              <p>Analyze futures contracts and trends with our advanced analytics tools.</p>
            </div>
            <div className="feature-card">
              <h3>Easy to Use</h3>
              <p>Enjoy a clean, intuitive interface designed for both beginners and pros.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;