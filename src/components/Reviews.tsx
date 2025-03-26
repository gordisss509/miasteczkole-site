
import { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Type for Google review
interface GoogleReview {
  id: string;
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Real reviews from Miasteczkole in Starogard Gdański
  const realReviews = [
    {
      id: "1",
      author_name: "Daria",
      rating: 5,
      text: "To już drugi rok z Miasteczkole, jesteśmy bardzo zadowoleni z opiekuńczej placówki. Ciocie są przemiłe i dbają o dobro dzieci, kontakt z Opiekunami na najwyższym poziomie, korzystanie z aplikacji to ogromnie duży plus. Polecamy",
      relative_time_description: "miesiąc temu",
      profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocIdQH5U6DSKfg2BQ36ilCp6-55glLIOotW108mzs8BND5Z_bQ=w36-h36-p-rp-mo-br100"
    },
    {
      id: "2",
      author_name: "Paulina",
      rating: 5,
      text: "Bardzo polecam, dzieci szczęśliwe, lubią chodzić do przedszkola, bardzo sympatyczne ciocie, zajęcia ciekawe, dużo zabaw oraz mnóstwo dodatkowych aktywności. Zalety: Profesjonalizm",
      relative_time_description: "3 Lata temu",
      profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocIEH6kVDl2Ot8ZSmuuhR5a6msP41OClz9vatZ9XitwgraO0fg=w36-h36-p-rp-mo-br100"
    },
    {
      id: "3",
      author_name: "Joanna",
      rating: 5,
      text: "Świetna placówka. Personel profesjonalny, organizacja na najwyższym poziomie i ciągle udoskonalane zaplecze techniczne. Bezpiecznie miejsce dla dzieci.",
      relative_time_description: "miesiąc temu",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUHYmwQqq56fK3x8Jdl5V_iXCXUp7OSKxIWKLGodxsEw_Ev79Q0=w36-h36-p-rp-mo-br100"
    },
    {
      id: "4",
      author_name: "Magda",
      rating: 5,
      text: "Polecam z całego serca. Spędziliśmy tam całe 4 lata i żal było odchodzić. Przemiła atmosfera, świetnie prowadzone zajęcia. Dzieciaki z chęcią chodziły do żłobka a potem do przedszkola.",
      relative_time_description: "rok temu",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUzikq13y07nDwZo4nT1jhYLcEXgALfO3q-fYAZPmnJVFSLKg_i=w36-h36-p-rp-mo-br100"
    },
    {
      id: "5",
      author_name: "Alicja",
      rating: 5,
      text: "Wspaniałe miejsce dla dzieci. Personel dba o każdego malucha z indywidualnym podejściem.Mam 2 synów w tym przedszkolu w różnych grupach wiekowych. Każdy rozwija tam swoje talenty. Dużo zajęć, które rozwijają dzieci. Troskliwy i serdeczny personel. Nie mogłam wybrać lepszego przedszkola dla mnie Miasteczkole wyróżnia się pod każdym względem od wyżywienia przez zajęcia po kontakt z rodzicami.",
      relative_time_description: "miesiąc temu",
      profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocK-MGUz5ay3LQE_DJ_5wzeKnFA94yABgOIy8T7dWDWnwD0RZQ=w36-h36-p-rp-mo-br100"
    }
  ];

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        // In a real scenario, you would fetch from Google Places API
        // For now, we're using the real reviews we've collected
        setTimeout(() => {
          setReviews(realReviews);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching Google reviews:", error);
        setReviews(realReviews);
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading) {
    return (
      <section id="opinie" className="section bg-primary-lighter">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-16">Co mówią o nas rodzice</h2>
          <div className="flex justify-center">
            <div className="animate-pulse w-full max-w-4xl glassmorphism p-8 md:p-12">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="w-6 h-6 mx-1 rounded-full bg-gray-300" />
                ))}
              </div>
              <div className="h-20 bg-gray-300 rounded mb-6 mx-auto w-3/4"></div>
              <div className="h-6 bg-gray-300 rounded w-40 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="opinie" className="section bg-primary-lighter">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-16">Co mówią o nas rodzice</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all"
            aria-label="Poprzednia opinia"
          >
            <ChevronLeft className="text-primary" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all"
            aria-label="Następna opinia"
          >
            <ChevronRight className="text-primary" />
          </button>
          
          {/* Reviews carousel */}
          <div className="glassmorphism p-8 md:p-12">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <Star 
                  key={index} 
                  className={`w-6 h-6 ${index < reviews[currentIndex]?.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            
            <div className="flex flex-col items-center mb-6">
              {reviews[currentIndex]?.profile_photo_url && (
                <img 
                  src={reviews[currentIndex].profile_photo_url} 
                  alt={reviews[currentIndex].author_name}
                  className="w-16 h-16 rounded-full mb-4 border-2 border-white shadow-md"
                />
              )}
              <blockquote className="text-lg md:text-xl text-gray-800 text-center">
                "{reviews[currentIndex]?.text}"
              </blockquote>
            </div>
            
            <div className="text-center">
              <p className="font-semibold text-primary">{reviews[currentIndex]?.author_name}</p>
              <p className="text-sm text-gray-500">{reviews[currentIndex]?.relative_time_description}</p>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? 'bg-primary scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Opinia ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="https://www.google.pl/maps/place/Miasteczkole+-+%C5%BC%C5%82obek+i+przedszkole/@53.9766942,18.5347214,17z/data=!3m1!4b1!4m6!3m5!1s0x47029dd2bfff4d6b:0x3cbdd75f7c6c01cc!8m2!3d53.9766942!4d18.5372963!16s%2Fg%2F11f5v02s48?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light font-medium inline-flex items-center"
            >
              Zobacz wszystkie opinie na Google Maps
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
