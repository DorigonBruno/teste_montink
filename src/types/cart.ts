export interface ICartItem {
  id: number;
  name: string;
  variant: string;
  price: number;
}

export interface CartItemProps {
  item: ICartItem;
}

