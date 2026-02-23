# Deployment Guide

## Overview
This guide will help you deploy your E-Learning Platform to production.

## Prerequisites
- Git & GitHub account
- MongoDB Atlas account (free tier)
- Vercel account (for frontend)
- Render account (for backend)

---

## Step 1: MongoDB Atlas Setup

1. **Create Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for free

2. **Create Cluster**
   - Click "Build a Database"
   - Choose "FREE" tier (M0)
   - Select a region close to you
   - Click "Create Cluster"

3. **Database Access**
   - Go to "Database Access" in left menu
   - Click "Add New Database User"
   - Choose password authentication
   - Username: `elearning_user`
   - Generate secure password (save it!)
   - User Privileges: "Read and write to any database"
   - Add User

4. **Network Access**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Confirm

5. **Get Connection String**
   - Go to "Database" -> "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `elearning`
   - Save this for later

---

## Step 2: Push to GitHub

1. **Create Repository**
```bash
cd elearning-platform
git init
git add .
git commit -m "Initial commit"
```

2. **Create GitHub Repo**
   - Go to GitHub and create new repository
   - Don't initialize with README

3. **Push Code**
```bash
git remote add origin https://github.com/YOUR_USERNAME/elearning-platform.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy Backend to Render

1. **Create Account**
   - Go to https://render.com
   - Sign up using GitHub

2. **Create New Web Service**
   - Click "New +"
   - Select "Web Service"
   - Connect your GitHub repository
   - Select your elearning-platform repo

3. **Configure Service**
   - Name: `elearning-backend`
   - Root Directory: `backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Leave other settings as default

4. **Add Environment Variables**
   Click "Advanced" -> "Add Environment Variable"
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_super_secret_jwt_key_min_32_characters_long
   JWT_EXPIRE=7d
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (2-3 minutes)
   - Copy your backend URL (e.g., https://elearning-backend.onrender.com)

---

## Step 4: Deploy Frontend to Vercel

1. **Create Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New" -> "Project"
   - Import your GitHub repository
   - Select the repo

3. **Configure Project**
   - Framework Preset: Vite
   - Root Directory: `frontend/e-learning_platform`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Add Environment Variables**
   ```
   VITE_API_URL=https://your-backend-url.onrender.com/api
   ```
   Replace with your actual Render backend URL

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment (1-2 minutes)
   - Your site will be live at: https://your-site.vercel.app

---

## Step 5: Test Your Deployment

1. **Visit Frontend URL**
   - Open your Vercel URL
   - Navigate to signup page

2. **Create Admin Account**
   - Sign up with admin credentials
   - Or use the seed data accounts

3. **Test Features**
   - Browse courses
   - Enroll in a course
   - Check dashboard
   - Access admin panel (if admin)

---

## Step 6: Enable CORS (If needed)

If you get CORS errors, update backend `server.js`:

```javascript
app.use(cors({
  origin: ['https://your-frontend-url.vercel.app'],
  credentials: true
}));
```

Redeploy backend after this change.

---

## Step 7: Add Sample Data

### Option 1: Run Seed Script Remotely
1. Install Railway CLI or use Render Shell
2. Run: `node seed.js`

### Option 2: Manual Entry
1. Log in as admin
2. Use the Admin Panel to add courses

---

## Troubleshooting

### Backend Issues
- Check Render logs: Dashboard -> Logs
- Verify environment variables are set correctly
- Ensure MongoDB connection string is correct

### Frontend Issues
- Check Vercel deployment logs
- Verify VITE_API_URL is correct
- Check browser console for errors

### Database Issues
- Verify MongoDB Atlas IP whitelist (0.0.0.0/0)
- Check database user credentials
- Ensure connection string format is correct

---

## Custom Domain (Optional)

### Vercel (Frontend)
1. Go to Project Settings -> Domains
2. Add your custom domain
3. Update DNS records as instructed

### Render (Backend)
1. Go to Service Settings
2. Add custom domain
3. Update DNS records as instructed

---

## Monitoring

### Backend Monitoring (Render)
- Check logs regularly
- Set up email notifications
- Monitor response times

### Frontend Monitoring (Vercel)
- Use Vercel Analytics
- Check error logs
- Monitor page load times

---

## Security Checklist

✅ Environment variables are set (not hardcoded)
✅ JWT secret is strong (32+ characters)
✅ CORS is properly configured
✅ MongoDB has network access restrictions
✅ Passwords are hashed
✅ API endpoints are protected
✅ Input validation is in place

---

## Continuous Deployment

Both Vercel and Render support automatic deployments:
- Push to `main` branch on GitHub
- Automatic build and deploy
- Check deployment status in respective dashboards

---

## Estimated Costs

- MongoDB Atlas (M0): **FREE**
- Render (Starter): **FREE** (with limitations) or **$7/month**
- Vercel (Hobby): **FREE** (for personal projects)

**Total: FREE** (with free tiers)

---

## Next Steps

1. Add your own courses
2. Invite users
3. Monitor performance
4. Implement additional features
5. Consider scaling options as user base grows

---

## Support

If you encounter issues:
- Check service status pages
- Review logs
- Consult documentation
- Reach out to support

---

**🎉 Congratulations! Your E-Learning Platform is now live!**
