
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, Building, Eye, EyeOff, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validazione
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      toast({
        title: "Errore",
        description: "Compila tutti i campi obbligatori",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Errore",
        description: "Le password non corrispondono",
        variant: "destructive",
      });
      return;
    }
    
    if (!termsAccepted) {
      toast({
        title: "Errore",
        description: "Devi accettare i termini e le condizioni",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulazione registrazione (da sostituire con chiamata reale API)
    setTimeout(() => {
      toast({
        title: "Registrazione completata",
        description: "Benvenuto su Ortotrade! Controlla la tua email per confermare la registrazione.",
      });
      setIsLoading(false);
      navigate("/login");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormFields 
        formData={formData} 
        handleChange={handleChange}
        showPassword={showPassword}
        setShowPassword={setShowPassword} 
      />
      
      <div className="flex items-start space-x-2">
        <Checkbox 
          id="terms" 
          checked={termsAccepted} 
          onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
        />
        <label htmlFor="terms" className="text-sm text-gray-600">
          Accetto i{" "}
          <Link to="/termini" className="text-puglia-orange-dark hover:underline">
            Termini di Servizio
          </Link>
          {" "}e la{" "}
          <Link to="/privacy" className="text-puglia-orange-dark hover:underline">
            Privacy Policy
          </Link>
        </label>
      </div>
      
      <Button
        type="submit"
        className="w-full bg-puglia-green-dark hover:bg-puglia-green text-white"
        disabled={isLoading}
      >
        {isLoading ? "Registrazione in corso..." : "Registrati"}
      </Button>
      
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Hai già un account?{" "}
          <Link to="/login" className="text-puglia-orange-dark hover:underline font-medium">
            Accedi
          </Link>
        </p>
      </div>
    </form>
  );
};

interface FormFieldsProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormFields = ({ formData, handleChange, showPassword, setShowPassword }: FormFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        id="firstName"
        label="Nome *"
        type="text"
        placeholder="Mario"
        value={formData.firstName}
        onChange={handleChange}
        icon={<User className="h-5 w-5 text-gray-400" />}
        required
      />
      
      <FormField
        id="lastName"
        label="Cognome *"
        type="text"
        placeholder="Rossi"
        value={formData.lastName}
        onChange={handleChange}
        icon={<User className="h-5 w-5 text-gray-400" />}
        required
      />
      
      <FormField
        id="companyName"
        label="Azienda"
        type="text"
        placeholder="Nome Azienda"
        value={formData.companyName}
        onChange={handleChange}
        icon={<Building className="h-5 w-5 text-gray-400" />}
      />
      
      <FormField
        id="phone"
        label="Telefono"
        type="tel"
        placeholder="+39 123 456 7890"
        value={formData.phone}
        onChange={handleChange}
        icon={<Phone className="h-5 w-5 text-gray-400" />}
      />
      
      <div className="space-y-2 md:col-span-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="nome@esempio.it"
            className="pl-10"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <PasswordField
        id="password"
        label="Password *"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        required
      />
      
      <PasswordField
        id="confirmPassword"
        label="Conferma Password *"
        placeholder="Conferma Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        showPassword={showPassword}
        setShowPassword={null}
        required
      />
    </div>
  );
};

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  required?: boolean;
}

const FormField = ({ id, label, type, placeholder, value, onChange, icon, required }: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <Input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          className="pl-10"
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  );
};

interface PasswordFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>> | null;
  required?: boolean;
}

const PasswordField = ({ 
  id, 
  label, 
  placeholder, 
  value, 
  onChange, 
  showPassword, 
  setShowPassword,
  required 
}: PasswordFieldProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Lock className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          id={id}
          name={id}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className={`pl-10 ${setShowPassword ? 'pr-10' : ''}`}
          value={value}
          onChange={onChange}
          required={required}
        />
        {setShowPassword && (
          <div 
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
