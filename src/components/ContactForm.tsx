
import { useState } from 'react';
import { Calendar, Send, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    message: '',
    date: '',
  });
  
  const [showCalendar, setShowCalendar] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleDateSelect = (date: string) => {
    setFormData((prev) => ({ ...prev, date }));
    setShowCalendar(false);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real scenario, this would send an email
    console.log('Form data submitted:', formData);
    
    toast({
      title: "Wiadomość wysłana",
      description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      childName: '',
      childAge: '',
      message: '',
      date: '',
    });
  };
  
  // Generate dates for the next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 60; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          date: date.toISOString().split('T')[0],
          formatted: date.toLocaleDateString('pl-PL', { weekday: 'short', day: 'numeric', month: 'short' })
        });
      }
    }
    
    return dates;
  };
  
  const availableDates = generateDates();

  return (
    <section id="kontakt" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Skontaktuj się z nami</h2>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2">
            <div className="glassmorphism p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Wyślij wiadomość</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Imię i nazwisko rodzica</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block mb-2 text-sm font-medium">Preferowana data spotkania</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="date"
                        name="date"
                        value={formData.date}
                        readOnly
                        onClick={() => setShowCalendar(!showCalendar)}
                        className="w-full p-3 border border-gray-300 rounded-lg cursor-pointer focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Wybierz datę"
                      />
                      <Calendar className="absolute right-3 top-3 text-gray-400" />
                      
                      {showCalendar && (
                        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-60 overflow-y-auto">
                          <div className="p-2">
                            <h4 className="font-medium text-sm text-gray-500 mb-2">Dostępne terminy:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {availableDates.map((date) => (
                                <button
                                  key={date.date}
                                  type="button"
                                  onClick={() => handleDateSelect(date.date)}
                                  className="text-left px-3 py-2 hover:bg-primary-lighter rounded-md text-sm"
                                >
                                  {date.formatted}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="childName" className="block mb-2 text-sm font-medium">Imię dziecka</label>
                    <input
                      type="text"
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="childAge" className="block mb-2 text-sm font-medium">Wiek dziecka</label>
                    <input
                      type="text"
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Wiadomość</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="flex items-center justify-center w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-light transition-all duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-primary mb-6">Dowiedz się więcej o przedszkolu</h3>
              <p className="text-lg mb-6">
                Masz pytania? Chcesz zapisać dziecko? Zadzwoń do nas lub umów się na wizytę w przedszkolu wypełniając formularz.
              </p>
              
              <a
                href="tel:+48123456789"
                className="inline-flex items-center justify-center bg-primary text-white font-semibold py-4 px-8 rounded-full hover:bg-primary-light transition-all duration-300 shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Zadzwoń teraz
              </a>
            </div>
            
            <div className="glassmorphism p-8">
              <h4 className="font-bold text-xl mb-4 text-primary">Najczęściej zadawane pytania:</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold">Jak wygląda proces adaptacji?</h5>
                  <p className="text-gray-600">Oferujemy indywidualny program adaptacji dostosowany do potrzeb każdego dziecka.</p>
                </div>
                
                <div>
                  <h5 className="font-semibold">Ile dzieci jest w grupie?</h5>
                  <p className="text-gray-600">Nasze grupy liczą maksymalnie 25 dzieci, co pozwala na indywidualne podejście.</p>
                </div>
                
                <div>
                  <h5 className="font-semibold">Jakie zajęcia dodatkowe oferujecie?</h5>
                  <p className="text-gray-600">Organizujemy zajęcia z języka angielskiego, rytmiki, tańca, sportu i wiele innych.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
