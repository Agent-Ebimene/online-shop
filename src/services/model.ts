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
export interface WorkshopCardProps {
  workshop: WorkShopType;
  handleAddToCart: (workshop: WorkShopType) => void;
}

export interface AppContextType {
  count: number;
  handleAddCount: () => void;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ProviderType {
  children: React.ReactNode;
}
