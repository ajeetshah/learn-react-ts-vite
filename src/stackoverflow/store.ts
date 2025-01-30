import { create } from "zustand";

type ProductSearchStore = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

export const useProductsStore = create<ProductSearchStore>((set) => ({
  searchTerm: "",
  setSearchTerm: (searchTerm) => set({ searchTerm }),
}));
