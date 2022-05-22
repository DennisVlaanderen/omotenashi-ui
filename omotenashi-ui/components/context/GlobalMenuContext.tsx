import { createContext, useContext } from "react";

export type GlobalMenuContent = {
  menuOpen: boolean,
  setMenuOpen: (c: boolean) => void
}

export const GlobalMenuContext = createContext<GlobalMenuContent>({
  menuOpen: false,
  setMenuOpen: () => {}
})

export const useGlobalContext = () => useContext(GlobalMenuContext)
