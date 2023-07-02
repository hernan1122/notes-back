const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/notes', require('./routes/notes'));

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

//start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
