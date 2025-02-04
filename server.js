const express = require('express');
const multer = require('multer');
const path = require('path');

// Initialize the Express app
const app = express();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Use timestamp to prevent filename collisions
  }
});

const upload = multer({ storage: storage });

// Create the uploads directory if it doesn't exist
const fs = require('fs');
const dir = './uploads';

if (!fs.existsSync(dir)){
  fs.mkdirSync(dir, { recursive: true });
}

// Define the POST endpoint for reporting stray dogs
app.post('/api/report-stray-dog', upload.array('images[]'), (req, res) => {
  const { streetAddress, city, dateSeen, timeSeen, appearance, behavior, name, phoneNumber } = req.body;
  const files = req.files;

  // Process the form data and files
  console.log('Street Address:', streetAddress);
  console.log('City:', city);
  console.log('Date Seen:', dateSeen);
  console.log('Time Seen:', timeSeen);
  console.log('Appearance:', appearance);
  console.log('Behavior:', behavior);
  console.log('Name:', name);
  console.log('Phone Number:', phoneNumber);
  console.log('Uploaded Files:', files);

  // Respond to the client
  res.status(200).json({ message: 'Report submitted successfully!' });
});

// Define the GET endpoint for fetching all dogs
app.get('/api/dogs', (req, res) => {
  const dogs = {
    '1': {
      name: 'Max',
      age: '2 years',
      location: 'Downtown Shelter',
      image: 'https://i.postimg.cc/6qzHmJ5K/max-paw-finder.jpg',
      description: 'Friendly and energetic dog looking for a loving home.',
      breed: 'Mixed Breed',
      size: 'Medium',
      gender: 'Male',
      vaccinated: true,
      neutered: true,
      goodWith: ['Children', 'Other Dogs', 'Cats'],
      story: 'Max was found wandering the streets of downtown six months ago. Despite his rough start, he has shown nothing but love and affection to everyone he meets. He\'s incredibly smart and has already learned basic commands. Max would make a perfect family dog as he\'s great with children and other pets.'
    },
    '2': {
      name: 'Luna',
      age: '1 year',
      location: 'East Side Rescue',
      image: 'https://i.postimg.cc/hPS6bMPg/luna-paw-finder.jpg',
      description: 'Sweet and gentle soul, great with kids.',
      breed: 'Labrador Mix',
      size: 'Large',
      gender: 'Female',
      vaccinated: true,
      neutered: true,
      goodWith: ['Children', 'Other Dogs'],
      story: 'Luna came to us as a puppy and has grown into a beautiful, well-mannered dog. She loves to play fetch and is always eager to learn new tricks. Her gentle nature makes her perfect for families with children.'
    },
    '3': {
      name: 'Rocky',
      age: '3 years',
      location: 'West Park Shelter',
      image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=800',
      description: 'Playful and loving dog seeking forever family.',
      breed: 'German Shepherd Mix',
      size: 'Large',
      gender: 'Male',
      vaccinated: true,
      neutered: false,
      goodWith: ['Adults', 'Other Dogs'],
      story: 'Rocky is an intelligent and loyal companion who needs an active family. He excels at agility training and would make a great running partner. While he\'s great with other dogs, he prefers a home without small children.'
    },
    '4': {
      name: 'Ash',
      age: '1 year',
      location: 'Central Park Shelter',
      image: 'https://i.postimg.cc/ZR8s6vGC/ash-paw-finder.jpg',
      description: 'Playful and friendly dog, great with families.',
      breed: 'Golden Retriever Mix',
      size: 'Medium',
      gender: 'Female',
      vaccinated: true,
      neutered: true,
      goodWith: ['Children', 'Other Dogs'],
      story: 'Ash was found abandoned in Central Park. She has a bubbly personality and loves to play with everyone she meets. Ash is fully vaccinated and neutered, making her a great addition to any family.'
    },
    '5': {
      name: 'Alvan',
      age: '5 years',
      location: 'Northside Rescue',
      image: 'https://i.postimg.cc/7P1j2j4m/alvan-paw-finder.jpg',
      description: 'Gentle and loyal dog, prefers quiet homes.',
      breed: 'Border Collie Mix',
      size: 'Medium',
      gender: 'Male',
      vaccinated: true,
      neutered: false,
      goodWith: ['Adults', 'Other Dogs'],
      story: 'Alvan came to us from a noisy environment and has since adapted to a more peaceful life. He is gentle and loves to cuddle, but he prefers homes without young children. Alvan is fully vaccinated.'
    },
    '6': {
      name: 'David',
      age: '4 years',
      location: 'Southside Shelter',
      image: 'https://i.postimg.cc/mkTXj24V/david-paw-finder.jpg',
      description: 'Active and friendly dog, loves outdoor activities.',
      breed: 'Australian Shepherd Mix',
      size: 'Medium',
      gender: 'Male',
      vaccinated: true,
      neutered: true,
      goodWith: ['Children', 'Other Dogs'],
      story: 'David is an active and friendly dog who loves outdoor activities like hiking and running. He gets along well with children and other dogs, making him a perfect companion for a family looking to be more active together. David is fully vaccinated and neutered.'
    }
  };

  res.json(dogs);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
