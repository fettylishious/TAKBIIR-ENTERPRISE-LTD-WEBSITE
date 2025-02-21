import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" alt="Takbiir Enterprises" className="h-12 mb-4" />
            <p className="text-gray-400">Your trusted logistics partner for all your transportation needs.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Road Transport</li>
              <li className="text-gray-400">Warehousing</li>
              <li className="text-gray-400">Supply Chain</li>
              <li className="text-gray-400">Logistics Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">123 Logistics Street</li>
              <li className="text-gray-400">City, Country</li>
              <li className="text-gray-400">+1 234 567 890</li>
              <li className="text-gray-400">contact@takbiir.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Takbiir Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}