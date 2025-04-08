
import { BarChart3, Award, ShoppingBag, BarChart, Users, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    name: "Termometro del Mercato",
    description: "Dati aggregati su prezzi e quantità dei prodotti ortofrutticoli in Puglia, con grafici e report sulle tendenze di mercato.",
    icon: BarChart3,
    link: "/termometro",
    bgColor: "bg-puglia-green-light/10",
    iconColor: "text-puglia-green-dark"
  },
  {
    name: "Segnali ai Produttori",
    description: "Analisi delle tendenze del mercato per identificare opportunità e fornire informazioni strategiche ai produttori.",
    icon: BarChart,
    link: "/segnali",
    bgColor: "bg-puglia-orange-light/10",
    iconColor: "text-puglia-orange-dark"
  },
  {
    name: "Osservatorio Eccellenze",
    description: "Valorizzazione dei prodotti ortofrutticoli di eccellenza della Puglia, con schede prodotto e contenuti multimediali.",
    icon: Award,
    link: "/eccellenze",
    bgColor: "bg-puglia-yellow/10",
    iconColor: "text-puglia-yellow"
  },
  {
    name: "Mercato Virtuale",
    description: "Pubblicazione di annunci di vendita e acquisto, con filtri di ricerca e vetrine aziendali personalizzate.",
    icon: ShoppingBag,
    link: "/mercato",
    bgColor: "bg-puglia-green-light/10",
    iconColor: "text-puglia-green-dark"
  },
  {
    name: "Networking",
    description: "Forum di discussione e messaggistica privata per favorire la comunicazione e la collaborazione tra gli operatori.",
    icon: Users,
    link: "/networking",
    bgColor: "bg-puglia-orange-light/10",
    iconColor: "text-puglia-orange-dark"
  },
  {
    name: "Notizie e Approfondimenti",
    description: "Notizie dal settore ortofrutticolo da fonti istituzionali e contributi degli utenti registrati.",
    icon: Newspaper,
    link: "/notizie",
    bgColor: "bg-puglia-yellow/10",
    iconColor: "text-puglia-yellow"
  }
];

const FeatureSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold text-puglia-green-dark">
            I nostri servizi
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Strumenti e risorse dedicate ai professionisti del settore ortofrutticolo pugliese
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.name}
                to={feature.link}
                className="group relative block rounded-lg p-6 hover:shadow-md transition-shadow duration-300 border border-gray-200"
              >
                <div className={`absolute top-6 right-6 rounded-full ${feature.bgColor} p-3`}>
                  <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mt-8">
                  {feature.name}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {feature.description}
                </p>
                <div className="mt-6 text-puglia-orange-dark font-medium group-hover:underline">
                  Scopri di più
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
