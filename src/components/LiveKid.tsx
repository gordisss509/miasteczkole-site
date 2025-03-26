
import { Apple, Smartphone } from 'lucide-react';

const LiveKid = () => {
  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  };

  const getAppLink = () => {
    if (isIOS()) {
      return "https://apps.apple.com/pl/app/livekid/id1436616910";
    } else {
      return "https://play.google.com/store/apps/details?id=com.livekidmobileadmin";
    }
  };

  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="section-title">Korzystamy z LiveKid</h2>
            <p className="text-lg mb-6">
              W Miasteczkole korzystamy z systemu LiveKid, który ułatwia komunikację między rodzicami a przedszkolem. Dzięki aplikacji rodzice mają stały dostęp do informacji o swoim dziecku.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-secondary p-2 rounded-full mr-4">
                  <span className="text-primary text-lg font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Łatwa komunikacja</h3>
                  <p>Bezpośredni kontakt z nauczycielami, powiadomienia i wiadomości</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary p-2 rounded-full mr-4">
                  <span className="text-primary text-lg font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Zdjęcia i aktualności</h3>
                  <p>Regularnie udostępniamy zdjęcia i informacje o aktywności dzieci</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary p-2 rounded-full mr-4">
                  <span className="text-primary text-lg font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Plan zajęć i menu</h3>
                  <p>Dostęp do planu dnia i jadłospisu Twojego dziecka</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://livekid.com/pl/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-all duration-300 text-center"
              >
                Dowiedz się więcej
              </a>
              <a 
                href={getAppLink()} 
                target="_blank"
                rel="noopener noreferrer" 
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                {isIOS() ? (
                  <Apple className="mr-2" />
                ) : (
                  <Smartphone className="mr-2" />
                )}
                Zainstaluj aplikację
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary rounded-full opacity-10 animate-pulse-soft"></div>
              <div className="absolute inset-4 bg-primary-light rounded-full opacity-20 animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-8 bg-white rounded-full shadow-xl flex items-center justify-center p-8">
                <img 
                  src="https://livekid.com/wp-content/uploads/2021/05/logo-livekid.svg" 
                  alt="LiveKid Logo" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveKid;
