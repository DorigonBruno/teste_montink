import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center gap-2">
      <h1 className="text-7xl font-bold mb-4">Oops ....</h1>
      <p className="font-medium">Página não encontrada.</p>
      <Link to={"/"}>Voltar para Home </Link>
    </div>
  );
};

export default NotFound;
