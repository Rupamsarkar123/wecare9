import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';
import connectDB from './server.js';  // Import connectDB function

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', contactRoutes);

// MongoDB Connection
const dbURI = 'mongodb+srv://srupam322:RM7wYl9rAKx8ZzK2@cluster1.ov6bb.mongodb.net/Cluster1?retryWrites=true&w=majority&appName=Cluster1';
connectDB(dbURI);  // Use the imported connectDB function

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

