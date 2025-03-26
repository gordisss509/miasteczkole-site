
import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  const [bubbles, setBubbles] = useState<Array<{id: number, x: number, y: number, size: number, delay: number, color: string}>>([]);
  const [textIndex, setTextIndex] = useState(0);
  const rotatingTexts = [
    "Kameralny żłobek i przedszkole w Starogardzie Gdańskim",
    "Miejsce, gdzie dzieci uczą się przez zabawę i odkrywanie świata",
    "Profesjonalna kadra i pełna opieka dla Twojego dziecka",
    "Zajęcia z angielskiego dwa razy w tygodniu i wiele atrakcji",
    "Zdrowe, domowe posiłki przygotowywane na miejscu"
  ];

  useEffect(() => {
    // Generate random bubbles
    const newBubbles = Array.from({ length: 25 }, (_, i) => {
      const colors = ['bg-primary', 'bg-primary-light', 'bg-primary-lighter', 'bg-secondary'];
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 30 + Math.random() * 100,
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    });
    
    setBubbles(newBubbles);

    // Text rotation effect
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background bubbles with continuous animation */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`bubble ${bubble.color} opacity-30`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${10 + Math.random() * 15}s`,
            transform: `translateY(0) translateX(0)`,
            animation: `float ${8 + Math.random() * 12}s ease-in-out infinite`
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 py-20 z-10 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Witaj w Miasteczkole
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-text-shimmer min-h-20 transition-all">
              {rotatingTexts[textIndex]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#oferta"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Nasza oferta
              </a>
              <a
                href="#kontakt"
                className="px-8 py-3 bg-secondary text-primary font-semibold rounded-full hover:bg-secondary/80 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Zapisz dziecko
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1526634332515-d56c5fd16991?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                alt="Dzieci w przedszkolu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>
            
            {/* Fixed Contact Bubble */}
            <div className="contact-bubble bg-primary hover:bg-primary-light w-24 h-24 md:w-32 md:h-32 fixed bottom-10 right-10 hover:scale-110 z-50 shadow-xl">
              <a href="#kontakt" className="flex items-center justify-center h-full w-full">
                <div className="text-center">
                  <Phone className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm">Kontakt</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
