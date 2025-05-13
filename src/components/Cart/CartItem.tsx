import type { ICartItem } from "../../types/cart";

interface CartItemProps {
  item: ICartItem;
}

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="border-b py-4">
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.variant}</p>
        </div>
        <span className="font-semibold">
          R${" "}
          {item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRl",
          })}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
