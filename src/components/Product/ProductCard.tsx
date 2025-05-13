import { Link } from "react-router";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full object-contaim p-4"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{product.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{product.description}</p>
          <p className="text-xl font-semibold">
          
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
