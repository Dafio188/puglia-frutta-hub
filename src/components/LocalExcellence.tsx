
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Pomodoro Regina",
    area: "Valle d'Itria",
    description: "Variante del pomodoro tipica della Valle d'Itria, caratterizzata da forma allungata e sapore dolce.",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 2,
    name: "Uva di Puglia",
    area: "Bari",
    description: "Uva da tavola di alta qualità, prodotta principalmente nella provincia di Bari, apprezzata per dolcezza e croccantezza.",
    image: "https://images.unsplash.com/photo-1596363505729-4190a9506133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 3,
    name: "Carciofo Brindisino",
    area: "Brindisi",
    description: "Carciofo coltivato nella provincia di Brindisi, tenero e saporito, ideale per molte preparazioni gastronomiche.",
    image: "https://images.unsplash.com/photo-1622484211769-77cc92c3910c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  }
];

const LocalExcellence = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-puglia-green-dark">
            Eccellenze Locali
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Scopri i prodotti tipici della Puglia, tesori del nostro territorio
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-puglia-green-dark">{product.name}</CardTitle>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1 text-puglia-orange-dark" />
                    {product.area}
                  </div>
                </div>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full text-puglia-orange-dark border-puglia-orange-dark hover:bg-puglia-orange-light hover:text-white">
                  Scopri di più
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-puglia-orange-dark hover:bg-puglia-orange-light text-white">
            Esplora tutte le eccellenze
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocalExcellence;
