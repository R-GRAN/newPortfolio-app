import { createContext, useState } from "react";

export const FakeTokenContext = createContext();

export function FakeTokenProvider({ children }) {
  const [fakeToken, setFakeToken] = useState(false);

  return (
    <FakeTokenContext.Provider value={{ fakeToken, setFakeToken }}>
      {children}
    </FakeTokenContext.Provider>
  );
}
