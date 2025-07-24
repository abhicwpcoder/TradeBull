import React from 'react';

const TradingIcon = ({ size = 28, color = "#7f53ac", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={style} fill="none">
    <rect x="3" y="13" width="3" height="7" rx="1" fill={color}/>
    <rect x="8.5" y="8" width="3" height="12" rx="1" fill={color}/>
    <rect x="14" y="3" width="3" height="17" rx="1" fill={color}/>
  </svg>
);

export default TradingIcon;