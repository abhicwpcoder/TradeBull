import express from 'express';
import cors from 'cors';
import stockRoutes from './routes/stock.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 5000;

// Setup __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', stockRoutes);

// ✅ Serve static files from React build (correct path)
const clientBuildPath = path.resolve(__dirname, '../client/build');
app.use(express.static(clientBuildPath));

// ✅ Fallback for SPA (React router)
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
