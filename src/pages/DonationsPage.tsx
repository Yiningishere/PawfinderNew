import React, { useState } from 'react';
import { Heart, DollarSign, Gift, Clock, PawPrint, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type DonationOption = {
  id: string;
  amount: number;
  description: string;
  impact: string;
};

const donationOptions: DonationOption[] = [
  {
    id: '1',
    amount: 25,
    description: 'Food and Basic Care',
    impact: 'Provides food and basic care for one dog for a week',
  },
  {
    id: '2',
    amount: 50,
    description: 'Medical Check-up',
    impact: 'Covers a complete medical check-up and vaccinations',
  },
  {
    id: '3',
    amount: 100,
    description: 'Emergency Care',
    impact: 'Helps fund emergency medical procedures and treatments',
  },
  {
    id: '4',
    amount: 200,
    description: 'Shelter Support',
    impact: 'Supports shelter operations and improvements',
  },
];

export default function DonationsPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission
    const donationData = {
      amount: selectedAmount || Number(customAmount),
      type: donationType,
      donorInfo,
    };

    // Log or store donation data as needed
    console.log(donationData);

    // Navigate to the payment page
    navigate('/payment', { state: donationData });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference Today</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your donation helps us rescue, care for, and find loving homes for stray dogs.
          Every contribution makes a real impact.
        </p>
      </div>

      {/* Impact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <PawPrint className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">1,000+</h3>
          <p className="text-gray-600">Dogs Helped This Year</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">$50,000</h3>
          <p className="text-gray-600">Raised for Medical Care</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">500+</h3>
          <p className="text-gray-600">Monthly Donors</p>
        </div>
      </div>

      {/* Donation Form */}
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          {/* Donation Type Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Choose Donation Type</h2>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setDonationType('one-time')}
                className={`flex-1 py-3 px-4 rounded-lg border-2 transition ${
                  donationType === 'one-time'
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 hover:border-blue-600'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  <span>One-time Donation</span>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDonationType('monthly')}
                className={`flex-1 py-3 px-4 rounded-lg border-2 transition ${
                  donationType === 'monthly'
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 hover:border-blue-600'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Monthly Donation</span>
                </div>
              </button>
            </div>
          </div>

          {/* Donation Amount Options */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Select Amount</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {donationOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(option.amount);
                    setCustomAmount('');
                  }}
                  className={`p-4 rounded-lg border-2 text-left transition ${
                    selectedAmount === option.amount
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-600'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xl font-bold">${option.amount}</span>
                    <ArrowRight className={`w-5 h-5 ${
                      selectedAmount === option.amount ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <p className="text-gray-600 text-sm mb-1">{option.description}</p>
                  <p className="text-gray-500 text-xs">{option.impact}</p>
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
            </div>
          </div>

          {/* Donor Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={donorInfo.name}
                  onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={donorInfo.email}
                  onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  value={donorInfo.message}
                  onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="Share why you're donating..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button" // Change type to button to prevent default form submission
            onClick={handleSubmit}
            className="w-full sm:w-auto bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Complete Donation
          </button>
        </form>

        {/* Trust Indicators */}
        <div className="mt-8 text-center text-gray-600">
          <p className="mb-2">🔒 Secure Payment Processing</p>
          <p className="text-sm">
            Your donation is tax-deductible. You will receive a receipt via email.
          </p>
        </div>
      </div>
    </div>
  );
}
