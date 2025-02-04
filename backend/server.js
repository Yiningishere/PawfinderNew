const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Set up storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to avoid filename conflicts
  }
});

const upload = multer({ storage: storage });

// Create the uploads directory if it doesn't exist
const fs = require('fs');
const dir = './uploads';
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

// Route to handle form submission
app.post('/api/report-stray-dog', upload.array('images[]'), (req, res) => {
  const { streetAddress, city, dateSeen, timeSeen, appearance, behavior, name, phoneNumber } = req.body;

  // Log the received data
  console.log('Received Data:', {
    streetAddress,
    city,
    dateSeen,
    timeSeen,
    appearance,
    behavior,
    name,
    phoneNumber
  });

  // Log the uploaded files
  const uploadedFiles = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

  // Send a response back to the client
  if (streetAddress && city && dateSeen && timeSeen && appearance && behavior) {
    res.status(200).json({
      message: 'Report submitted successfully!',
      files: uploadedFiles
    });
  } else {
    res.status(400).json({ message: 'Please fill out all required fields.' });
  }
});

// Serve static files from the uploads directory
app.use('/uploads', express.static('uploads'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
