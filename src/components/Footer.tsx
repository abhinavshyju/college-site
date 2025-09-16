import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { label: 'About Institution', section: 'about' },
    { label: 'Admissions', section: 'admissions' },
    { label: 'Academics', section: 'academics' },
    { label: 'Student Life', section: 'student-life' },
    { label: 'Contact', section: 'contact' }
  ];

  const importantLinks = [
    { label: 'IHRD Kerala', url: 'https://ihrd.ac.in' },
    { label: 'Calicut University', url: 'https://uoc.ac.in' },
    { label: 'UGC', url: 'https://ugc.ac.in' },
    { label: 'NAAC', url: 'https://naac.gov.in' },
    { label: 'NIRF', url: 'https://nirfindia.org' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400 mr-3" />
              <div>
                <h3 className="text-lg font-bold">College of Applied Science</h3>
                <p className="text-gray-400 text-sm">Thamarassery</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Empowering students with quality education in applied sciences since 1995. 
              Affiliated to Calicut University and under IHRD Kerala.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Important Links</h4>
            <ul className="space-y-2">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-blue-400 mr-2 mt-1" />
                <div className="text-gray-300 text-sm">
                  <p>College of Applied Science</p>
                  <p>Thamarassery, Kozhikode</p>
                  <p>Kerala - 673573, India</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-blue-400 mr-2" />
                <a href="tel:+914952244567" className="text-gray-300 hover:text-white text-sm transition-colors">
                  +91-495-2244567
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-blue-400 mr-2" />
                <a href="mailto:info@casthamarassery.ac.in" className="text-gray-300 hover:text-white text-sm transition-colors">
                  info@casthamarassery.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 College of Applied Science, Thamarassery. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              Affiliated to Calicut University | Under Institute of Human Resources Development (IHRD), Kerala
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;