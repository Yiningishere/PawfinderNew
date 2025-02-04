import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Heart, AlertCircle, Calendar } from 'lucide-react';

type Dog = {
  id: string;
  name: string;
  age: string;
  location: string;
  image: string;
  description: string;
  type: 'adoption' | 'lost';
  breed: string;
  gender: 'Male' | 'Female';
  size: 'Small' | 'Medium' | 'Large';
  datePosted: string;
};

const dogs: Dog[] = [
  {
    id: '1',
    name: 'Max',
    age: '2',
    location: 'Downtown Shelter',
    image: 'https://images.unsplash.com/photo-1587559045816-8b0a54d4e43e?auto=format&fit=crop&q=80&w=800',
    description: 'Friendly and energetic dog looking for a loving home.',
    type: 'adoption',
    breed: 'Mixed Breed',
    gender: 'Male',
    size: 'Medium',
    datePosted: '2024-03-10',
  },
  {
    id: '2',
    name: 'Luna',
    age: '1',
    location: 'East Side Rescue',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800',
    description: 'Sweet and gentle soul, great with kids.',
    type: 'adoption',
    breed: 'Labrador Mix',
    gender: 'Female',
    size: 'Large',
    datePosted: '2024-03-12',
  },
  {
    id: '3',
    name: 'Rocky',
    age: '3',
    location: 'West Park Area',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=800',
    description: 'Lost near West Park. Last seen wearing a red collar.',
    type: 'lost',
    breed: 'German Shepherd Mix',
    gender: 'Male',
    size: 'Large',
    datePosted: '2024-03-14',
  },
  {
    id: '4',
    name: 'Bella',
    age: '4',
    location: 'North Shopping Mall',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800',
    description: 'Lost during shopping. Has a blue collar with ID tag.',
    type: 'lost',
    breed: 'Golden Retriever',
    gender: 'Female',
    size: 'Large',
    datePosted: '2024-03-13',
  },
];

export default function DogsListingPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'adoption' | 'lost'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    size: '',
    gender: '',
    age: '',
  });
  const [favorites, setFavorites] = useState<string[]>([]); // State to manage favorite dogs

  const filteredDogs = dogs.filter((dog) => {
    if (activeTab !== 'all' && dog.type !== activeTab) return false;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        dog.name.toLowerCase().includes(query) ||
        dog.breed.toLowerCase().includes(query) ||
        dog.location.toLowerCase().includes(query)
      );
    }

    if (filters.size && dog.size !== filters.size) return false;
    if (filters.gender && dog.gender !== filters.gender) return false;
    if (filters.age) {
      const age = parseInt(dog.age, 10);
      if (filters.age === 'puppy' && age >= 1) return false;
      if (filters.age === 'adult' && (age < 1 || age > 7)) return false;
      if (filters.age === 'senior' && age <= 7) return false;
    }

    return true;
  });

  // Function to toggle favorite state
  const toggleFavorite = (id: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favoriteId) => favoriteId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Companion</h1>
        <p className="text-xl text-gray-600 px-4">
          Browse dogs available for adoption or help reunite lost dogs with their families
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, breed, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={filters.size}
              onChange={(e) => setFilters({ ...filters, size: e.target.value })}
              className="w-full sm:w-auto px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
            <select
              value={filters.gender}
              onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
              className="w-full sm:w-auto px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <select
              value={filters.age}
              onChange={(e) => setFilters({ ...filters, age: e.target.value })}
              className="w-full sm:w-auto px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Age</option>
              <option value="puppy">Puppy ( 1 year)</option>
              <option value="adult">Adult (1-7 years)</option>
              <option value="senior">Senior (&gt; 7 years)</option>
            </select>
          </div>
        </div>

        {/* Tabs - Now scrollable on mobile */}
        <div className="overflow-x-auto">
          <div className="flex gap-4 border-b min-w-max pb-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`pb-3 px-4 font-medium whitespace-nowrap ${
                activeTab === 'all'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              All Dogs
            </button>
            <button
              onClick={() => setActiveTab('adoption')}
              className={`pb-3 px-4 font-medium whitespace-nowrap ${
                activeTab === 'adoption'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Available for Adoption
            </button>
            <button
              onClick={() => setActiveTab('lost')}
              className={`pb-3 px-4 font-medium whitespace-nowrap ${
                activeTab === 'lost'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Lost Dogs
            </button>
          </div>
        </div>
      </div>

      {/* Dogs Grid */}
      {filteredDogs.length === 0 ? (
        <div className="text-center py-12">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No Dogs Found</h3>
          <p className="text-gray-600">Try adjusting your filters or search terms</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredDogs.map((dog) => (
            <div key={dog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative">
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                {dog.type === 'lost' && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    Lost Dog
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold">{dog.name}</h3>
                  <button 
                    onClick={() => toggleFavorite(dog.id)} // Add onClick to toggle favorite state
                    className={`text-red-500 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-colors ${
                      favorites.includes(dog.id) ? 'text-blue-500 hover:text-blue-600' : ''
                    }`}
                    aria-label="Add to favorites"
                  >
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base truncate">{dog.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Posted {new Date(dog.datePosted).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-600">
                    {dog.breed}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-600">
                    {dog.age} years
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-600">
                    {dog.size}
                  </span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-4 line-clamp-2">{dog.description}</p>
                <Link
                  to={`/dog/${dog.id}`}
                  className="block w-full bg-blue-600 text-white py-2 text-center rounded-md hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {dog.type === 'adoption' ? 'Learn More' : 'Help Find'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
