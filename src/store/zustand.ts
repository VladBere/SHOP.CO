import { create } from "zustand";

interface ZustandState {
  brandsZustand: string;
  setBrandsZustand: (to: string) => void;
  pagination: number;
  setPagination: (to: number) => void;
  togglePag: number;
  setTogglePag: (to: number) => void;
  isSearching: boolean;
  setIsSearching: (to: boolean) => void;
}

const useStore = create<ZustandState>()((set) => ({
  brandsZustand: "All Brands",
  setBrandsZustand: (to) => set({ brandsZustand: to }),
  pagination: 0,
  setPagination: (to) => set({ pagination: to }),
  togglePag: 1,
  setTogglePag: (to) => set({ togglePag: to }),
  isSearching: false,
  setIsSearching: (to) => set({ isSearching: to }),
}));

export default useStore;
