
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PasswordRecovery = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Errore",
        description: "Inserisci la tua email",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulazione invio email (da sostituire con chiamata reale API)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Email inviata",
        description: "Controlla la tua casella di posta per le istruzioni",
      });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-puglia-green-dark">Recupera Password</h2>
                <p className="text-gray-500 mt-2">
                  {isSubmitted 
                    ? "Ti abbiamo inviato le istruzioni via email" 
                    : "Inserisci la tua email per ricevere le istruzioni"
                  }
                </p>
              </div>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="email"
                        type="email"
                        placeholder="nome@esempio.it"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-puglia-green-dark hover:bg-puglia-green text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Invio in corso..." : "Invia istruzioni"}
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg text-green-800 text-sm">
                    Abbiamo inviato un'email a <strong>{email}</strong> con le istruzioni per reimpostare la password.
                  </div>
                  
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="w-full"
                  >
                    Invia di nuovo
                  </Button>
                </div>
              )}
              
              <div className="text-center mt-6">
                <Link to="/login" className="inline-flex items-center text-puglia-orange-dark hover:underline text-sm">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Torna al login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PasswordRecovery;
