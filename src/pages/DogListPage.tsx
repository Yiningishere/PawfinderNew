import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart, Share2 } from 'lucide-react';

interface DogCard {
  findIndex(arg0: (d: { name: string; }) => boolean): unknown;
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

export default function DogsListPage() {
  const [dogList, setDogList] = useState<DogCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch('/api/dogs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDogList(Object.values(data));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dogs:', error);
        setError('Failed to fetch dogs. Please try again later.');
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Loading Dogs...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Meet Our Dogs</h1>
        <p className="text-gray-600">
          Discover the wonderful dogs available for adoption at our shelters.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dogList.map((dog) => (
          <div key={dog.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <img
              src={dog.image}
              alt={dog.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{dog.name}</h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-red-100 text-red-500 hover:bg-red-200 transition">
                  <Heart className="w-6 h-6" />
                </button>
                <button className="p-2 rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200 transition">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{dog.location}</span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">{dog.description}</p>
            <Link
            to={`/dog/${dog.findIndex((d: { name: string; }) => d.name === dog.name)}`}              className="block w-full bg-blue-600 text-white py-3 text-center rounded-lg hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
