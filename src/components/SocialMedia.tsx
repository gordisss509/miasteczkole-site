
import { Facebook, Instagram, Mail } from 'lucide-react';

const SocialMedia = () => {
  return (
    <section className="section bg-primary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-0">
            Śledź nas w mediach społecznościowych
          </h2>
          
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/profile.php?id=100057666840360" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary p-3 rounded-full hover:bg-secondary transition-all duration-300 transform hover:scale-110"
            >
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook Miasteczkole</span>
            </a>
            
            <a 
              href="https://www.facebook.com/profile.php?id=100057666840360" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary p-3 rounded-full hover:bg-secondary transition-all duration-300 transform hover:scale-110"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
            
            <a 
              href="https://www.facebook.com/martyna.bunikowska" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary p-3 rounded-full hover:bg-secondary transition-all duration-300 transform hover:scale-110"
            >
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Profil założycielki</span>
            </a>
            
            <a 
              href="mailto:miasteczkole@gmail.com" 
              className="bg-white text-primary p-3 rounded-full hover:bg-secondary transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
