
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegisterForm from "@/components/register/RegisterForm";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-puglia-green-dark">Registrati a Ortotrade</h2>
                <p className="text-gray-500 mt-2">Crea il tuo account per accedere a tutti i servizi</p>
              </div>
              
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
