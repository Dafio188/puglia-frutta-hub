
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const marketData = [
  { name: "Gen", pomodori: 4000, arance: 2400, broccoli: 2400 },
  { name: "Feb", pomodori: 3000, arance: 1398, broccoli: 2210 },
  { name: "Mar", pomodori: 2000, arance: 980, broccoli: 2290 },
  { name: "Apr", pomodori: 2780, arance: 908, broccoli: 2000 },
  { name: "Mag", pomodori: 1890, arance: 800, broccoli: 2181 },
  { name: "Giu", pomodori: 2390, arance: 800, broccoli: 2500 },
  { name: "Lug", pomodori: 3490, arance: 300, broccoli: 2100 },
];

const volumeData = [
  { name: "Settimana 1", volume: 4000 },
  { name: "Settimana 2", volume: 3000 },
  { name: "Settimana 3", volume: 5000 },
  { name: "Settimana 4", volume: 2780 },
  { name: "Settimana 5", volume: 1890 },
  { name: "Settimana 6", volume: 2390 },
  { name: "Settimana 7", volume: 3490 },
];

const MarketTrends = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-puglia-green-dark">
            Termometro del Mercato
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Dati aggregati e tendenze del mercato ortofrutticolo pugliese
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Trend Prezzi Medi (€/kg)</CardTitle>
              <CardDescription>
                Andamento degli ultimi 7 mesi per i principali prodotti
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={marketData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pomodori"
                    stroke="#D35400"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="arance" stroke="#F1C40F" />
                  <Line type="monotone" dataKey="broccoli" stroke="#4A6741" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume di Scambio (tonnellate)</CardTitle>
              <CardDescription>
                Quantità totali scambiate nelle ultime settimane
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={volumeData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="volume" fill="#8EA382" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <a 
            href="/termometro" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-puglia-green-dark hover:bg-puglia-green-light"
          >
            Esplora tutti i dati
          </a>
        </div>
      </div>
    </div>
  );
};

export default MarketTrends;
