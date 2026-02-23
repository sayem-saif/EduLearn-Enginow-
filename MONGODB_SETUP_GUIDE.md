# MongoDB Atlas Setup Guide - Quick Start (5 minutes)

## Step 1: Create MongoDB Atlas Account
1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up with Google/GitHub (fastest) or email
3. Click "Create a Free Account"

## Step 2: Create Free Cluster
1. After login, click **"Create"** button
2. Choose **"M0 FREE"** tier (no credit card needed)
3. Select any Cloud Provider (AWS recommended)
4. Choose region closest to you
5. Cluster Name: Leave default or name it "elearning-cluster"
6. Click **"Create Deployment"**

## Step 3: Setup Database User
1. Create username and password
   - Username: `admin` (or any name you prefer)
   - Password: Click "Autogenerate Secure Password" OR create your own
   - **COPY AND SAVE THIS PASSWORD!** You'll need it in Step 5
2. Click **"Create Database User"**

## Step 4: Add IP Address
1. Under "Where would you like to connect from?"
2. Click **"Add My Current IP Address"**
3. OR click **"Allow Access from Anywhere"** (0.0.0.0/0) for development
4. Click **"Finish and Close"**
5. Click **"Go to Database"**

## Step 5: Get Connection String
1. Click **"Connect"** button on your cluster
2. Choose **"Connect your application"**
3. Copy the connection string (looks like this):
   ```
   mongodb+srv://admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
4. **Replace `<password>` with your actual password** from Step 3

## Step 6: Update Your .env File
1. Open: `backend/.env`
2. Replace the MONGODB_URI line with your connection string:
   ```
   MONGODB_URI=mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/elearning?retryWrites=true&w=majority
   ```
   Note: Add `/elearning` before the `?` to specify the database name

3. Save the file

## Step 7: Seed the Database
Run these commands in your terminal:
```powershell
cd C:\Users\DELL\Desktop\elearning-platform\backend
npm run seed
```

You should see:
```
✅ Connected to MongoDB
🗑️  Cleared existing data
✅ Created 2 users
✅ Created 8 courses
🎉 Database seeded successfully!
```

## Step 8: Restart Backend Server
```powershell
cd C:\Users\DELL\Desktop\elearning-platform\backend
npm run dev
```

## Step 9: Check Frontend
Open: http://localhost:5174/courses

You should now see all 8 courses with real YouTube videos!

---

## Test Accounts After Seeding:
- **Admin**: admin@edulearn.com / admin123
- **Student**: student@edulearn.com / student123

---

## Troubleshooting

### Can't connect to MongoDB?
- Double-check password in connection string (no < > brackets)
- Make sure you added your IP address in Network Access
- Try "Allow Access from Anywhere" if still having issues

### Connection string format:
```
mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/elearning?retryWrites=true&w=majority
```

Need help? Share any error messages you see!
