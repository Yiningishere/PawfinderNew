import { useParams } from 'react-router-dom';
import { MapPin, Heart, Share2, AlertCircle } from 'lucide-react';

interface DogCard {
  name: string;
  age: string;
  location: string;
  image: string;
  description: string;
  breed: string;
  size: string;
  gender: string;
  vaccinated: boolean;
  neutered: boolean;
  goodWith: string[];
  story: string;
}

const dogs: { [key: string]: DogCard } = {
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

export default function DogPage() {
  const { id } = useParams<{ id: string }>();
  const dog = id ? dogs[id as keyof typeof dogs] : null;

  if (!dog) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Dog Not Found</h1>
        <p className="text-gray-600">The dog you're looking for doesn't exist in our database.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div>
          <img
            src={dog.image}
            alt={dog.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">{dog.name}</h1>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{dog.location}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-red-100 text-red-500 hover:bg-red-200 transition">
                <Heart className="w-6 h-6" />
              </button>
              <button className="p-2 rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200 transition">
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <span className="text-gray-600">Breed</span>
              <p className="font-semibold">{dog.breed}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <span className="text-gray-600">Age</span>
              <p className="font-semibold">{dog.age}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <span className="text-gray-600">Size</span>
              <p className="font-semibold">{dog.size}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <span className="text-gray-600">Gender</span>
              <p className="font-semibold">{dog.gender}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Health</h2>
            <div className="flex gap-4">
              <span className={`px-4 py-2 rounded-full ${dog.vaccinated ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {dog.vaccinated ? 'Vaccinated' : 'Not Vaccinated'}
              </span>
              <span className={`px-4 py-2 rounded-full ${dog.neutered ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {dog.neutered ? 'Neutered' : 'Not Neutered'}
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Good With</h2>
            <div className="flex flex-wrap gap-2">
              {dog.goodWith.map((item) => (
                <span key={item} className="px-4 py-2 rounded-full bg-blue-100 text-blue-700">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Story</h2>
            <p className="text-gray-700 leading-relaxed">{dog.story}</p>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Adopt {dog.name}
          </button>
        </div>
      </div>
    </div>
  );
}
