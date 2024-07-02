import { createContext, useState } from "react";

export const TokensContext = createContext();

export function TokensProvider({ children }) {
  const [token, setToken] = useState(null);
  const [fakeToken, setFakeToken] = useState(null);

  return (
    <TokensContext.Provider
      value={{ token, fakeToken, setToken, setFakeToken }}
    >
      {children}
    </TokensContext.Provider>
  );
}
