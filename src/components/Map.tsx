
import { MapPin, Phone, Mail } from 'lucide-react';

const Map = () => {
  return (
    <section id="lokalizacja" className="section bg-primary-lighter">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Gdzie nas znaleźć</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2324.2039667394226!2d18.534721376935293!3d53.976694179730924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47029dd2bfff4d6b%3A0x3cbdd75f7c6c01cc!2sMiasteczkole%20-%20%C5%BC%C5%82obek%20i%20przedszkole!5e0!3m2!1spl!2spl!4v1716135008107!5m2!1spl!2spl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja przedszkola Miasteczkole"
            ></iframe>
          </div>
          
          <div className="w-full lg:w-1/3 glassmorphism p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Informacje kontaktowe</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary text-white p-2 rounded-full mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Adres</h4>
                  <p>Korczaka 19</p>
                  <p>83-200 Starogard Gdański</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-2 rounded-full mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Telefon</h4>
                  <a href="tel:+48601773535" className="hover:text-primary-light transition-colors">
                    +48 601 773 353
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-2 rounded-full mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href="mailto:kontakt@miasteczkole.pl" className="hover:text-primary-light transition-colors">
                   Miasteczkole@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-2">Godziny otwarcia</h4>
              <div className="grid grid-cols-2 gap-2">
                <div>Poniedziałek - Piątek:</div>
                <div>6:30 - 17:00</div>
                <div>Weekendy:</div>
                <div>Zamknięte</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
