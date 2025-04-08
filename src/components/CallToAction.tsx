
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="bg-puglia-green-dark">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Sei un grossista ortofrutticolo?</span>
          <span className="block text-puglia-yellow">Unisciti alla nostra community oggi stesso.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Button className="bg-puglia-orange-dark hover:bg-puglia-orange-light text-white py-3 px-6 text-base">
              Registrati Gratis
            </Button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button variant="outline" className="bg-white text-puglia-green-dark border-transparent hover:bg-gray-50 py-3 px-6 text-base">
              Scopri di più
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
