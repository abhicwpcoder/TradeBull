# TradeBull - Stock Trading Platform

A modern web application for stock market data and futures analysis built with React.js frontend and Node.js backend.

## Features

- **Real-time Stock Data**: Get up-to-date stock prices and market information
- **Futures Analysis**: Comprehensive futures chain data for informed decisions
- **User-friendly Interface**: Clean, modern design for both beginners and professionals
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

### Frontend
- React.js 18
- React Router for navigation
- Axios for API calls
- Pure CSS (no external UI frameworks)

### Backend
- Node.js with Express
- Axios for external API calls
- CORS enabled
- SerpApi integration for stock data

## Project Structure

```
TradeBull/
│
├── client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Header, Footer, InputBox
│   │   ├── pages/          # Home, About, Contact, Login, Signup, Result
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                 # Node.js Backend
│   ├── routes/
│   │   └── stock.js        # Handles stock API fetching
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TradeBull
   ```

2. **Install dependencies**
   ```bash
   npm install
   npm run install-all
   ```

3. **Start the application**
   ```bash
   npm start
   ```

   This will start both the frontend (port 3000) and backend (port 5000) servers concurrently.

## API Integration

The application uses SerpApi's Google Finance engine to fetch stock data. The API key is configured in `server/routes/stock.js`.

### Endpoints

- `POST /api/stock` - Fetch stock futures data
  - Body: `{ "stockName": "AAPL" }`
  - Returns: Futures chain data

## Pages

1. **Home** - Stock search functionality with modern hero section
2. **About** - Information about TradeBull platform
3. **Contact** - Contact form with company information
4. **Login** - User authentication interface (UI only)
5. **Signup** - User registration interface (UI only)
6. **Result** - Display stock futures data in card format

## Development

### Frontend Development
```bash
cd client
npm start
```

### Backend Development
```bash
cd server
npm start
```

## Build for Production

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or support, please contact us through the Contact page or email info@tradebull.com.
hello

command for push:-git push origin main --force