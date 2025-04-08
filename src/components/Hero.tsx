
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-puglia-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 bg-puglia-cream pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-puglia-cream transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-heading font-bold text-puglia-green-dark sm:text-5xl md:text-6xl">
                <span className="block">La Rete dei Grossisti</span>
                <span className="block text-puglia-orange-dark">Ortofrutticoli Pugliesi</span>
              </h1>
              <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Scopri tendenze di mercato, eccellenze locali e connettiti con 
                altri professionisti dell'ortofrutta pugliese in un'unica piattaforma 
                dedicata.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button className="w-full bg-puglia-orange-dark hover:bg-puglia-orange-light text-white py-3 px-8 flex items-center justify-center">
                    Esplora il Mercato
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" className="w-full py-3 px-8 border-puglia-green-dark text-puglia-green-dark hover:bg-puglia-green-light hover:text-white">
                    Chi Siamo
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Prodotti ortofrutticoli pugliesi"
        />
      </div>
    </div>
  );
};

export default Hero;
