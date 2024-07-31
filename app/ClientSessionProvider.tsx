'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SessionContextProps {
  session: any;
  setSession: React.Dispatch<React.SetStateAction<any>>;
}

const SessionContext = createContext<SessionContextProps | undefined>(undefined);

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a ClientSessionProvider');
  }
  return context;
};

interface ClientSessionProviderProps {
  children: ReactNode;
}

const ClientSessionProvider: React.FC<ClientSessionProviderProps> = ({ children }) => {
  const [session, setSession] = useState(null);

  return (
    <SessionContext.Provider value={{ session, setSession }}>{children}</SessionContext.Provider>
  );
};

export default ClientSessionProvider;
