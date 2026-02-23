# E-Learning Platform

A full-stack e-learning platform built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

✅ Course browsing and filtering
✅ User authentication (JWT)
✅ Enrollment system
✅ Progress tracking
✅ Admin panel for course management
✅ Responsive design with Tailwind CSS

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT authentication
- bcryptjs for password hashing

### Frontend
- React 19 with TypeScript
- Vite
- React Router v7
- Axios for API calls
- Tailwind CSS
- Context API for state management

## Project Structure

```
elearning-platform/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── .env
│   └── package.json
└── frontend/
    └── e-learning_platform/
        ├── src/
        │   ├── components/
        │   ├── pages/
        │   ├── context/
        │   ├── utils/
        │   ├── App.tsx
        │   └── main.tsx
        ├── public/
        └── package.json
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables in `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/elearning
JWT_SECRET=your_super_secret_jwt_key_change_in_production
JWT_EXPIRE=7d
NODE_ENV=development
```

4. Start the server:
```bash
npm run dev
```

The backend will run on http://localhost:5000

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend/e-learning_platform
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables in `.env`:
```
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on http://localhost:5173

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Courses
- `GET /api/courses` - Get all courses (with filtering)
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create course (admin only)
- `PUT /api/courses/:id` - Update course (admin only)
- `DELETE /api/courses/:id` - Delete course (admin only)

### Enrollments
- `POST /api/enrollments` - Enroll in course (protected)
- `GET /api/enrollments/me` - Get user's enrollments (protected)
- `GET /api/enrollments/:id` - Get single enrollment (protected)
- `PUT /api/enrollments/:id/progress` - Update progress (protected)
- `DELETE /api/enrollments/:id` - Delete enrollment (protected)

## Default Users

To create an admin user, use the signup endpoint with:
```json
{
  "name": "Admin User",
  "email": "admin@example.com",
  "password": "password123",
  "role": "admin"
}
```

## Deployment

### Backend (Render)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set environment variables
4. Deploy

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set the root directory to `frontend/e-learning_platform`
3. Set environment variables
4. Deploy

### Database (MongoDB Atlas)
1. Create a cluster on MongoDB Atlas
2. Get connection string
3. Update `MONGODB_URI` in backend `.env`

## Security Features

✅ Password hashing with bcryptjs
✅ JWT token authentication
✅ Protected routes with middleware
✅ Role-based access control
✅ Input validation
✅ Environment variables for secrets

## Future Enhancements

- Video lessons
- Quiz system
- Certificate generation
- Payment integration
- Review and rating system
- Search with autocomplete
- Email notifications

## License

MIT

## Author

Sayed Mohammad Sayem Saif
---

Built with ❤️ as part of FSD internship project
