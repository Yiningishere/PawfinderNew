import { Link } from 'react-router-dom';
import { PawPrint, Phone, Mail } from 'lucide-react';

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
              <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                <Phone className="w-5 h-5" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:help@straydogs.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                <Mail className="w-5 h-5" />
                <span>help@straydogs.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white transition">About</Link>
              <Link to="/privacy" className="block text-gray-400 hover:text-white transition">Privacy Policy</Link>
              <Link to="/terms" className="block text-gray-400 hover:text-white transition">Terms of Service</Link>
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