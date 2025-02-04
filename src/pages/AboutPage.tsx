import { Heart, Users, Shield, PawPrint } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Mission</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're dedicated to making a difference in the lives of stray dogs and connecting them with loving families.
        </p>
      </div>

      {/* Mission Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <PawPrint className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">1,000+</h3>
          <p className="text-gray-600">Dogs Rescued</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">800+</h3>
          <p className="text-gray-600">Successful Adoptions</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">50+</h3>
          <p className="text-gray-600">Volunteer Partners</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">5</h3>
          <p className="text-gray-600">Years of Service</p>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <div className="prose max-w-none text-gray-700 space-y-4">
          <p>
            Founded in 2019, Pawfinder emerged from a simple yet powerful idea: every dog deserves a loving home. What started as a small group of passionate volunteers has grown into a nationwide network of animal lovers, shelters, and supporters.
          </p>
          <p>
            Our platform serves as a bridge between stray dogs and potential adopters, making it easier than ever to connect homeless dogs with loving families. We work tirelessly to rescue, rehabilitate, and rehome stray dogs while educating communities about responsible pet ownership.
          </p>
          <p>
            Through partnerships with local shelters, veterinarians, and dedicated volunteers, we've created a comprehensive support system for both the dogs in our care and the families who choose to adopt them.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-12">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              role: 'Founder & CEO',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
            },
            {
              name: 'Michael Chen',
              role: 'Head of Operations',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
            },
            {
              name: 'Emily Rodriguez',
              role: 'Veterinary Director',
              image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200',
            },
          ].map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-md p-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}