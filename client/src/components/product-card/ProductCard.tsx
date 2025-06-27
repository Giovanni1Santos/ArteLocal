import type { Produto } from '../../interface/Produto';
import ProductImageIcon from './ProductImageIcon';
import { useDeleteProduto } from '../../hooks/Produto/useProdutoDelete'; // ajuste o caminho conforme seu projeto
import type { MouseEvent } from 'react';

export type ProductCardProps = {
    produto: Produto;
};

const ProductCard = ({ produto }: ProductCardProps) => {
    const cardBaseClasses = "block border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white";

    const addCart = (produto: Produto) => {
        const cartStr = localStorage.getItem("carrinho");
        const cart = cartStr ? JSON.parse(cartStr) : [];

        const index = cart.findIndex((item: any) => item.id === produto.id);

        if (index !== -1) {
            cart[index].quantidade += 1;
        } else {
            cart.push({ ...produto, quantidade: 1 });
        }

        localStorage.setItem("carrinho", JSON.stringify(cart));
    };

    const deleteProdutoMutation = useDeleteProduto();

    // Função para deletar o produto
    const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); // evitar que o clique propague e dispare o onClick do <a>
        e.preventDefault()

        if (window.confirm(`Deseja realmente deletar o produto "${produto.nome}"?`)) {
            deleteProdutoMutation.mutate(produto.id);
            window.location.reload()
        }
    };

    return (
        <a className={cardBaseClasses} onClick={(e) => e.preventDefault()}>
            <div className="p-6">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 flex items-center justify-center h-24 w-24 bg-gray-100 rounded-md relative">
                        <ProductImageIcon />
                        {/* Botão de deletar no canto superior direito da imagem */}
                        <button
                            onClick={handleDelete}
                            className="absolute top-1 right-1 p-1 rounded hover:bg-red-100"
                            aria-label="Deletar produto"
                            title="Deletar produto"
                        >
                            {/* Ícone de lixeira simples SVG */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-red-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">{produto.nome}</h3>
                            {/* Indicador de Disponibilidade */}
                            <span
                                className={`px-3 py-1 text-xs font-semibold rounded-full ${produto.disp
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                                    }`}
                            >
                                {produto.disp ? 'Disponível' : 'Indisponível'}
                            </span>
                        </div>
                        <p className="text-gray-600 mt-2 text-sm">{produto.descricao}</p>
                        <p className="text-xs text-gray-400 mt-4">ID do Vendedor: {produto.userId}</p>

                        <div className="mt-4">
                            <button
                                onClick={() => addCart(produto)} // Substitua isso por lógica real
                                disabled={!produto.disp}
                                className={`w-full px-4 py-2 rounded-md text-sm font-medium ${produto.disp
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProductCard;
