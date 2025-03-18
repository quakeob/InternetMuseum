# Internet Museum

A digital museum dedicated to preserving and showcasing significant moments, artifacts, and experiences from the history of the internet. This project aims to create an interactive space where users can explore and learn about the evolution of the internet and its impact on society.

## Features

- Interactive exhibits showcasing key moments in internet history
- Curated collections of digital artifacts
- User contributions and community engagement
- Educational resources and historical context
- Responsive design for all devices
- User authentication for contributors

## Tech Stack

- Frontend: React.js
- Backend: Express.js
- Authentication: JWT
- Styling: CSS3

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/quakeob/InternetMuseum.git
cd InternetMuseum
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:
Create a `.env` file in the backend directory with:
```
PORT=5000
JWT_SECRET=your_jwt_secret
```

4. Start the development servers:
```bash
# Start backend server
cd backend
npm run dev

# Start frontend server (in a new terminal)
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
internet-museum/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   └── styles/
│   └── public/
├── backend/
│   ├── server/
│   │   ├── models/
│   │   ├── routes/
│   │   └── middleware/
│   └── config/
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 