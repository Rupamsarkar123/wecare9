import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = (dbURI) => {
  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));
};

export default connectDB;





// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import contactRoutes from './routes/contactRoutes.js';
// import connectDB from './server.js'

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api', contactRoutes);

// // MongoDB Connection
// const dbURI = 'mongodb+srv://srupam322:RM7wYl9rAKx8ZzK2@cluster1.ov6bb.mongodb.net/Cluster1?retryWrites=true&w=majority&appName=Cluster1';
// const connectDB = (dbURI)=>{
//   mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })


//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.log('Error connecting to MongoDB:', err));
// }
// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// module.exports= connectDB;


 
// //Mongodb-ps-------->RM7wYl9rAKx8ZzK2
//  //mongosh "mongodb+srv://cluster1.ov6bb.mongodb.net/" --apiVersion 1 --username srupam322 --password RM7wYl9rAKx8ZzK2
//  //mongodb+srv://srupam322:<db_password>@cluster1.ov6bb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1

//  //mongodb+srv://srupam322:<db_password>@cluster1.ov6bb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1
//  // DB --Cluster1