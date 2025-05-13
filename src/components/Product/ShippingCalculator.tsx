import { useState } from "react";
import type { Address } from "../../types/shipping";

interface Props {
  productPrice: number;
  onShippingChange: (value: number) => void;
}

const ShippingCalculator = ({ productPrice, onShippingChange }: Props) => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<Address | null>(null);
  const [shippingPrice, setShippingPrice] = useState(0);

  const calculateShipping = (uf: string) => {
    const prices: Record<string, number> = {
      SP: 15.0,
      RJ: 20.0,
      MG: 18.0,
      default: 25.0,
    };
    return prices[uf] || prices.default;
  };

  const checkCep = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data: Address = await response.json();

      if (data.erro) {
        throw new Error("CEP não encontrado");
      }

      const price = calculateShipping(data.uf);
      setAddress(data);
      setShippingPrice(price);
      onShippingChange(price);
      setCep("");
    } catch (error) {
      alert("CEP inválido ou não encontrado" + error);
      setAddress(null);
      setShippingPrice(0);
    }
  };

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <h3 className="font-bold mb-2">Calcular frete</h3>
      <div className="flex gap-2">
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
          placeholder="Digite seu CEP"
          className="flex-1 p-2 border rounded"
          maxLength={8}
        />
        <button
          onClick={checkCep}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Calcular
        </button>
      </div>

      {address && (
        <div className="mt-4 text-sm">
          <p className="mb-1">
            <strong>Entrega para:</strong>
            <br />
            {address.logradouro}, {address.bairro} - {address.localidade}/
            {address.uf}
          </p>
          <p className="font-medium mt-2">
            Frete: R$ {shippingPrice.toFixed(2)}
          </p>
          <p className="text-lg font-bold mt-2">
            Total: R$ {(productPrice + shippingPrice).toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default ShippingCalculator;
