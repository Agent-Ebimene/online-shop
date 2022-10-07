export interface WorkShopType {
  category: string;
  date: string;
  desc: string;
  id: number;
  imageUrl: string;
  price: number;
  title: string;
  userId: number;
}

export interface AppContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ProviderType {
  children: React.ReactNode;
}
