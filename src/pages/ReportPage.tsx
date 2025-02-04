import React, { useState } from 'react';
import { Camera, MapPin, Calendar, AlertTriangle } from 'lucide-react';

interface FormData {
  streetAddress: string;
  city: string;
  dateSeen: string;
  timeSeen: string;
  appearance: string;
  behavior: string;
  name: string;
  phoneNumber: string;
}

interface UploadedFilesResponse {
  message: string;
  files: string[];
}

export default function ReportPage() {
  const [images, setImages] = useState<FileList | null>(null);
  const [formData, setFormData] = useState<FormData>({
    streetAddress: '',
    city: '',
    dateSeen: '',
    timeSeen: '',
    appearance: '',
    behavior: '',
    name: '',
    phoneNumber: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Basic validation
    if (!formData.streetAddress || !formData.city || !formData.dateSeen || !formData.timeSeen || !formData.appearance || !formData.behavior) {
      setErrorMessage('Please fill out all required fields.');
      setLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('streetAddress', formData.streetAddress);
    formDataToSend.append('city', formData.city);
    formDataToSend.append('dateSeen', formData.dateSeen);
    formDataToSend.append('timeSeen', formData.timeSeen);
    formDataToSend.append('appearance', formData.appearance);
    formDataToSend.append('behavior', formData.behavior);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phoneNumber', formData.phoneNumber);

    if (images) {
      for (let i = 0; i < images.length; i++) {
        formDataToSend.append('images[]', images[i]);
      }
    }

    try {
      const response = await fetch('http://localhost:3000/api/report-stray-dog', {
        method: 'POST',
        body: formDataToSend
      });

      const data: UploadedFilesResponse = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        setUploadedImages(data.files);
        // Optionally, reset the form
        setFormData({
          streetAddress: '',
          city: '',
          dateSeen: '',
          timeSeen: '',
          appearance: '',
          behavior: '',
          name: '',
          phoneNumber: ''
        });
        setImages(null);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error submitting report:', error);
      setErrorMessage('There was an error submitting your report. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Report a Stray Dog</h1>
          <p className="text-gray-600">
            Help us locate and rescue stray dogs by providing information about their whereabouts.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
              <p className="mt-1 text-sm text-yellow-700">
                If you see a dog in immediate danger or distress, please contact emergency services
                or your local animal control immediately.
              </p>
            </div>
          </div>
        </div>

        {successMessage && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-green-800">Success</h3>
                <p className="mt-1 text-sm text-green-700">
                  {successMessage}
                </p>
              </div>
            </div>
          </div>
        )}

        {errorMessage && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-red-400 mr-3 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-red-800">Error</h3>
                <p className="mt-1 text-sm text-red-700">
                  {errorMessage}
                </p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow-md p-6">
          {/* Location Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Location Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter street address"
                  name="streetAddress"
                  id="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter city"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Time Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Sighting Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="dateSeen" className="block text-sm font-medium text-gray-700 mb-1">
                  Date Seen
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  name="dateSeen"
                  id="dateSeen"
                  value={formData.dateSeen}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="timeSeen" className="block text-sm font-medium text-gray-700 mb-1">
                  Time Seen
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  name="timeSeen"
                  id="timeSeen"
                  value={formData.timeSeen}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Dog Description */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Dog Description</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="appearance" className="block text-sm font-medium text-gray-700 mb-1">
                  Appearance
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  placeholder="Describe the dog's size, color, breed (if known), and any distinctive features"
                  name="appearance"
                  id="appearance"
                  value={formData.appearance}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="behavior" className="block text-sm font-medium text-gray-700 mb-1">
                  Behavior
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  placeholder="Describe the dog's behavior (friendly, scared, aggressive, etc.)"
                  name="behavior"
                  id="behavior"
                  value={formData.behavior}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Photo Upload */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Photos
            </h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => setImages(e.target.files)}
                className="hidden"
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                className="cursor-pointer block"
              >
                <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <span className="text-sm text-gray-600">
                  Click to upload photos of the dog
                </span>
              </label>
              {images && (
                <div className="mt-4 text-sm text-gray-600">
                  {images.length} file(s) selected
                </div>
              )}
            </div>
            {uploadedImages.length > 0 && (
              <div className="mt-4 space-y-4">
                <h3 className="text-lg font-semibold">Uploaded Photos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {uploadedImages.map((imageUrl, index) => (
                    <img
                      key={index}
                      src={imageUrl}
                      alt={`Uploaded ${index}`}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your phone number"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button" // Use type="button" to prevent default form submission
            onClick={handleSubmit}
            className="w-full sm:w-auto bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Report'}
          </button>
        </form>
      </div>
    </div>
  );
}
