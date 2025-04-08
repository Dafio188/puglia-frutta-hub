
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin, TrendingUp, ArrowDown, ArrowUp, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const marketListings = [
  {
    id: 1,
    title: "Pomodori Ciliegino Pugliesi",
    type: "Vendita",
    price: "1.80 €/kg",
    quantity: "5 tonnellate",
    location: "Bari",
    date: "15/04/2025",
    seller: "Azienda Agricola Verdi",
    prediction: {
      trend: "up",
      percentage: "+5.2%",
      nextWeek: "1.89 €/kg",
      confidence: "Alta"
    }
  },
  {
    id: 2,
    title: "Arance Bionde del Salento",
    type: "Vendita",
    price: "1.20 €/kg",
    quantity: "8 tonnellate",
    location: "Lecce",
    date: "12/04/2025",
    seller: "Frutta del Sud srl",
    prediction: {
      trend: "down",
      percentage: "-3.3%",
      nextWeek: "1.16 €/kg",
      confidence: "Media"
    }
  },
  {
    id: 3,
    title: "Ciliegie Ferrovia",
    type: "Acquisto",
    price: "4.50 €/kg",
    quantity: "2 tonnellate",
    location: "Barletta",
    date: "20/04/2025",
    seller: "OrtoFresco Distribuzione",
    prediction: {
      trend: "up",
      percentage: "+2.2%",
      nextWeek: "4.60 €/kg",
      confidence: "Bassa"
    }
  },
];

const VirtualMarket = () => {
  const [showPredictions, setShowPredictions] = useState(true);

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-heading font-bold text-puglia-green-dark">
            Mercato Virtuale
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Annunci di vendita e acquisto tra grossisti ortofrutticoli
          </p>
        </div>
        
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2">
            <Button 
              variant={showPredictions ? "default" : "outline"} 
              className="text-sm" 
              onClick={() => setShowPredictions(true)}
            >
              Con previsioni
            </Button>
            <Button 
              variant={!showPredictions ? "default" : "outline"} 
              className="text-sm" 
              onClick={() => setShowPredictions(false)}
            >
              Senza previsioni
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {marketListings.map((listing) => (
            <Card key={listing.id} className="hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {listing.title}
                  </CardTitle>
                  <Badge className={listing.type === "Vendita" ? "bg-puglia-green-dark" : "bg-puglia-orange-dark"}>
                    {listing.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Prezzo:</span>
                    <div className="flex items-center">
                      <span className="text-sm font-medium flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1 text-puglia-green-dark" />
                        {listing.price}
                      </span>
                      
                      {showPredictions && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className={`ml-2 flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                listing.prediction.trend === 'up' 
                                  ? 'text-green-700 bg-green-100' 
                                  : 'text-red-700 bg-red-100'
                              }`}>
                                {listing.prediction.trend === 'up' ? (
                                  <ArrowUp className="h-3 w-3 mr-0.5" />
                                ) : (
                                  <ArrowDown className="h-3 w-3 mr-0.5" />
                                )}
                                {listing.prediction.percentage}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <div className="space-y-1">
                                <p className="font-semibold">Previsione prossima settimana</p>
                                <p>Prezzo: {listing.prediction.nextWeek}</p>
                                <p>Affidabilità: {listing.prediction.confidence}</p>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Quantità:</span>
                    <span className="text-sm font-medium">{listing.quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Venditore:</span>
                    <span className="text-sm font-medium">{listing.seller}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      {listing.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      {listing.date}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-puglia-green-dark border-puglia-green-dark hover:bg-puglia-green-dark hover:text-white">
                  Contatta {listing.type === "Vendita" ? "Venditore" : "Acquirente"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <a 
            href="/mercato" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-puglia-green-dark hover:bg-puglia-green-light"
          >
            Esplora tutto il mercato
          </a>
        </div>
      </div>
    </div>
  );
};

export default VirtualMarket;
