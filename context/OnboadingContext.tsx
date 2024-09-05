import { createContext, ReactNode, useContext, useState } from "react";

// Define the type for the context value
type AccountTypeContextType = {
  accountType: string | null;
  setAccountType: React.Dispatch<React.SetStateAction<string | null>>;
};

// Create the context with the correct type
const AccountTypeContext = createContext<AccountTypeContextType | undefined>(
  undefined
);

export const OnboardingProvider = ({ children }: any) => {
  const [accountType, setAccountType] = useState<string | null>(null);

  return (
    <AccountTypeContext.Provider value={{ accountType, setAccountType }}>
      {children}
    </AccountTypeContext.Provider>
  );
};

export const useAccountType = () => {
  const context = useContext(AccountTypeContext);
  if (context === undefined) {
    throw new Error("useAccountType must be used within an OnboardingProvider");
  }
  return context;
};
