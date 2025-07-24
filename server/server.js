import express from 'express';
import cors from 'cors';
import stockRoutes from './routes/stock.js';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config(); // Load .env file

const app = express();
const PORT = process.env.PORT || 5000;

// __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', stockRoutes);

// Serve static React files
const clientBuildPath = path.resolve(__dirname, '../client/build');
app.use(express.static(clientBuildPath));

// Handle all other routes (React SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server is running and listening on port ${PORT}`);
});
