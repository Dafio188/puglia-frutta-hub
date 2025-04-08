
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Info } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dati di esempio per le previsioni dei prezzi
const predictionData = [
  {
    id: 1,
    name: "Pomodori Ciliegino",
    currentPrice: "1.80 €/kg",
    predictedPrice: "1.89 €/kg",
    change: "+5.2%",
    trend: "up",
    confidence: "Alta",
    region: "Puglia",
    category: "Ortaggi",
    history: [
      { month: "Gen", price: 1.75 },
      { month: "Feb", price: 1.82 },
      { month: "Mar", price: 1.79 },
      { month: "Apr", price: 1.80 },
      { month: "Mag", price: 1.85 },
      { month: "Giu", price: 1.89 },
      { month: "Lug", price: 1.92 },
    ]
  },
  {
    id: 2,
    name: "Arance Bionde",
    currentPrice: "1.20 €/kg",
    predictedPrice: "1.16 €/kg",
    change: "-3.3%",
    trend: "down",
    confidence: "Media",
    region: "Puglia",
    category: "Frutta",
    history: [
      { month: "Gen", price: 1.30 },
      { month: "Feb", price: 1.28 },
      { month: "Mar", price: 1.25 },
      { month: "Apr", price: 1.22 },
      { month: "Mag", price: 1.20 },
      { month: "Giu", price: 1.18 },
      { month: "Lug", price: 1.16 },
    ]
  },
  {
    id: 3,
    name: "Ciliegie Ferrovia",
    currentPrice: "4.50 €/kg",
    predictedPrice: "4.60 €/kg",
    change: "+2.2%",
    trend: "up",
    confidence: "Bassa",
    region: "Puglia",
    category: "Frutta",
    history: [
      { month: "Gen", price: 0 },
      { month: "Feb", price: 0 },
      { month: "Mar", price: 3.9 },
      { month: "Apr", price: 4.2 },
      { month: "Mag", price: 4.5 },
      { month: "Giu", price: 4.6 },
      { month: "Lug", price: 4.7 },
    ]
  },
  {
    id: 4,
    name: "Patate Novelle",
    currentPrice: "0.90 €/kg",
    predictedPrice: "0.93 €/kg",
    change: "+3.4%",
    trend: "up",
    confidence: "Alta",
    region: "Puglia",
    category: "Ortaggi",
    history: [
      { month: "Gen", price: 0.85 },
      { month: "Feb", price: 0.87 },
      { month: "Mar", price: 0.89 },
      { month: "Apr", price: 0.90 },
      { month: "Mag", price: 0.91 },
      { month: "Giu", price: 0.92 },
      { month: "Lug", price: 0.93 },
    ]
  },
  {
    id: 5,
    name: "Uva da Tavola",
    currentPrice: "2.60 €/kg",
    predictedPrice: "2.45 €/kg",
    change: "-5.7%",
    trend: "down",
    confidence: "Media",
    region: "Puglia",
    category: "Frutta",
    history: [
      { month: "Gen", price: 2.8 },
      { month: "Feb", price: 2.75 },
      { month: "Mar", price: 2.7 },
      { month: "Apr", price: 2.65 },
      { month: "Mag", price: 2.60 },
      { month: "Giu", price: 2.55 },
      { month: "Lug", price: 2.45 },
    ]
  }
];

const PricePrediction = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedConfidence, setSelectedConfidence] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(predictionData[0]);

  const filteredData = predictionData.filter(item => {
    if (selectedCategory !== "all" && item.category !== selectedCategory) return false;
    if (selectedConfidence !== "all" && item.confidence !== selectedConfidence) return false;
    return true;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-puglia-green-dark">
              Previsioni Prezzi di Mercato
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Analisi predittiva dei prezzi basata sui trend storici e attuali
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Filtri</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Categoria</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Tutte le categorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tutte le categorie</SelectItem>
                        <SelectItem value="Frutta">Frutta</SelectItem>
                        <SelectItem value="Ortaggi">Ortaggi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Affidabilità</label>
                    <Select value={selectedConfidence} onValueChange={setSelectedConfidence}>
                      <SelectTrigger>
                        <SelectValue placeholder="Tutte" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tutte</SelectItem>
                        <SelectItem value="Alta">Alta</SelectItem>
                        <SelectItem value="Media">Media</SelectItem>
                        <SelectItem value="Bassa">Bassa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-xl">Dettaglio Prodotto</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-puglia-green-dark">{selectedProduct.name}</h3>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Categoria:</span>
                          <span className="text-sm font-medium">{selectedProduct.category}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Regione:</span>
                          <span className="text-sm font-medium">{selectedProduct.region}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Prezzo attuale:</span>
                          <span className="text-sm font-medium">{selectedProduct.currentPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Prezzo previsto:</span>
                          <span className="text-sm font-medium">{selectedProduct.predictedPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Variazione:</span>
                          <span className={`text-sm font-medium ${selectedProduct.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                            {selectedProduct.change}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Affidabilità:</span>
                          <Badge className={`
                            ${selectedProduct.confidence === 'Alta' ? 'bg-green-100 text-green-800' : 
                              selectedProduct.confidence === 'Media' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-red-100 text-red-800'}
                          `}>
                            {selectedProduct.confidence}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:w-2/3">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Andamento Storico e Previsione</CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={selectedProduct.history}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value} €/kg`, 'Prezzo']} />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#4A6741" 
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Tabella Previsioni</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Prodotto</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Prezzo Attuale</TableHead>
                    <TableHead>Prezzo Previsto</TableHead>
                    <TableHead>Variazione</TableHead>
                    <TableHead>Affidabilità</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((item) => (
                    <TableRow 
                      key={item.id} 
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={() => setSelectedProduct(item)}
                    >
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.currentPrice}</TableCell>
                      <TableCell>{item.predictedPrice}</TableCell>
                      <TableCell>
                        <div className={`flex items-center ${
                          item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {item.trend === 'up' ? (
                            <ArrowUp className="h-4 w-4 mr-1" />
                          ) : (
                            <ArrowDown className="h-4 w-4 mr-1" />
                          )}
                          {item.change}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={`
                          ${item.confidence === 'Alta' ? 'bg-green-100 text-green-800' : 
                            item.confidence === 'Media' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}
                        `}>
                          {item.confidence}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricePrediction;
