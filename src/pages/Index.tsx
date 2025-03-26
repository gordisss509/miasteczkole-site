
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import LiveKid from '@/components/LiveKid';
import Map from '@/components/Map';
import ContactForm from '@/components/ContactForm';
import SocialMedia from '@/components/SocialMedia';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll to section when clicking on nav links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    // Handle initial hash on page load
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    // Add listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section id="o-nas" className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">O naszym przedszkolu</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2">
              <p className="text-lg mb-6">
                Miasteczkole to kameralne przedszkole w Starogardzie Gdańskim, gdzie każde dziecko ma przestrzeń do zabawy, nauki i rozwoju. Zapewniamy profesjonalną opiekę dla maksymalnie 25 dzieci, co pozwala nam na indywidualne podejście do każdego malucha.
              </p>
              <p className="text-lg mb-6">
                Nasze doświadczone nauczycielki tworzą bezpieczne i przyjazne środowisko, gdzie dzieci uczą się poprzez zabawę. Oferujemy zajęcia z języka angielskiego dwa razy w tygodniu, warsztaty z robotyki, zajęcia kulinarne oraz wiele innych kreatywnych aktywności.
              </p>
              <p className="text-lg">
                Dbamy o zdrowie i prawidłowy rozwój dzieci, serwując domowe posiłki przygotowywane na miejscu przez naszego kucharza. Nasza placówka wyposażona jest w nowoczesny sprzęt i materiały edukacyjne, a także duży, bezpieczny plac zabaw.
              </p>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Dzieci w przedszkolu" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 translate-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1564429097439-923c78a8133a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Zabawa w przedszkolu" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 translate-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Nauka w przedszkolu" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Kreatywne zajęcia" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="oferta" className="section bg-primary-lighter">
        <div className="container mx-auto">
          <h2 className="section-title">Nasza oferta</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Kreatywne zajęcia edukacyjne",
                description: "Program dostosowany do wieku i zainteresowań dziecka, wspierający naukę poprzez zabawę i eksperymenty.",
                icon: "📚"
              },
              {
                title: "Zajęcia z języka angielskiego",
                description: "Dwa razy w tygodniu zajęcia z angielskiego poprzez piosenki, zabawy i konwersacje z native speakerami.",
                icon: "🌍"
              },
              {
                title: "Warsztaty artystyczne",
                description: "Rozwijanie kreatywności poprzez różnorodne techniki plastyczne, muzyczne i teatralne.",
                icon: "🎨"
              },
              {
                title: "Robotyka dla dzieci",
                description: "Zajęcia z podstaw programowania i robotyki dostosowane do wieku przedszkolaków, rozwijające logiczne myślenie.",
                icon: "🤖"
              },
              {
                title: "Kulinaria dziecięce",
                description: "Warsztaty kulinarne, gdzie dzieci uczą się przygotowywać proste potrawy i poznają zasady zdrowego odżywiania.",
                icon: "👨‍🍳"
              },
              {
                title: "Domowe posiłki na miejscu",
                description: "Świeże, zdrowe i zbilansowane posiłki przygotowywane codziennie na miejscu przez naszego kucharza z najlepszych składników.",
                icon: "🥗"
              },
              {
                title: "Aktywności na świeżym powietrzu",
                description: "Regularne zajęcia w ogrodzie przedszkolnym wspierające rozwój fizyczny i kontakt z naturą.",
                icon: "⚽"
              },
              {
                title: "Wsparcie psychologiczne",
                description: "Współpraca ze specjalistami w zakresie harmonijnego rozwoju emocjonalnego i społecznego.",
                icon: "🧠"
              }
            ].map((item, index) => (
              <div key={index} className="glassmorphism p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Reviews />
      <LiveKid />
      <Map />
      <ContactForm />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default Index;
