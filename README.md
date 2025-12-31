# Node.js Web Server Demo

A simple web server built with Node.js and Express.

## Features

- Express.js framework
- CORS support
- Environment configuration
- Basic routing
- Error handling
- SQLite database integration
- User model and API endpoints

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

### Development

For development with auto-restart, run:
```bash
npm run dev
```

### API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check
- [GET /api/users](file:///d:/projectTest/demo-server/server.js#L31-L35) - Get all users
- `POST /api/users` - Create a new user (requires name and email)

## Database

This project uses SQLite as its database with Sequelize as the ORM. The database file is stored as `database.sqlite` in the root directory.

## Project Structure

```
demo-server/
├── server.js          # Main server file
├── package.json       # Project dependencies and scripts
├── .env              # Environment variables
├── .gitignore        # Git ignore rules
├── README.md         # Project documentation
├── config/           # Configuration files
│   └── database.js   # Database configuration
├── models/           # Database models
│   ├── index.js      # Models index
│   └── User.js       # User model
├── routes/           # API route handlers
│   └── index.js      # Route definitions
└── tests/            # Test files
    └── server.test.js # Server tests
```

## License

MIT