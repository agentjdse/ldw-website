import React from 'react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div>
            <h3 className="text-3xl font-bold mb-6 text-pink-300">
              À Propos
            </h3>
            <p className="text-gray-200 text-base leading-relaxed">
              Nous créons des sites web modernes et performants qui propulsent votre activité en ligne.
            </p>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6 text-pink-300">
              Services
            </h3>
            <ul className="text-gray-200 text-base space-y-4">
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors duration-300 flex items-center gap-3">
                  <span className="text-pink-400 text-xl">→</span> Sites Vitrines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors duration-300 flex items-center gap-3">
                  <span className="text-pink-400 text-xl">→</span> E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors duration-300 flex items-center gap-3">
                  <span className="text-pink-400 text-xl">→</span> Maintenance
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6 text-pink-300">
              Entreprise
            </h3>
            <ul className="text-gray-200 text-base space-y-4">
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors duration-300 flex items-center gap-3">
                  <span className="text-pink-400 text-xl">→</span> Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors duration-300 flex items-center gap-3">
                  <span className="text-pink-400 text-xl">→</span> Carrières
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors duration-300 flex items-center gap-3">
                  <span className="text-pink-400 text-xl">→</span> Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6 text-pink-300">
              Légal
            </h3>
            <ul className="text-gray-200 text-base space-y-4">
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors duration-300 flex items-center gap-3">
                  <span className="text-pink-400 text-xl">→</span> Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors duration-300 flex items-center gap-3">
                  <span className="text-pink-400 text-xl">→</span> Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors duration-300 flex items-center gap-3">
                  <span className="text-pink-400 text-xl">→</span> Mentions légales
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-pink-300/30 pt-8">
          <div className="text-center">
            <p className="text-gray-200 text-base mb-2">
              © 2026 <span className="text-pink-300 font-semibold">LDW</span>. Tous droits réservés.
            </p>
            <p className="text-gray-300 text-sm">
              Propulsé par la passion du web design
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};