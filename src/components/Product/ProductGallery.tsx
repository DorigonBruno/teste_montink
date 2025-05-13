import { useState } from "react";
import type { ProductImage, ProductColor } from "../../types/product";

interface Props {
  images: ProductImage[];
  colors: ProductColor[];
  onColorChange: (color: ProductColor) => void;
}

const ProductGallery = ({ images, colors, onColorChange }: Props) => {
  const [mainImage, setMainImage] = useState<ProductImage>(images[0]);

  const getImagesByColor = (colorCode: string): ProductImage[] =>
    images.filter((img) => img.colorCode === colorCode);

  return (
    <div className="md:w-[35%]">
      <img
        src={mainImage.url}
        alt="Produto"
        className="w-full rounded-lg mb-4"
      />

      <div className="grid grid-cols-4 gap-2">
        {getImagesByColor(mainImage.colorCode).map((img) => (
          <button
            key={img.id}
            onClick={() => setMainImage(img)}
            className={`border-2 rounded-lg ${
              mainImage.id === img.id ? "border-blue-500" : "border-transparent"
            }`}
          >
            <img
              src={img.url}
              alt=""
              className="w-full h-16 object-cover rounded-md"
            />
          </button>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="font-medium mb-2">Cores disponíveis:</h3>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color.code}
              onClick={() => {
                const imagesForColor = getImagesByColor(color.code);
                if (imagesForColor.length > 0) {
                  setMainImage(imagesForColor[0]);
                  onColorChange(color);
                }
              }}
              className={`w-10 h-10 rounded-full border-2 ${
                mainImage.colorCode === color.code
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color.code }}
              title={color.name}
              aria-label={`Selecionar cor ${color.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
