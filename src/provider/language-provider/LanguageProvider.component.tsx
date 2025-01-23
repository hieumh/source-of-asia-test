import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { ELangSupport } from "../../consts";
import { ApiHelper } from "../../helpers";

type LanguageContextType = {
  translations: Record<string, unknown>;
  currentLanguage: string;
  changeLanguage: (lang: ELangSupport) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [translations, setTranslations] = useState<Record<string, unknown>>({});
  const [currentLanguage, setCurrentLanguage] = useState<ELangSupport>(ELangSupport.EN); 
  const [loading, setLoading] = useState(true);

  const fetchTranslations = async (lang: ELangSupport) => {
    setLoading(true);
    try {
      const response = await ApiHelper.get(`/api/v1/pages?lang=${lang}`);
      const [data] = response.data;
      setTranslations(data);
      setCurrentLanguage(lang);
    } catch (error) {
      console.error("Failed to fetch translations:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTranslations(currentLanguage); // Load default language on mount
  }, []);

  const changeLanguage = (lang: ELangSupport) => {
    fetchTranslations(lang);
  };

  if (loading) {
    return <div>Loading translations...</div>; // Fallback UI when loading
  }

  return (
    <LanguageContext.Provider value={{ translations, currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
