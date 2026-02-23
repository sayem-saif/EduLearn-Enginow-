# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install MongoDB
If you don't have MongoDB installed locally:
- **Windows**: Download from https://www.mongodb.com/try/download/community
- **Mac**: `brew install mongodb-community`
- **Linux**: Follow https://docs.mongodb.com/manual/administration/install-on-linux/

Or use MongoDB Atlas (cloud - free): https://www.mongodb.com/cloud/atlas

### Step 2: Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies (if not already done)
npm install

# Seed database with sample data
npm run seed

# Start backend server
npm run dev
```

Backend will run on: **http://localhost:5000**

### Step 3: Frontend Setup

Open a NEW terminal window:

```bash
# Navigate to frontend
cd frontend/e-learning_platform

# Install dependencies (if not already done)
npm install

# Start frontend server
npm run dev
```

Frontend will run on: **http://localhost:5173**

### Step 4: Test the Application

1. Open browser to: **http://localhost:5173**

2. **Sign up as Student**:
   - Or use: `student@edulearn.com` / `student123`
   
3. **Sign in as Admin**:
   - Email: `admin@edulearn.com`
   - Password: `admin123`

### 🎉 You're all set!

## Default Test Accounts

After running `npm run seed`:

| Role    | Email                  | Password    |
|---------|------------------------|-------------|
| Admin   | admin@edulearn.com     | admin123    |
| Student | student@edulearn.com   | student123  |

## Features to Test

### As Student:
1. Browse courses
2. Enroll in a course
3. View dashboard
4. Track progress

### As Admin:
1. Access admin panel
2. Create new course
3. Edit course
4. Delete course
5. View all enrollments

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check `backend/.env` has correct `MONGODB_URI`
- Default: `mongodb://localhost:27017/elearning`

### Port Already in Use
- Backend (5000): Change `PORT` in `backend/.env`
- Frontend (5173): Vite will auto-increment to 5174

### CORS Errors
- Make sure backend is running on port 5000
- Check `frontend/.env` has `VITE_API_URL=http://localhost:5000/api`

### Dependencies Not Found
```bash
# Backend
cd backend && npm install

# Frontend
cd frontend/e-learning_platform && npm install
```

## Project Structure Quick Reference

```
elearning-platform/
├── backend/
│   ├── controllers/      # Request handlers
│   ├── models/           # Database schemas
│   ├── routes/           # API routes
│   ├── middleware/       # Auth middleware
│   ├── server.js         # Entry point
│   ├── seed.js           # Sample data
│   └── .env              # Environment config
│
└── frontend/
    └── e-learning_platform/
        ├── src/
        │   ├── components/  # Reusable components
        │   ├── pages/       # Page components
        │   ├── context/     # React context
        │   ├── utils/       # API utilities
        │   └── App.tsx      # Main app
        └── .env             # Frontend config
```

## Next Steps

1. ✅ Explore the application
2. ✅ Add your own courses (as admin)
3. ✅ Test enrollment flow
4. ✅ Customize styling
5. ✅ Deploy to production (see DEPLOYMENT.md)

## Need Help?

- Check `README.md` for detailed documentation
- Review `DEPLOYMENT.md` for production setup
- API documentation at: http://localhost:5000/ (when backend is running)

---

**Happy Learning! 🎓**
