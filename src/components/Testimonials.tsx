
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    content: "Grazie al Termometro del Mercato, riesco a pianificare meglio gli acquisti e a ottenere prezzi più competitivi. Un servizio davvero utile per noi grossisti.",
    author: "Marco Verdi",
    role: "Grossista Ortofrutta, Bari",
    avatar: "MV"
  },
  {
    id: 2,
    content: "L'Osservatorio delle Eccellenze mi ha permesso di scoprire prodotti locali di alta qualità che non conoscevo. Ora posso offrire ai miei clienti il meglio della Puglia.",
    author: "Laura Bianchi",
    role: "Distribuzione Ortofrutticola, Brindisi",
    avatar: "LB"
  },
  {
    id: 3,
    content: "Il Mercato Virtuale ha rivoluzionato il mio modo di fare business. Trovo subito quello che cerco e ho ampliato la mia rete di fornitori in tutta la regione.",
    author: "Giovanni Rossi",
    role: "Grossista Specializzato, Foggia",
    avatar: "GR"
  }
];

const Testimonials = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-puglia-green-dark">
            La Voce dei Nostri Utenti
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Scopri cosa dicono i professionisti che utilizzano Puglia Frutta Hub
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <div className="bg-white p-1 rounded-full">
                  <Avatar className="h-14 w-14 border-2 border-puglia-green-light">
                    <AvatarImage src={`https://ui-avatars.com/api/?name=${testimonial.author}&background=random`} />
                    <AvatarFallback className="bg-puglia-green-dark text-white">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <CardContent className="pt-12 pb-6 text-center">
                <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-puglia-green-dark">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
