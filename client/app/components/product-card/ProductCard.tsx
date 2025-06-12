import React, { useState } from 'react';
import type { Produto } from '~/interface/Produto';
import ProductImageIcon from './ProductImageIcon';


export type ProductCardProps = {
    produto: Produto;
};




// --- Componente do Card de Produto ---
// Cada card representa um único produto e é clicável.
const ProductCard = ({ produto }: ProductCardProps) => {
    const cardBaseClasses = "block border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white";
    // A URL para a qual o usuário será redirecionado.
    // No seu aplicativo real, você usaria o componente Link do react-router-dom.
    // Exemplo: <Link to={`/produto/${product.id}`}>...</Link>
    const productUrl = `/produto/${produto.id}`;


    return (
        <a href={productUrl} className={cardBaseClasses} onClick={(e) => e.preventDefault()}>
            <div className="p-6">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 flex items-center justify-center h-24 w-24 bg-gray-100 rounded-md">
                        <ProductImageIcon />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">{produto.nome}</h3>
                            {/* Indicador de Disponibilidade */}
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${produto.disp
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                                }`}>
                                {produto.disp ? 'Disponível' : 'Indisponível'}
                            </span>
                        </div>
                        <p className="text-gray-600 mt-2 text-sm">{produto.descricao}</p>
                        <p className="text-xs text-gray-400 mt-4">ID do Vendedor: {produto.userId}</p>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProductCard

