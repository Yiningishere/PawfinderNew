import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Search, Filter, MapPin } from 'lucide-react';

type DogCard = {
  id: string;
  name: string;
  age: string;
  location: string;
  image: string;
  description: string;
  size: string; // Added size to the DogCard type
};

const dogs: DogCard[] = [
  {
    id: '1',
    name: 'Max',
    age: 'adult',
    location: 'Downtown Shelter',
    image: 'https://i.postimg.cc/6qzHmJ5K/max-paw-finder.jpg',
    description: 'Friendly and energetic dog looking for a loving home.',
    size: 'medium', // Added size information
  },
  {
    id: '2',
    name: 'Luna',
    age: 'puppy',
    location: 'East Side Rescue',
    image: 'https://i.postimg.cc/hPS6bMPg/luna-paw-finder.jpg',
    description: 'Sweet and gentle soul, great with kids.',
    size: 'small', // Added size information
  },
  {
    id: '3',
    name: 'Rocky',
    age: 'adult',
    location: 'West Park Shelter',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=800',
    description: 'Playful and loving dog seeking forever family.',
    size: 'large', // Added size information
  }
];

export default function HomePage() {
  const [filters, setFilters] = useState({ age: '', searchQuery: '', size: '', location: '' });

  const filteredDogs = dogs.filter((dog) => {
    const ageMatch = filters.age === '' || dog.age === filters.age;
    const sizeMatch = filters.size === '' || dog.size === filters.size;
    const locationMatch = filters.location === '' || dog.location.toLowerCase().includes(filters.location.toLowerCase());
    const searchQuery = filters.searchQuery.toLowerCase();
    const searchMatch = filters.searchQuery === '' || 
      dog.name.toLowerCase().includes(searchQuery) ||
      dog.location.toLowerCase().includes(searchQuery) ||
      dog.description.toLowerCase().includes(searchQuery);
    return ageMatch && sizeMatch && locationMatch && searchMatch;
  });

  return (
    <div>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Companion</h1>
            <p className="text-xl mb-8 max-w-2xl">Give a stray dog a loving forever home. Every adoption makes a difference.</p>
            
            {/* Search Bar */}
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-2 flex">
              <div className="flex-1 flex items-center px-4">
                <Search className="w-5 h-5 text-gray-500" /> {/* Changed to a visible color */}
                <input
                  type="text"
                  placeholder="Search for dogs..."
                  className="w-full px-4 py-2 focus:outline-none text-gray-900" // Added text-gray-900 for visibility
                  value={filters.searchQuery}
                  onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                />
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Filter className="w-5 h-5 text-gray-600" />
          <div className="flex flex-wrap gap-2">
            <select
              value={filters.age}
              onChange={(e) => setFilters({ ...filters, age: e.target.value })}
              className="w-full sm:w-auto px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              aria-label="Filter by age"
            >
              <option value="">Age</option>
              <option value="puppy">Puppy (&lt; 1 year)</option>
              <option value="adult">Adult (1-7 years)</option>
              <option value="senior">Senior (&gt; 7 years)</option>
            </select>
            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="w-full sm:w-auto px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              aria-label="Filter by location"
            >
              <option value="">Location</option>
              <option value="downtown shelter">Downtown Shelter</option>
              <option value="east side rescue">East Side Rescue</option>
              <option value="west park shelter">West Park Shelter</option>
            </select>
            <select
              value={filters.size}
              onChange={(e) => setFilters({ ...filters, size: e.target.value })}
              className="w-full sm:w-auto px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              aria-label="Filter by size"
            >
              <option value="">Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>

        {/* Dog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDogs.map((dog) => (
            <div key={dog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={dog.image}
                alt={dog.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold">{dog.name}</h3>
                  <button className="text-red-500 hover:text-red-600" aria-label={`Favorite ${dog.name}`}>
                    <Heart className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{dog.location}</span>
                </div>
                <div className="text-gray-600 mb-4">
                  <span className="font-medium">Age:</span> {dog.age}
                </div>
                <div className="text-gray-600 mb-4">
                  <span className="font-medium">Size:</span> {dog.size}
                </div>
                <p className="text-gray-700 mb-4">{dog.description}</p>
                <Link
                  to={`/dog/${dog.id}`}
                  className="block w-full bg-blue-600 text-white py-2 text-center rounded-md hover:bg-blue-700 transition"
                  aria-label={`Learn more about ${dog.name}`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
