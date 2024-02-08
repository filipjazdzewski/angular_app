require('dotenv').config();
const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const app = express();

// Connect to DB (MongoDB)
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

// **** ROUTES ****
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/exercises', require('./routes/exerciseRoutes'));
// **** ROUTES ****

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
