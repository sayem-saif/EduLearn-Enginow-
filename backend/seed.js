const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Course = require('./models/Course');

dotenv.config();

const sampleCourses = [
  {
    title: 'Complete Web Development Bootcamp 2026',
    slug: 'complete-web-development-bootcamp',
    description: 'Learn web development from scratch with HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build real-world projects and launch your career as a full-stack developer.',
    price: 49.99,
    category: 'Programming',
    difficulty: 'Beginner',
    instructor: 'Dr. Angela Yu',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    lessons: [
      { 
        title: 'Web Development Full Course - 22 Hours', 
        content: 'Complete web development course covering HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Build 5 real-world projects including a portfolio website, todo app, weather app, blog platform, and e-commerce site.', 
        videoUrl: 'https://www.youtube.com/embed/nu_pCVPKzTk',
        duration: 1320, 
        order: 1 
      },
      { 
        title: 'HTML & CSS Full Course', 
        content: 'Master HTML5 and CSS3 from scratch. Learn semantic HTML, flexbox, grid, responsive design, and modern CSS techniques.', 
        videoUrl: 'https://www.youtube.com/embed/G3e-cpL7ofc',
        duration: 240, 
        order: 2 
      },
      { 
        title: 'JavaScript Full Course', 
        content: 'Learn JavaScript from basics to advanced concepts including ES6+, async/await, promises, DOM manipulation, and modern JavaScript features.', 
        videoUrl: 'https://www.youtube.com/embed/PkZNo7MFNFg',
        duration: 480, 
        order: 3 
      },
    ],
    duration: 120,
    rating: 4.9,
  },
  {
    title: 'Python Programming Masterclass 2026',
    slug: 'python-programming-masterclass',
    description: 'Complete Python course from beginner to advanced. Learn Python programming, data structures, OOP, file handling, web scraping, and build real projects.',
    price: 54.99,
    category: 'Programming',
    difficulty: 'Beginner',
    instructor: 'Tim Buchalka',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop',
    lessons: [
      { 
        title: 'Python Full Course for Beginners - 12 Hours', 
        content: 'Complete Python programming course covering variables, data types, control flow, functions, classes, modules, file handling, error handling, and more.', 
        videoUrl: 'https://www.youtube.com/embed/_uQrJ0TkZlc',
        duration: 720, 
        order: 1 
      },
      { 
        title: 'Python OOP Complete Course', 
        content: 'Master Object-Oriented Programming in Python. Learn classes, objects, inheritance, polymorphism, encapsulation, and advanced OOP concepts.', 
        videoUrl: 'https://www.youtube.com/embed/Ej_02ICOIgs',
        duration: 180, 
        order: 2 
      },
      { 
        title: 'Build 15 Python Projects', 
        content: 'Build 15 real-world Python projects including calculator, password generator, quiz game, weather app, web scraper, and more.', 
        videoUrl: 'https://www.youtube.com/embed/8ext9G7xspg',
        duration: 360, 
        order: 3 
      },
    ],
    duration: 80,
    rating: 4.8,
  },
  {
    title: 'React - The Complete Guide 2026',
    slug: 'react-complete-guide',
    description: 'Master React with hooks, context, routing, Redux, Next.js and more. Build modern, scalable web applications with the most popular JavaScript library.',
    price: 59.99,
    category: 'Programming',
    difficulty: 'Intermediate',
    instructor: 'Maximilian Schwarzmüller',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    lessons: [
      { 
        title: 'React Full Course - 12 Hours', 
        content: 'Complete React course covering components, props, state, hooks, context, routing, forms, HTTP requests, and building real applications.', 
        videoUrl: 'https://www.youtube.com/embed/bMknfKXIFA8',
        duration: 720, 
        order: 1 
      },
      { 
        title: 'React Hooks Complete Guide', 
        content: 'Master all React hooks including useState, useEffect, useContext, useReducer, useMemo, useCallback, and custom hooks.', 
        videoUrl: 'https://www.youtube.com/embed/TNhaISOUy6Q',
        duration: 240, 
        order: 2 
      },
      { 
        title: 'Build a Full Stack App with React', 
        content: 'Build a complete MERN stack application from scratch with authentication, CRUD operations, and deployment.', 
        videoUrl: 'https://www.youtube.com/embed/98BzS5Oz5E4',
        duration: 480, 
        order: 3 
      },
    ],
    duration: 90,
    rating: 4.9,
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    slug: 'javascript-algorithms-data-structures',
    description: 'Master computer science fundamentals with JavaScript. Learn algorithms, data structures, problem solving, and ace coding interviews.',
    price: 64.99,
    category: 'Programming',
    difficulty: 'Advanced',
    instructor: 'Andrei Neagoie',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    lessons: [
      { 
        title: 'Data Structures & Algorithms Full Course', 
        content: 'Complete course on data structures and algorithms including arrays, linked lists, trees, graphs, sorting, searching, dynamic programming, and more.', 
        videoUrl: 'https://www.youtube.com/embed/8hly31xKli0',
        duration: 600, 
        order: 1 
      },
      { 
        title: 'JavaScript Interview Prep', 
        content: 'Prepare for technical interviews with common JavaScript questions, coding challenges, and problem-solving techniques.', 
        videoUrl: 'https://www.youtube.com/embed/t0g-iYQvvdY',
        duration: 240, 
        order: 2 
      },
    ],
    duration: 65,
    rating: 4.7,
  },
  {
    title: 'Node.js & Express - Backend Development',
    slug: 'nodejs-express-backend',
    description: 'Learn backend development with Node.js and Express. Build RESTful APIs, work with databases, implement authentication, and deploy to production.',
    price: 52.99,
    category: 'Programming',
    difficulty: 'Intermediate',
    instructor: 'Brad Traversy',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    lessons: [
      { 
        title: 'Node.js Full Course - 8 Hours', 
        content: 'Complete Node.js course covering modules, npm, async programming, file system, streams, Express.js, MongoDB, and building REST APIs.', 
        videoUrl: 'https://www.youtube.com/embed/Oe421EPjeBE',
        duration: 480, 
        order: 1 
      },
      { 
        title: 'Build REST API with Node & Express', 
        content: 'Build a complete RESTful API with authentication, validation, error handling, and database integration.', 
        videoUrl: 'https://www.youtube.com/embed/fgTGADljAeg',
        duration: 300, 
        order: 2 
      },
    ],
    duration: 55,
    rating: 4.8,
  },
  {
    title: 'UI/UX Design Masterclass - Figma to Production',
    slug: 'ui-ux-design-masterclass',
    description: 'Learn professional UI/UX design principles, Figma, design systems, prototyping, and user research. Create stunning designs that users love.',
    price: 39.99,
    category: 'Design',
    difficulty: 'Beginner',
    instructor: 'Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    lessons: [
      { 
        title: 'UI/UX Design Full Course', 
        content: 'Complete UI/UX design course covering design principles, color theory, typography, layout, Figma, prototyping, and user testing.', 
        videoUrl: 'https://www.youtube.com/embed/c9Wg6Cb_YlU',
        duration: 360, 
        order: 1 
      },
      { 
        title: 'Figma Complete Tutorial', 
        content: 'Master Figma from basics to advanced features including components, auto-layout, variants, prototyping, and collaboration.', 
        videoUrl: 'https://www.youtube.com/embed/FTFaQWZBqQ8',
        duration: 240, 
        order: 2 
      },
    ],
    duration: 45,
    rating: 4.6,
  },
  {
    title: 'Data Science & Machine Learning with Python',
    slug: 'data-science-python',
    description: 'Master data science and machine learning with Python. Learn NumPy, Pandas, Matplotlib, Scikit-learn, and build real ML models.',
    price: 69.99,
    category: 'Data Science',
    difficulty: 'Advanced',
    instructor: 'Dr. Michael Chen',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    lessons: [
      { 
        title: 'Python for Data Science - Full Course', 
        content: 'Complete data science course covering NumPy, Pandas, Matplotlib, Seaborn, data cleaning, analysis, visualization, and statistics.', 
        videoUrl: 'https://www.youtube.com/embed/LHBE6Q9XlzI',
        duration: 720, 
        order: 1 
      },
      { 
        title: 'Machine Learning Complete Course', 
        content: 'Learn machine learning algorithms including regression, classification, clustering, neural networks, and deep learning fundamentals.', 
        videoUrl: 'https://www.youtube.com/embed/Gv9_4yMHFhI',
        duration: 600, 
        order: 2 
      },
    ],
    duration: 95,
    rating: 4.7,
  },
  {
    title: 'Digital Marketing Mastery 2026',
    slug: 'digital-marketing-essentials',
    description: 'Complete digital marketing course covering SEO, social media marketing, content marketing, email marketing, Google Ads, and analytics.',
    price: 29.99,
    category: 'Marketing',
    difficulty: 'Beginner',
    instructor: 'Neil Patel',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    lessons: [
      { 
        title: 'Digital Marketing Full Course - 12 Hours', 
        content: 'Complete digital marketing course covering SEO, SEM, social media, content marketing, email marketing, and analytics.', 
        videoUrl: 'https://www.youtube.com/embed/nU-IIXBWlS4',
        duration: 720, 
        order: 1 
      },
      { 
        title: 'SEO Complete Guide 2026', 
        content: 'Master search engine optimization with on-page SEO, off-page SEO, technical SEO, keyword research, and link building.', 
        videoUrl: 'https://www.youtube.com/embed/SnxeXZpZkI0',
        duration: 240, 
        order: 2 
      },
    ],
    duration: 50,
    rating: 4.5,
  },
];

const sampleUsers = [
  {
    name: 'Admin User',
    email: 'admin@edulearn.com',
    passwordHash: 'admin123',
    role: 'admin',
  },
  {
    name: 'Test Student',
    email: 'student@edulearn.com',
    passwordHash: 'student123',
    role: 'student',
  },
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Course.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Create users
    const users = await User.create(sampleUsers);
    console.log(`✅ Created ${users.length} users`);

    // Create courses
    const courses = await Course.create(sampleCourses);
    console.log(`✅ Created ${courses.length} courses`);

    console.log('\n🎉 Database seeded successfully!');
    console.log('\nTest Accounts:');
    console.log('Admin: admin@edulearn.com / admin123');
    console.log('Student: student@edulearn.com / student123');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
