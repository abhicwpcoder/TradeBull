import express from 'express';
import axios from 'axios';

const router = express.Router();

// API key
const apiKey = 'cadbd62787b63a15437ed1bcb5f681c7f3faf28d6f0fd6dcd23e32c6245d0cf3';

// POST route to fetch stock data
router.post('/stock', async (req, res) => {
  try {
    const { stockName } = req.body;
    
    if (!stockName) {
      return res.status(400).json({ error: 'Stock name is required' });
    }

    const url = `https://serpapi.com/search?engine=google_finance&q=${stockName}&api_key=${apiKey}`;
    
    const response = await axios.get(url);
    
    // Check if futures_chain exists in the response
    if (response.data && response.data.futures_chain) {
      res.json({
        success: true,
        data: response.data.futures_chain,
        stockName: stockName
      });
    } else {
      res.json({
        success: false,
        message: 'No futures data found for this stock',
        data: []
      });
    }
    
  } catch (error) {
    console.error('Error fetching stock data:', error.message);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch stock data',
      message: error.message 
    });
  }
});

export default router;