
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary">Miasteczkole</h2>
            <p className="text-gray-600">Przedszkole pełne radości i kreatywności</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#o-nas" className="text-gray-600 hover:text-primary transition-colors">O nas</a>
            <a href="#oferta" className="text-gray-600 hover:text-primary transition-colors">Oferta</a>
            <a href="#kontakt" className="text-gray-600 hover:text-primary transition-colors">Kontakt</a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Miasteczkole. Wszelkie prawa zastrzeżone.
          </p>
          
          <div className="text-gray-500 text-sm flex items-center">
            <p className="flex items-center">
              Stworzone z pasją dla dzieci <Heart className="inline-block w-4 h-4 mx-1 text-red-500" /> i rodziców
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
