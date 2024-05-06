import { type Dispatch, type SetStateAction, useState } from "react";
import { create } from "zustand";

interface NavigationProps {
  //? Mobile menu
  useMobileNav: () => [
    menuOpen: boolean,
    setMenuOpen: Dispatch<SetStateAction<boolean>>,
  ];

  //? Active link navigation
  active: string;
  setActive: (newActive: string) => void;
}

export const useNavigation = create<NavigationProps>((set) => ({
  //? Mobile menu
  useMobileNav: function useMobileNav() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    return [menuOpen, setMenuOpen];
  },

  //? Active link navigation
  active: "home",
  setActive: function (newActive) {
    set(() => ({ active: newActive }));
  },
}));
