import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TradingIcon from '../components/TradingIcon'; // adjust path if needed
import './Result.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data = [], stockName, success } = location.state || {};

  if (!success) {
    return (
      <div className="no-data">
        <h1>No data found for "{stockName}"</h1>
        <p>Please try searching for another stock.</p>
        <button className="search-btn" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="result gradient-bg">
      <div className="result-header">
        <h1>Results for "{data[0]?.date || stockName}"</h1>
        <p>Click on "More Info" to view detailed stock information.</p>
      </div>
      <div className="results-grid">
        {data.map((item, idx) => (
          <div key={idx} className="result-card animated-card" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="card-header">
              <span style={{ marginRight: 8 }}>
                <TradingIcon size={28} />
              </span>
              <span className="symbol">{item.stock || 'Unknown Exchange'}</span>
            </div>
            <div className="card-content">
              <div>
                <span className="label">Stock Name:</span>
                <span className="value">{item.date || 'N/A'}</span>
              </div>
              <div>
                <span className="label">Price:</span>
                <span className="value">{item.price || 'N/A'}</span>
              </div>
              <div>
                <span className="label">Extracted Price:</span>
                <span className="value">{item.extracted_price || 'N/A'}</span>
              </div>
              <div>
                <span className="label">Price Movement:</span>
                <span className="value">{item.price_movement?.movement || 'N/A'}</span>
              </div>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                {item.link && (
                  <button
                    className="more-info-btn"
                    onClick={() => window.open(item.link, '_blank')}
                  >
                    Click for More Info
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="search-btn" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </div>
  );
};

export default Result;