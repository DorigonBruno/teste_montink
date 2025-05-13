import ProductCard from "../components/Product/ProductCard";

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Camiseta Masculina Dry Fit",
      price: 50,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_889662-MLB70090768890_062023-O-camiseta-masculina-camisas-voker-100-algodo-plus-size.webp",
      description: "Camiseta masculina 100% algodão",
    },
    {
      id: 2,
      title: "Bermuda Dry Fit",
      price: 89.9,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_935606-MLB73094420838_112023-O-bermuda-dry-fit-masculina-treino-academia-short-confortavel.webp",
      description: "Bermuda Dry Fit Ideal para esportes",
    },
    {
      id: 3,
      title: "Moletom Canguru",
      price: 76,
      image: "https://http2.mlstatic.com/D_NQ_NP_717968-MLB77398435695_072024-O-moletom-grosso-flanelado-canguru-capuz-alta-qualidade.webp",
      description: "Confortável e estiloso",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Produtos em Destaque</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
