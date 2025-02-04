import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: March 14, 2024</p>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Data Protection</h3>
            </div>
            <p className="text-gray-600">
              We implement robust security measures to protect your personal information.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <Lock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">Secure Storage</h3>
            </div>
            <p className="text-gray-600">
              Your data is encrypted and stored securely on protected servers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold">Transparency</h3>
            </div>
            <p className="text-gray-600">
              We're clear about how we collect, use, and protect your information.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 p-2 rounded-lg">
                <UserCheck className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold">User Control</h3>
            </div>
            <p className="text-gray-600">
              You have full control over your personal data and privacy settings.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="mb-6">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Name and contact information</li>
              <li>Location data for dog sightings</li>
              <li>Photos and descriptions of dogs</li>
              <li>Account preferences and settings</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="mb-6">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Connect stray dogs with potential adopters</li>
              <li>Improve our services and user experience</li>
              <li>Communicate updates and relevant information</li>
              <li>Ensure the safety and security of our platform</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="mb-6">
              We do not sell or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Partner shelters and rescue organizations</li>
              <li>Service providers who assist in our operations</li>
              <li>Law enforcement when required by law</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
            <p className="mb-6">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about our privacy policy or practices, please contact us at:
              <br />
              Email: privacy@straydogs.com
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}