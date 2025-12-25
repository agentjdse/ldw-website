import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 w-full max-w-5xl">
            
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-pink-300">
                À Propos
              </h3>
              <p className="text-gray-800 text-base leading-relaxed max-w-xs mx-auto">
                Nous créons des sites web modernes et performants qui propulsent votre activité en ligne.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-pink-300">
                Services
              </h3>
              <ul className="text-gray-600 text-base space-y-4">
                <li>
                  <a href="#" className="hover:text-pink-300 transition-colors duration-300 flex items-center justify-center gap-3">
                    <span className="text-pink-400 text-xl">→</span> Sites Vitrines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-300 transition-colors duration-300 flex items-center justify-center gap-3">
                    <span className="text-pink-400 text-xl">→</span> E-commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-300 transition-colors duration-300 flex items-center justify-center gap-3">
                    <span className="text-pink-400 text-xl">→</span> Maintenance
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Ajoutez d'autres colonnes ici si nécessaire */}
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-pink-300">
                Contact
              </h3>
              <p className="text-gray-800 text-base leading-relaxed max-w-xs mx-auto">
                Contactez-nous pour discuter de votre projet.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-pink-300">
                Réseaux
              </h3>
              <ul className="text-gray-600 text-base space-y-4">
                <li>
                  <a href="#" className="hover:text-pink-300 transition-colors duration-300 flex items-center justify-center gap-3">
                    <span className="text-pink-400 text-xl">→</span> Instagram
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-pink-300 transition-colors duration-300 flex items-center justify-center gap-3">
                    <span className="text-pink-400 text-xl">→</span> Twitter
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
          
          <div className="border-t border-pink-300/30 pt-8 w-full max-w-5xl">
            <div className="text-center">
              <p className="text-gray-600 text-base mb-2">
                © 2026 <span className="text-pink-300 font-semibold">LDW</span>. Tous droits réservés.
              </p>
              <p className="text-gray-500 text-sm">
                Propulsé par la passion du web design
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;