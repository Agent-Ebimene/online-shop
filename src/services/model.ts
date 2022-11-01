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
}

export interface AppContextType {
  count: number;
  handleAddCount: () => void;
  isCartOpen: boolean;
  cartItems: WorkShopType[];
  handleAddToCart: (workshop: WorkShopType) => void;
  handleOpenCart: () => void;
}
export interface ProviderType {
  children: React.ReactNode;
}
