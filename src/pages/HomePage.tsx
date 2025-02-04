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
};

const dogs: DogCard[] = [
  {
    id: '1',
    name: 'Max',
    age: 'adult',
    location: 'Downtown Shelter',
    image: 'https://i.postimg.cc/6qzHmJ5K/max-paw-finder.jpg',
    description: 'Friendly and energetic dog looking for a loving home.'
  },
  {
    id: '2',
    name: 'Luna',
    age: 'puppy',
    location: 'East Side Rescue',
    image: 'https://i.postimg.cc/hPS6bMPg/luna-paw-finder.jpg',
    description: 'Sweet and gentle soul, great with kids.'
  },
  {
    id: '3',
    name: 'Rocky',
    age: 'adult',
    location: 'West Park Shelter',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=800',
    description: 'Playful and loving dog seeking forever family.'
  }
];

export default function HomePage() {
  const [filters, setFilters] = useState({ age: '', searchQuery: '' });

  const filteredDogs = dogs.filter((dog) => {
    const ageMatch = filters.age === '' || dog.age === filters.age;
    const searchMatch = filters.searchQuery === '' || 
      dog.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      dog.location.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      dog.description.toLowerCase().includes(filters.searchQuery.toLowerCase());
    return ageMatch && searchMatch;
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
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for dogs..."
                  className="w-full px-4 py-2 focus:outline-none"
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
            >
              <option value="">Age</option>
              <option value="puppy">Puppy (&lt; 1 year)</option>
              <option value="adult">Adult (1-7 years)</option>
              <option value="senior">Senior (&gt; 7 years)</option>
            </select>
            <button className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
              Location
            </button>
            <button className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
              Size
            </button>
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
                  <button className="text-red-500 hover:text-red-600">
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
                <p className="text-gray-700 mb-4">{dog.description}</p>
                <Link
                  to={`/dog/${dog.id}`}
                  className="block w-full bg-blue-600 text-white py-2 text-center rounded-md hover:bg-blue-700 transition"
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
