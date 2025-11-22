import React, { useState, useEffect } from 'react';
import { 
  Car, 
  Coffee, 
  Wifi, 
  Gamepad2, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  CheckCircle, 
  Menu, 
  X,
  Calendar,
  Laptop,
  Music,
  Sparkles,
  Leaf,
  ShieldCheck,
  Dog
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('wash'); 

  // --- CONFIGURACIÓN DEL NEGOCIO (ACTUALIZADO: SURCO, PERÚ) ---
  const config = {
    brand: {
      name: "CAR WASH",
      highlight: " LOUNGE", // Espacio inicial para separación visual
      slogan: "Tu tiempo vale. Tu auto lo merece.",
      description: "Equilibra tu vida laboral y personal en Surco. Mientras dejamos tu auto impecable con productos biodegradables, tú disfrutas de un coworking seguro o te relajas en nuestro lounge.",
    },
    contact: {
      phone: "+51 999 999 999", // Formato Perú
      email: "reservas@carwashlounge.pe",
      address: "Av. Santiago de Surco, Lima - Perú",
      hours: {
        week: "Lun - Vie: 7:00 AM - 9:00 PM",
        weekend: "Sáb - Dom: 8:00 AM - 8:00 PM"
      }
    },
    prices: [
      {
        title: "Eco Express",
        price: "S/ 35", // Moneda cambiada a Soles (estimado)
        time: "30 min",
        features: ['Lavado Ecológico (Sin Agua)', 'Aspirado Rápido', 'WiFi Seguro', 'Café de Cortesía', 'Garantía de Tiempo Exacto'],
        highlight: false
      },
      {
        title: "Pro Executive",
        price: "S/ 80", // Moneda cambiada a Soles (estimado)
        time: "60 min",
        features: ['Lavado Detallado Biodegradable', 'Limpieza de Motor a Vapor', 'Acceso a Cabina Coworking', 'Snack Premium', 'Desinfección de Interiores'],
        highlight: true
      },
      {
        title: "Family & Pet Spa",
        price: "S/ 150", // Moneda cambiada a Soles (estimado)
        time: "120 min",
        features: ['Detailing Completo', 'Limpieza Especializada de Pelos/Mascotas', 'Eliminación de Olores', 'Acceso a Simuladores F1 (Niños/Adultos)', 'Valet Parking'],
        highlight: false
      }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg">
              <Car size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tighter whitespace-nowrap">
              {config.brand.name}<span className="text-cyan-400">{config.brand.highlight}</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button onClick={() => scrollToSection('servicios')} className="hover:text-cyan-400 transition-colors">Propuesta de Valor</button>
            <button onClick={() => scrollToSection('experiencia')} className="hover:text-cyan-400 transition-colors">El Lounge</button>
            <button onClick={() => scrollToSection('precios')} className="hover:text-cyan-400 transition-colors">Planes</button>
            <button onClick={() => scrollToSection('contacto')} className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-5 py-2 rounded-full font-bold transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]">Reservar Cita</button>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 py-4 px-6 flex flex-col gap-4 shadow-2xl">
            <button onClick={() => scrollToSection('servicios')} className="text-left py-2 text-slate-300">Propuesta</button>
            <button onClick={() => scrollToSection('experiencia')} className="text-left py-2 text-slate-300">Lounge</button>
            <button onClick={() => scrollToSection('precios')} className="text-left py-2 text-slate-300">Planes</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop" alt="Luxury Car Wash" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center pt-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm text-green-300 text-sm font-semibold uppercase tracking-widest animate-fade-in-up">
            <Leaf size={14} /> 100% Ecológico & Biodegradable
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            {config.brand.slogan.split('.')[0]}.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{config.brand.slogan.split('.')[1]}.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {config.brand.description}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('precios')} className="bg-cyan-500 text-slate-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2">
              <Calendar size={20} />
              Agendar (Sin Colas)
            </button>
            <button onClick={() => scrollToSection('experiencia')} className="group bg-slate-800/50 backdrop-blur-md border border-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all hover:scale-105 hover:border-purple-500/50 flex items-center justify-center gap-2">
              <Coffee size={20} className="text-purple-400 group-hover:animate-pulse" />
              Conoce el Lounge
            </button>
          </div>
        </div>
      </header>

      {/* Value Proposition Section (Features) */}
      <section id="servicios" className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Eliminamos el "Tiempo Muerto"</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Resolvemos tus frustraciones con espacios diseñados para trabajar, relajarte o divertirte en familia.</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-slate-900 p-1 rounded-full border border-slate-800 inline-flex">
              <button onClick={() => setActiveTab('wash')} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'wash' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>Servicios Premium</button>
              <button onClick={() => setActiveTab('lounge')} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'lounge' ? 'bg-amber-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>Lounge & Coworking</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeTab === 'wash' ? (
              <>
                <ServiceCard 
                  icon={<Leaf size={32} className="text-green-400" />}
                  title="Lavado Sostenible"
                  desc="Cuidamos el planeta usando insumos biodegradables y técnicas de bajo consumo de agua."
                  image="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800&auto=format&fit=crop"
                />
                <ServiceCard 
                  icon={<Dog size={32} className="text-purple-400" />}
                  title="Pet Detailing"
                  desc="Especialistas en eliminar pelos y olores de mascotas para que viajes con tu mejor amigo sin preocupaciones."
                  image="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop"
                />
                <ServiceCard 
                  icon={<ShieldCheck size={32} className="text-blue-400" />}
                  title="Seguridad Total"
                  desc="Tu auto está en manos de profesionales certificados en un entorno monitoreado y seguro."
                  image="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop"
                />
              </>
            ) : (
              <>
                <ServiceCard 
                  icon={<Wifi size={32} className="text-blue-400" />}
                  title="Coworking Productivo"
                  desc="WiFi seguro de alta velocidad y cabinas semiprivadas para que no pierdas ni un minuto de trabajo."
                  image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop"
                />
                <ServiceCard 
                  icon={<Coffee size={32} className="text-amber-400" />}
                  title="Café & Relax"
                  desc="Un ambiente confortable con aire acondicionado, música suave y café de especialidad."
                  image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop"
                />
                <ServiceCard 
                  icon={<Gamepad2 size={32} className="text-pink-400" />}
                  title="Zona Gamer & Kids"
                  desc="Entretenimiento para toda la familia con simuladores y consolas. Convierte la espera en diversión."
                  image="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/20 to-transparent hidden md:block"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop" alt="Cafe atmosphere" className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-8">
                <div className="flex items-center gap-2 text-amber-400 mb-2">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-white italic">"Por fin un lugar en Surco donde puedo trabajar tranquilo y sé que mi auto estará listo a la hora prometida."</p>
                <p className="text-slate-400 text-sm mt-2">- Ejecutivo de Ventas, Cliente Frecuente</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Tu oficina remota,<br />mientras cuidamos tu inversión.</h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Entendemos tus frustraciones: esperas largas, aburrimiento e incertidumbre. En Car Wash Lounge, garantizamos tu hora de entrega y te damos un espacio digno de tu estilo de vida.
            </p>
            <ul className="space-y-6 mb-8">
              <FeatureItem icon={<Clock className="text-cyan-400" />} title="Garantía de Tiempo" desc="Reserva digital y cumplimiento estricto de horarios. Tu tiempo es oro." />
              <FeatureItem icon={<Leaf className="text-green-400" />} title="Compromiso Eco-Friendly" desc="Nos importa el futuro. Usamos sistemas ecológicos que cuidan el agua." />
              <FeatureItem icon={<ShieldCheck className="text-purple-400" />} title="Zona Segura & WiFi Seguro" desc="Ubicación estratégica y red protegida para tus datos confidenciales." />
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Inversión Clara y Transparente</h2>
            <p className="text-slate-400 mb-6">Sin costos ocultos. Calidad consistente garantizada.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {config.prices.map((plan, idx) => (
              <PricingCard key={idx} title={plan.title} price={plan.price} time={plan.time} features={plan.features} isPopular={plan.highlight} btnColor={plan.highlight ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400" : "border-slate-600 text-white hover:bg-slate-800"} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <section id="contacto" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-cyan-900/20 to-slate-800 p-8 md:p-12 rounded-3xl border border-slate-700 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Agenda sin estrés</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4"><div className="bg-slate-700 p-3 rounded-lg"><MapPin className="text-cyan-400" /></div><div><h3 className="font-bold text-lg">Ubicación Segura</h3><p className="text-slate-400">{config.contact.address}</p></div></div>
                <div className="flex items-start gap-4"><div className="bg-slate-700 p-3 rounded-lg"><Clock className="text-cyan-400" /></div><div><h3 className="font-bold text-lg">Horarios Extendidos</h3><p className="text-slate-400">{config.contact.hours.week}</p><p className="text-slate-400">{config.contact.hours.weekend}</p></div></div>
                <div className="flex items-start gap-4"><div className="bg-slate-700 p-3 rounded-lg"><Phone className="text-cyan-400" /></div><div><h3 className="font-bold text-lg">Contacto Directo</h3><p className="text-slate-400">{config.contact.phone}</p><p className="text-slate-400">{config.contact.email}</p></div></div>
              </div>
            </div>
            <div className="md:w-1/2 bg-slate-950/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-4">Reserva tu Turno (App Demo)</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Nombre" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-cyan-500 transition-colors text-slate-300" />
                  <input type="tel" placeholder="Teléfono" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-cyan-500 transition-colors text-slate-300" />
                </div>
                <select className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-cyan-500 transition-colors text-slate-300">
                  <option>Selecciona Servicio</option>
                  {config.prices.map((p, i) => <option key={i}>{p.title}</option>)}
                </select>
                <div className="grid grid-cols-2 gap-4">
                  <input type="date" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-cyan-500 transition-colors text-slate-300" />
                  <input type="time" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-cyan-500 transition-colors text-slate-300" />
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-1">
                  Confirmar y Recibir Notificaciones
                </button>
              </form>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 {config.brand.name}{config.brand.highlight}. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0"><a href="#" className="hover:text-cyan-400">Instagram</a><a href="#" className="hover:text-cyan-400">Facebook</a></div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, desc, image }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
    <div className="h-48 overflow-hidden"><img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
    <div className="p-6 relative z-10 bg-slate-900">
      <div className="absolute -top-8 right-6 bg-slate-800 p-3 rounded-xl border border-slate-700 shadow-lg group-hover:bg-cyan-950/30 group-hover:border-cyan-500/50 transition-colors">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700">
    <div className="bg-slate-800 p-3 rounded-lg shrink-0">{icon}</div>
    <div><h4 className="font-bold text-white mb-1">{title}</h4><p className="text-sm text-slate-400">{desc}</p></div>
  </div>
);

const PricingCard = ({ title, price, time, features, btnColor, isPopular }) => (
  <div className={`relative p-8 rounded-3xl border flex flex-col ${isPopular ? 'bg-slate-800/50 border-cyan-500 shadow-2xl shadow-cyan-900/20 scale-105 z-10' : 'bg-slate-900 border-slate-800 hover:border-slate-600'}`}>
    {isPopular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Más Solicitado</div>}
    <div className="mb-6">
      <h3 className="text-xl font-medium text-slate-300 mb-2">{title}</h3>
      <div className="flex items-baseline gap-1"><span className="text-4xl font-bold text-white">{price}</span><span className="text-slate-500">/ servicio</span></div>
      <div className="flex items-center gap-2 mt-2 text-sm text-cyan-400"><Clock size={14} /><span>{time} aprox.</span></div>
    </div>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm text-slate-300"><CheckCircle size={16} className="text-cyan-500 shrink-0 mt-0.5" />{feature}</li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-xl font-bold border transition-all ${btnColor}`}>Elegir Plan</button>
  </div>
);

export default App;