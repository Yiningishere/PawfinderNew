import { AlertTriangle, HelpCircle } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: March 14, 2024</p>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
              <p className="mt-1 text-sm text-yellow-700">
                By using our platform, you agree to these terms of service. Please read them carefully.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing or using the Stray Dog Platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Platform Usage</h2>
            <p className="mb-6">Users must:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide accurate and truthful information</li>
              <li>Report stray dogs responsibly and ethically</li>
              <li>Respect the privacy and rights of others</li>
              <li>Not use the platform for any illegal purposes</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            <p className="mb-6">
              When using our platform, you are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>Ensuring the accuracy of reported information</li>
              <li>Following local laws and regulations regarding animal welfare</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">4. Content Guidelines</h2>
            <p className="mb-6">
              Users must not post content that:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Is false, misleading, or deceptive</li>
              <li>Infringes on any patent, trademark, or copyright</li>
              <li>Contains harmful or malicious code</li>
              <li>Promotes violence or illegal activities</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">5. Adoption Process</h2>
            <p className="mb-6">
              The adoption process requires:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Completion of adoption application</li>
              <li>Background check verification</li>
              <li>Agreement to post-adoption follow-ups</li>
              <li>Compliance with local pet ownership laws</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
            <p className="mb-6">
              The Stray Dog Platform is not liable for:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Accuracy of user-submitted information</li>
              <li>Behavior or health conditions of adopted dogs</li>
              <li>Disputes between users</li>
              <li>Any indirect, consequential, or incidental damages</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or platform notifications.
            </p>

            <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
            <p>
              For questions about these terms, please contact us:
              <br />
              Email: legal@straydogs.com
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <div className="flex items-start">
            <HelpCircle className="w-6 h-6 text-blue-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Need Help?</h3>
              <p className="text-blue-700">
                If you have any questions about our terms of service or need assistance, our support team is here to help.
                Contact us at support@straydogs.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}