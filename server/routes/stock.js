import express from 'express';
import axios from 'axios';

const router = express.Router();

// API key
const apiKey = '241c5889413cb0c2a4bae3309c30eb23038b8d9c7eb947dcf458a2d0bfaf1f77';
// POST route to fetch stock data
router.post('/stock', async (req, res) => {
  try {
    const { stockName } = req.body;
    console.log('Received stock name:', stockName); // Log the received stock name for debugging
    
    if (!stockName) {
      return res.status(400).json({ error: 'Stock name is required' });
    }

    const url = `https://serpapi.com/search?engine=google_finance&q=${stockName}&api_key=${apiKey}`;
    
    const response = await axios.get(url);
    console.log('API Response:', response); // Log the entire response for debugging
    // Check if suggestions exists in the response
    if (response.data && response.data.suggestions) {
      res.json({
        success: true,
        data: response.data.suggestions,
        stockName: stockName
      });
    } else {
      res.json({
        success: false,
        message: 'No suggestions found for this stock',
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