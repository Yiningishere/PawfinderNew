import { Link } from 'react-router-dom';
import { PawPrint, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="w-6 h-6" />
              <span className="text-xl font-semibold">Paw Finder</span>
            </div>
            <p className="text-gray-400">
              Helping stray dogs find their forever homes.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-400 hover:text-white transition" aria-label="Call us">
                <Phone className="w-6 h-6" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:help@straydogs.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition" aria-label="Email us">
                <Mail className="w-6 h-6" />
                <span>help@straydogs.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="flex items-center gap-2 text-gray-400 hover:text-white transition" aria-label="Learn more about us">
                <ArrowRight className="w-6 h-6" />
                <span>About</span>
              </Link>
              <Link to="/privacy" className="flex items-center gap-2 text-gray-400 hover:text-white transition" aria-label="View our privacy policy">
                <ArrowRight className="w-6 h-6" />
                <span>Privacy Policy</span>
              </Link>
              <Link to="/terms" className="flex items-center gap-2 text-gray-400 hover:text-white transition" aria-label="View our terms of service">
                <ArrowRight className="w-6 h-6" />
                <span>Terms of Service</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Stray Dog Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
