import { User } from 'firebase';
import React, { useState, createContext } from 'react';

type ContextProps = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

type Props = {
  children: React.ReactNode;
};

export const AuthUserContext = createContext({} as ContextProps);

export const AuthUserProvider: React.FC<Props> = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthUserContext.Provider>
  );
};
