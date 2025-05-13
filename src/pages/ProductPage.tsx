import { useState } from "react";
import { useParams, Link } from "react-router";
import ProductGallery from "../components/Product/ProductGallery";
import ShippingCalculator from "../components/Product/ShippingCalculator";
import type { ProductColor, ProductImage } from "../types/product";

interface ProductVariant {
  sizes: string[];
  colors: ProductColor[];
}

interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  variants: ProductVariant;
  images: ProductImage[];
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || "0");

  const allProducts: ProductData[] = [
    {
      id: 1,
      title: "Camiseta Masculina Dry Fit",
      price: 50,
      description:
        "Camiseta Masculina Dry Fit 100% algodão. Ideal para esportes",
      variants: {
        sizes: ["P", "M", "G", "GG"],
        colors: [
          { name: "Preto", code: "#000000" },
          { name: "Branco", code: "#FFFFFF" },
          { name: "Vermelho", code: "#FF0000" },
        ],
      },
      images: [
        {
          id: 1,
          colorCode: "#000000",
          url: "https://http2.mlstatic.com/D_NQ_NP_889662-MLB70090768890_062023-O-camiseta-masculina-camisas-voker-100-algodo-plus-size.webp",
        },
        {
          id: 2,
          colorCode: "#FFFFFF",
          url: "https://http2.mlstatic.com/D_NQ_NP_602599-MLB70111715521_062023-O-camiseta-masculina-camisas-voker-100-algodo-plus-size.webp",
        },
        {
          id: 3,
          colorCode: "#FF0000",
          url: "https://http2.mlstatic.com/D_NQ_NP_964230-MLB70091185112_062023-O-camiseta-masculina-camisas-voker-100-algodo-plus-size.webp",
        },
      ],
    },
    {
      id: 2,
      title: "Bermuda Dry Fit",
      price: 89.9,
      description: "Bermuda Dry Fit Ideal para esportes",
      variants: {
        sizes: ["40", "42", "45"],
        colors: [
          { name: "Cinza", code: "#808080" },
          { name: "Azul", code: "#2e3dad" },
          { name: "Vermelho", code: "#d02a2a" },
        ],
      },
      images: [
        {
          id: 1,
          colorCode: "#808080",
          url: "https://http2.mlstatic.com/D_NQ_NP_935606-MLB73094420838_112023-O-bermuda-dry-fit-masculina-treino-academia-short-confortavel.webp",
        },
        {
          id: 2,
          colorCode: "#2e3dad",
          url: "https://http2.mlstatic.com/D_NQ_NP_845095-MLB73177690735_112023-O-bermuda-dry-fit-masculina-treino-academia-short-confortavel.webp",
        },
        {
          id: 3,
          colorCode: "#d02a2a",
          url: "https://http2.mlstatic.com/D_NQ_NP_834103-MLB73094391968_112023-O-bermuda-dry-fit-masculina-treino-academia-short-confortavel.webp",
        },
      ],
    },

    {
      id: 3,
      title: "Blusa Canguru Masculina",
      price: 89.9,
      description:
        "Blusa Canguru Masculina Flanelada com capuz de alta qualidade",
      variants: {
        sizes: ["M", "G", "GG"],
        colors: [
          { name: "Preto", code: "#000000" },
          { name: "branco", code: "#FFFFFF" },
          { name: "Cinza", code: "#c9c9c9" },
        ],
      },
      images: [
        {
          id: 1,
          colorCode: "#000000",
          url: "https://http2.mlstatic.com/D_NQ_NP_717968-MLB77398435695_072024-O-moletom-grosso-flanelado-canguru-capuz-alta-qualidade.webp",
        },
        {
          id: 2,
          colorCode: "#FFFFFF",
          url: "https://http2.mlstatic.com/D_NQ_NP_645062-MLB77398465755_072024-O-moletom-grosso-flanelado-canguru-capuz-alta-qualidade.webp",
        },
        {
          id: 3,
          colorCode: "#c9c9c9",
          url: "https://http2.mlstatic.com/D_NQ_NP_832033-MLB77184449240_072024-O-moletom-grosso-flanelado-canguru-capuz-alta-qualidade.webp",
        },
      ],
    },
  ];

  const productData = allProducts.find((p) => p.id === productId);

  const [selectedSize, setSelectedSize] = useState<string>("");

  const [shippingPrice, setShippingPrice] = useState<number>(0);

  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(
    productData?.variants?.colors[0] || null
  );

  if (!productData) {
    return <div className="p-8">Produto não encontrado</div>;
  }

  const totalPrice = productData.price + shippingPrice;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Link to={"/"} className="bg-gray-300 p-2 rounded-lg cursor-pointer">
        Voltar para home
      </Link>
      <div className="flex flex-col md:flex-row gap-8">
        <ProductGallery
          images={productData.images}
          colors={productData.variants.colors}
          onColorChange={(color: ProductColor) => setSelectedColor(color)}
        />

        <div className="md:w-[65%]">
          <h1 className="text-3xl font-bold">{productData.title}</h1>
          <p className="text-2xl my-4">
            {productData.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>

          <div className="my-6">
            <h3 className="font-medium mb-2">Tamanho:</h3>
            <div className="flex gap-2">
              {productData.variants.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={` cursor-pointer px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {selectedColor && (
            <div className="my-4">
              <h3 className="font-medium mb-2">Cor selecionada:</h3>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full border"
                  style={{ backgroundColor: selectedColor.code }}
                />
                <span>{selectedColor.name}</span>
              </div>
            </div>
          )}

          <ShippingCalculator
            productPrice={productData.price}
            onShippingChange={(price: number) => setShippingPrice(price)}
          />

          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-bold text-lg">Resumo</h3>
            <div className="flex justify-between mt-2">
              <span>Produto:</span>
              <span>
                {productData.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Frete:</span>
              <span>
                {shippingPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-2">
              <span>Total:</span>
              <span>
                {totalPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
